import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/site-data'

export default function ArticlesSection() {
  return (
    <section id="articles" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Articles</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Engineering notes and practical lessons.</h2>
          </div>
          <Link href="/articles" className="hidden text-sm font-semibold text-primary hover:text-cyan-300 md:inline-flex">View Journal →</Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group overflow-hidden rounded-2xl border border-border bg-surface/70">
              <div className="relative h-52 overflow-hidden border-b border-border">
                <Image src={article.coverImage} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">{tag}</span>
                  ))}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{article.title}</h3>
                <p className="mb-5 text-sm leading-6 text-slate-300">{article.excerpt}</p>
                <Link href={`/articles/${article.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-cyan-300">Read article →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
