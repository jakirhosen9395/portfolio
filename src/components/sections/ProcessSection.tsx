'use client'

import { motion } from 'framer-motion'
import { processStages } from '@/lib/site-data'

export default function ProcessSection() {
  return (
    <section id="process" className="border-t border-border bg-surface/70 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Engineering Process</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From requirement to reliable operations.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-7">
          {processStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative rounded-xl border border-border bg-background p-5 transition hover:border-primary/60 hover:bg-surface/80"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">0{index + 1}</span>
                {index < processStages.length - 1 && <span className="hidden text-slate-500 xl:block">↓</span>}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{stage.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
