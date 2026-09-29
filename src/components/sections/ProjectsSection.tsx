import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types/portfolio'

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="border-b border-border bg-background py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="eyebrow">04 / Selected work</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Systems, platforms, and lessons learned.</h2></div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-amber-300">Explore all case studies <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        {projects.length ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article key={project.slug} className="group overflow-hidden rounded-2xl border border-border bg-surface/60 transition hover:border-primary/40">
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-hover">
                  {project.coverImage && <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/65 px-4 py-3 text-xs backdrop-blur-md"><span className="uppercase tracking-[0.16em] text-primary">{project.category}</span><span className="text-slate-300">{project.status}</span></div>
                </div>
                <div className="p-6 sm:p-8"><h3 className="text-2xl font-semibold text-white">{project.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-text-muted">{project.shortDescription}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.slice(0, 5).map((technology) => <span key={technology} className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">{technology}</span>)}</div><Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-primary">View case study <ArrowUpRight className="h-4 w-4" /></Link></div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-12 text-center"><p className="text-lg font-medium text-white">Case studies are being prepared.</p><p className="mt-2 text-sm text-text-muted">Publish verified project work in Sanity Studio to make it visible here.</p></div>
        )}
      </div>
    </section>
  )
}