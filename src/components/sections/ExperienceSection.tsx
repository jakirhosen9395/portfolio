import { ArrowUpRight, Calendar } from 'lucide-react'
import type { Experience } from '@/types/portfolio'

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="border-b border-border bg-surface/45 py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">03 / Experience</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">A career built close to the systems.</h2>
        </div>
        <div className="space-y-4">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="group grid gap-6 rounded-2xl border border-border bg-background p-6 transition hover:border-primary/40 md:grid-cols-[10rem_1fr_auto] md:items-start md:p-8">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-text-muted"><Calendar className="h-4 w-4 text-primary" /> {experience.period}</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{experience.company}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{experience.role}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">{experience.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{experience.technologies.slice(0, 6).map((technology) => <span key={technology} className="rounded-full bg-surface px-3 py-1 text-xs text-text-muted">{technology}</span>)}</div>
              </div>
              <ArrowUpRight className="hidden h-5 w-5 text-text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}