import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'
import { getPortfolioContent } from '@/sanity/lib/content'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getPortfolioContent()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-project.vercel.app'

  return {
    metadataBase: new URL(siteUrl),
    title: siteSettings.seoTitle,
    description: siteSettings.seoDescription,
    alternates: { canonical: siteUrl },
    openGraph: {
      title: siteSettings.seoTitle,
      description: siteSettings.seoDescription,
      url: siteUrl,
      siteName: siteSettings.name,
      type: 'website',
      images: siteSettings.ogImage ? [{ url: siteSettings.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteSettings.seoTitle,
      description: siteSettings.seoDescription,
      images: siteSettings.ogImage ? [siteSettings.ogImage] : undefined,
    },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { siteSettings } = await getPortfolioContent()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-project.vercel.app'
  const personJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteSettings.name,
    jobTitle: siteSettings.professionalTitle,
    url: siteUrl,
    email: siteSettings.email ? `mailto:${siteSettings.email}` : undefined,
    sameAs: [siteSettings.github, siteSettings.gitlab, siteSettings.linkedin].filter(Boolean),
  }).replace(/</g, '\\u003c')

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-slate-100 antialiased selection:bg-primary/40 selection:text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
        <LenisProvider>
          <div className="min-h-screen bg-background text-slate-100">
            <Header settings={siteSettings} />
            <div className="pt-16">{children}</div>
            <Footer settings={siteSettings} />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
