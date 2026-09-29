import { Activity, Boxes, Cloud, GitBranch, Network, ServerCog, ShieldCheck } from 'lucide-react'
import type { SkillCategory } from '@/types/portfolio'

const icons = [Cloud, Boxes, GitBranch, ServerCog, Activity, ShieldCheck, Network]

export default function SkillsSection({ skillCategories }: { skillCategories: SkillCategory[] }) {
  return (
    <section id="skills" className="border-b border-border bg-background py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">02 / Technical stack</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Tools for dependable delivery.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-text-muted">A working toolkit across cloud infrastructure, automation, observability, and security.</p>
        </div>
        {skillCategories.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div key={category.name} className="rounded-2xl border border-border bg-surface/65 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-mono text-xs text-text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-lg font-semibold text-white">{category.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-text-muted">{skill}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-10 text-center text-text-muted">Skills will appear here after they are published in Sanity Studio.</div>
        )}
      </div>
    </section>
  )
}