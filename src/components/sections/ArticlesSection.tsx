import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/types/portfolio'

export default function ArticlesSection({ articles }: { articles: Article[] }) {
  return (
    <section id="articles" className="border-b border-border bg-background py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">06 / Notes</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Practical notes from the work.</h2></div><Link href="/articles" className="text-sm font-semibold text-primary hover:text-amber-300">Read the journal <span aria-hidden="true">→</span></Link></div>
        {articles.length ? <div className="grid gap-5 md:grid-cols-3">{articles.slice(0, 3).map((article) => <article key={article.slug} className="overflow-hidden rounded-2xl border border-border bg-surface/60">{article.coverImage && <div className="relative aspect-[16/10]"><Image src={article.coverImage} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>}<div className="p-6"><p className="text-xs text-text-muted">{article.publishedDate} · {article.readingTime} min read</p><h3 className="mt-4 text-xl font-semibold text-white">{article.title}</h3><p className="mt-3 text-sm leading-6 text-text-muted">{article.excerpt}</p><Link href={`/articles/${article.slug}`} className="mt-6 inline-flex text-sm font-semibold text-primary">Read article →</Link></div></article>)}</div> : <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-12 text-center"><p className="text-lg font-medium text-white">Technical notes are coming soon.</p><p className="mt-2 text-sm text-text-muted">Articles will appear here after they are published in Sanity Studio.</p></div>}
      </div>
    </section>
  )
}