import AboutSection from '@/components/sections/AboutSection'
import ArticlesSection from '@/components/sections/ArticlesSection'
import ContactSection from '@/components/sections/ContactSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import { getPortfolioContent } from '@/sanity/lib/content'

export default async function Home() {
  const { siteSettings, experiences, skillCategories, projects, articles } = await getPortfolioContent()

  return (
    <main>
      <HeroSection settings={siteSettings} />
      <AboutSection settings={siteSettings} />
      <SkillsSection skillCategories={skillCategories} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ProcessSection />
      <ArticlesSection articles={articles} />
      <ContactSection settings={siteSettings} />
    </main>
  )
}
