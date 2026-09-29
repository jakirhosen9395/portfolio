import { redirect } from 'next/navigation'
import { getPortfolioContent } from '@/sanity/lib/content'

export default async function ResumePage() {
  const { siteSettings } = await getPortfolioContent()
  redirect(siteSettings.resumeUrl)
}