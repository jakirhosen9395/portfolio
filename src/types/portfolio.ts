export type SiteSettings = {
  name: string
  professionalTitle: string
  shortTagline: string
  longIntroduction: string
  email: string
  location: string
  availabilityStatus: string
  profileImage?: string
  profileImages?: string[]
  github: string
  gitlab: string
  linkedin: string
  resumeUrl: string
  seoTitle: string
  seoDescription: string
  ogImage?: string
}

export type SocialLink = {
  label: string
  href: string
  type: 'github' | 'gitlab' | 'linkedin' | 'email' | 'resume'
}

export type SkillCategory = {
  name: string
  icon: string
  skills: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export type Project = {
  title: string
  slug: string
  category: string
  status: string
  shortDescription: string
  description: string
  technologies: string[]
  coverImage: string
  gallery: string[]
  githubUrl?: string
  gitlabUrl?: string
  liveUrl?: string
  documentationUrl?: string
  problem: string[]
  objectives: string[]
  architecture: string[]
  infrastructure: string[]
  deployment: string[]
  cicd: string[]
  security: string[]
  observability: string[]
  troubleshooting: string[]
  lessonsLearned: string[]
}

export type Article = {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  author: string
  publishedDate: string
  readingTime: number
  tags: string[]
  content: string[]
}

export type ProcessStage = {
  title: string
  description: string
}
