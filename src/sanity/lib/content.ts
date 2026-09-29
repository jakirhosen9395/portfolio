import { groq } from 'next-sanity'
import { articles as fallbackArticles, experiences as fallbackExperiences, projects as fallbackProjects, siteSettings as fallbackSiteSettings, skillCategories as fallbackSkillCategories } from '@/lib/site-data'
import type { Article, Experience, Project, SkillCategory, SiteSettings } from '@/types/portfolio'
import { isSanityConfigured } from '../env'
import { client } from './client'
import { urlForImage } from './image'

const portfolioQuery = groq`{
  "settings": *[_type == "siteSettings"][0]{
    name, professionalTitle, shortTagline, longIntroduction, email, location, availabilityStatus,
    github, gitlab, linkedin, seoTitle, seoDescription,
    "profileImage": profileImage,
    "profileImages": profileImages,
    "ogImage": ogImage,
    "resumeUrl": resumeUrl.asset->url
  },
  "experiences": *[_type == "experience"] | order(order asc, startDate desc),
  "skills": *[_type == "skill"] | order(category asc, name asc),
  "projects": *[_type == "project"] | order(date desc, title asc){
    ...,
    "slug": slug.current,
    "coverImage": coverImage,
    "gallery": gallery,
    "architectureDiagram": architectureDiagram
  },
  "articles": *[_type == "article"] | order(publishedDate desc){
    ...,
    "slug": slug.current,
    "coverImage": coverImage,
    "content": content
  }
}`

type RawImage = { _type?: string; asset?: { _ref?: string; _type?: 'reference' } }
type RawBlock = { children?: Array<{ text?: string }> }
type RawSettings = Partial<SiteSettings> & { profileImage?: RawImage; profileImages?: RawImage[]; ogImage?: RawImage; resumeUrl?: string }
type RawExperience = { company?: string; position?: string; startDate?: string; endDate?: string; currentlyWorking?: boolean; location?: string; summary?: string; responsibilities?: string[]; technologies?: string[] }
type RawSkill = { name?: string; category?: string; icon?: string; proficiency?: string }
type RawProject = Omit<Partial<Project>, 'coverImage' | 'gallery' | 'problem' | 'objectives' | 'architecture' | 'infrastructure' | 'deployment' | 'cicd' | 'security' | 'observability' | 'troubleshooting' | 'lessonsLearned'> & { coverImage?: RawImage; gallery?: RawImage[]; architectureDiagram?: RawImage; problem?: RawBlock[]; objectives?: RawBlock[]; architecture?: RawBlock[]; infrastructure?: RawBlock[]; deployment?: RawBlock[]; cicd?: RawBlock[]; security?: RawBlock[]; observability?: RawBlock[]; troubleshooting?: RawBlock[]; lessonsLearned?: RawBlock[] }
type RawArticle = Omit<Partial<Article>, 'coverImage' | 'content'> & { coverImage?: RawImage; content?: Array<RawBlock | RawImage> }
type RawContent = { settings?: RawSettings; experiences?: RawExperience[]; skills?: RawSkill[]; projects?: RawProject[]; articles?: RawArticle[] }

const imageUrl = (image?: RawImage) => image?.asset?._ref ? urlForImage(image).width(1600).url() : undefined
const blockText = (blocks?: RawBlock[]) => blocks?.map((block) => block.children?.map((child) => child.text ?? '').join('')).filter((value): value is string => Boolean(value)) ?? []

function mapSettings(settings?: RawSettings): SiteSettings {
  return {
    ...fallbackSiteSettings,
    ...settings,
    profileImage: imageUrl(settings?.profileImage) ?? fallbackSiteSettings.profileImage,
    profileImages: settings?.profileImages?.map(imageUrl).filter((value): value is string => Boolean(value)) ?? fallbackSiteSettings.profileImages,
    ogImage: imageUrl(settings?.ogImage) ?? fallbackSiteSettings.ogImage,
    resumeUrl: settings?.resumeUrl ?? fallbackSiteSettings.resumeUrl,
  }
}

function mapExperience(experience: RawExperience): Experience {
  const start = experience.startDate ? new Date(experience.startDate).toLocaleDateString('en', { month: 'long', year: 'numeric' }) : ''
  const end = experience.currentlyWorking ? 'Present' : experience.endDate ? new Date(experience.endDate).toLocaleDateString('en', { month: 'long', year: 'numeric' }) : ''
  return {
    company: experience.company ?? '',
    role: experience.position ?? '',
    period: [start, end].filter(Boolean).join(' - '),
    location: experience.location ?? '',
    description: experience.summary ?? '',
    responsibilities: experience.responsibilities ?? [],
    technologies: experience.technologies ?? [],
  }
}

function mapProject(project: RawProject): Project {
  return {
    ...fallbackProjects[0],
    ...project,
    title: project.title ?? '',
    slug: project.slug ?? '',
    shortDescription: project.shortDescription ?? '',
    description: project.description ?? '',
    technologies: project.technologies ?? [],
    coverImage: imageUrl(project.coverImage) ?? fallbackProjects[0]?.coverImage ?? '',
    gallery: project.gallery?.map(imageUrl).filter((value): value is string => Boolean(value)) ?? [],
    problem: blockText(project.problem),
    objectives: blockText(project.objectives),
    architecture: blockText(project.architecture),
    infrastructure: blockText(project.infrastructure),
    deployment: blockText(project.deployment),
    cicd: blockText(project.cicd),
    security: blockText(project.security),
    observability: blockText(project.observability),
    troubleshooting: blockText(project.troubleshooting),
    lessonsLearned: blockText(project.lessonsLearned),
  }
}

function mapArticle(article: RawArticle): Article {
  return {
    ...fallbackArticles[0],
    ...article,
    title: article.title ?? '',
    slug: article.slug ?? '',
    excerpt: article.excerpt ?? '',
    coverImage: imageUrl(article.coverImage) ?? fallbackArticles[0]?.coverImage ?? '',
    author: article.author ?? fallbackSiteSettings.name,
    publishedDate: article.publishedDate ?? '',
    readingTime: article.readingTime ?? 0,
    tags: article.tags ?? [],
    content: article.content?.flatMap((item) => 'children' in item ? blockText([item]) : []).filter((value): value is string => Boolean(value)) ?? [],
  }
}

export async function getPortfolioContent() {
  if (!isSanityConfigured || !client) {
    return { siteSettings: fallbackSiteSettings, experiences: fallbackExperiences, skillCategories: fallbackSkillCategories, projects: fallbackProjects, articles: fallbackArticles }
  }

  try {
    const content = await client.fetch<RawContent>(portfolioQuery, {}, { next: { revalidate: 60, tags: ['portfolio-content'] } })
    const skills = content.skills?.reduce<SkillCategory[]>((categories, skill) => {
      const category = skill.category ?? 'Other'
      const existing = categories.find((item) => item.name === category)
      if (existing) existing.skills.push(skill.name ?? '')
      else categories.push({ name: category, icon: skill.icon ?? 'Server', skills: [skill.name ?? ''] })
      return categories
    }, [])

    return {
      siteSettings: mapSettings(content.settings),
      experiences: content.experiences?.length ? content.experiences.map(mapExperience) : fallbackExperiences,
      skillCategories: skills?.length ? skills : fallbackSkillCategories,
      projects: content.projects?.length ? content.projects.map(mapProject) : fallbackProjects,
      articles: content.articles?.length ? content.articles.map(mapArticle) : fallbackArticles,
    }
  } catch (error) {
    console.error('Sanity content fetch failed. Check the project ID, dataset, token, and published content.', error)
    return { siteSettings: fallbackSiteSettings, experiences: fallbackExperiences, skillCategories: fallbackSkillCategories, projects: fallbackProjects, articles: fallbackArticles }
  }
}