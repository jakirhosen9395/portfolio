import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'
import { siteSettings } from '@/lib/site-data'

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-domain.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteSettings.seoTitle,
  description: siteSettings.seoDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteSettings.seoTitle,
    description: siteSettings.seoDescription,
    url: siteUrl,
    siteName: siteSettings.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteSettings.seoTitle,
    description: siteSettings.seoDescription,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-slate-100 antialiased selection:bg-primary/40 selection:text-white">
        <LenisProvider>
          <div className="min-h-screen bg-background text-slate-100">
            <Header />
            <div className="pt-16">{children}</div>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
