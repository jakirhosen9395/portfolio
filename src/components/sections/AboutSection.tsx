import { Activity, Boxes, ShieldCheck, Terminal } from 'lucide-react'
import type { SiteSettings } from '@/types/portfolio'

const focusAreas = [
  { label: 'Cloud foundations', detail: 'AWS networks, compute, storage, and delivery paths.', icon: Boxes },
  { label: 'Delivery systems', detail: 'CI/CD workflows that make releases repeatable and visible.', icon: Terminal },
  { label: 'Operational clarity', detail: 'Monitoring, logs, alerts, and useful feedback loops.', icon: Activity },
  { label: 'Security by default', detail: 'Practical controls that protect systems without slowing teams down.', icon: ShieldCheck },
]

export default function AboutSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="about" className="border-b border-border bg-surface/45 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">01 / About</p>
            <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">Infrastructure should feel clear, not mysterious.</h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">{settings.longIntroduction}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-muted">My work sits between application delivery and infrastructure operations: shaping reliable release paths, automating repeatable work, and giving teams the visibility they need when systems are under pressure.</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {focusAreas.map(({ label, detail, icon: Icon }) => (
                <div key={label} className="bg-background p-6 transition hover:bg-surface-hover">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-base font-semibold text-white">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}