import Link from 'next/link'
import Image from 'next/image'
import { getPortfolioContent } from '@/sanity/lib/content'

export default async function ArticlesPage() {
  const { articles } = await getPortfolioContent()

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Engineering Journal</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Infrastructure insights and practical engineering notes.</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="group overflow-hidden rounded-2xl border border-border bg-surface/60">
            <div className="relative h-56 overflow-hidden border-b border-border">
                {article.coverImage && <Image src={article.coverImage} alt={article.title} fill sizes="(max-width: 1280px) 33vw, 400px" className="object-cover transition duration-500 group-hover:scale-105" />}
            </div>
            <div className="p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">{tag}</span>
                ))}
              </div>
              <h2 className="mb-3 text-xl font-semibold text-white">{article.title}</h2>
              <p className="mb-4 text-sm leading-7 text-slate-300">{article.excerpt}</p>

              <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-slate-400">
                <span>{article.author}</span>
                <span>{article.readingTime} min read</span>
              </div>

              <Link href={`/articles/${article.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-cyan-300">Read Article →</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
