import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Code2, ExternalLink, Link2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPortfolioContent } from '@/sanity/lib/content'

export async function generateStaticParams() {
  const { projects } = await getPortfolioContent()
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { projects } = await getPortfolioContent()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return notFound()
  }

  const sections: Array<[string, string[]]> = [
    ['The Problem', project.problem],
    ['Objectives', project.objectives],
    ['Architecture', project.architecture],
    ['Infrastructure', project.infrastructure],
    ['Deployment', project.deployment],
    ['CI/CD', project.cicd],
    ['Security', project.security],
    ['Observability', project.observability],
    ['Troubleshooting', project.troubleshooting],
    ['Lessons Learned', project.lessonsLearned],
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <header className="mb-10 overflow-hidden rounded-2xl border border-border bg-surface/70">
        <div className="relative h-72 w-full">
          {project.coverImage && <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />}
        </div>
        <div className="space-y-6 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{project.category}</span>
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">{project.status}</span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{project.title}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{project.shortDescription}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-white hover:border-primary/60 hover:text-primary">
                  <Code2 className="h-4 w-4" /> View Source
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-white hover:border-primary/60 hover:text-primary">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
              {project.documentationUrl && (
                <a href={project.documentationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-white hover:border-primary/60 hover:text-primary">
                  <Link2 className="h-4 w-4" /> Docs
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-border bg-background px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-300">{technology}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          {sections.map(([heading, items]) => (
            <section key={heading} className="rounded-2xl border border-border bg-surface/60 p-6">
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">{heading}</h2>
              <ul className="space-y-3 text-slate-300">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-base">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-surface/70 p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">Engineering flow</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded border border-border bg-background px-3 py-2">Requirement → Architecture</div>
              <div className="rounded border border-border bg-background px-3 py-2">Infrastructure → Automation</div>
              <div className="rounded border border-border bg-background px-3 py-2">Deployment → Monitoring</div>
              <div className="rounded border border-border bg-background px-3 py-2">Security → Troubleshooting</div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface/70 p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">Gallery</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {project.gallery.map((image) => (
                <div key={image} className="relative h-28 overflow-hidden rounded-lg border border-border">
                  <Image src={image} alt={project.title} fill sizes="(max-width: 1024px) 50vw, 400px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
