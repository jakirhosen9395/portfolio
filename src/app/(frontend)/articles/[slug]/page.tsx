import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPortfolioContent } from '@/sanity/lib/content'

export async function generateStaticParams() {
  const { articles } = await getPortfolioContent()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { articles } = await getPortfolioContent()
  const article = articles.find((item) => item.slug === slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, type: 'article', images: article.coverImage ? [article.coverImage] : undefined } }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { articles } = await getPortfolioContent()
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <Link href="/articles" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to articles
      </Link>

      <article className="overflow-hidden rounded-2xl border border-border bg-surface/70">
        <div className="relative h-80 w-full overflow-hidden border-b border-border">
          {article.coverImage && <Image src={article.coverImage} alt={article.title} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />}
        </div>

        <div className="space-y-8 p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">{tag}</span>
            ))}
          </div>

          <header>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{article.publishedDate}</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{article.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.readingTime} min read</span>
            </div>
          </header>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
