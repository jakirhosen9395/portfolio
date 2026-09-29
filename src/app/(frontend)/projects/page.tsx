import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/site-data'

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Featured Work</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Infrastructure and platform case studies.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="group overflow-hidden rounded-2xl border border-border bg-surface/70">
            <div className="relative h-64 overflow-hidden border-b border-border">
              <Image src={project.coverImage} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{project.category}</span>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">{project.status}</span>
              </div>

              <h2 className="mb-3 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mb-6 text-base leading-7 text-slate-300">{project.shortDescription}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-slate-950">View Case Study <ArrowUpRight className="h-4 w-4" /></Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-slate-200 hover:border-primary/60 hover:text-primary">
                    <Code2 className="h-4 w-4" /> Source
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-slate-200 hover:border-primary/60 hover:text-primary">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
