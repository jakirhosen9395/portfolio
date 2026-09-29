import { ArrowRight } from 'lucide-react'
import { processStages } from '@/lib/site-data'

export default function ProcessSection() {
  return (
    <section id="process" className="border-b border-border bg-surface/45 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow">05 / How I work</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Small feedback loops. Stronger systems.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {processStages.map((stage, index) => <div key={stage.title} className="bg-background p-6"><div className="flex items-center justify-between text-xs font-mono text-primary"><span>0{index + 1}</span>{index < processStages.length - 1 && <ArrowRight className="h-4 w-4 text-accent" />}</div><h3 className="mt-8 font-semibold text-white">{stage.title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{stage.description}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}