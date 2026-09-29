'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Download, Mail, ServerCog, ShieldCheck, TerminalSquare } from 'lucide-react'
import type { SiteSettings } from '@/types/portfolio'

const statusRows = [
  ['AWS', 'ONLINE'],
  ['KUBERNETES', 'ACTIVE'],
  ['CI/CD', 'RUNNING'],
  ['MONITORING', 'ONLINE'],
  ['SECURITY', 'ENABLED'],
  ['INFRASTRUCTURE', 'READY'],
]

export default function HeroSection({ settings }: { settings: SiteSettings }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.15),_transparent_35%),_linear-gradient(180deg,_rgba(15,17,21,1),_rgba(15,17,21,0.96))]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/8 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-primary shadow-[inset_0_0_30px_rgba(20,184,166,0.08)]">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {settings.availabilityStatus}
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-[-0.07em] text-white sm:text-5xl lg:text-7xl">
            I build <span className="bg-gradient-to-r from-primary via-cyan-300 to-sky-400 bg-clip-text text-transparent">reliable infrastructure</span> for modern applications.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            {settings.shortTagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/resume" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-primary/60 hover:text-primary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-border/80 hover:bg-surface/70">
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
            {['AWS', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'].map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-surface/60 px-2.5 py-1.5 text-[10px]">{tech}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative z-10">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 via-cyan-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-[#090b10]/90 shadow-[0_0_0_1px_rgba(148,163,184,0.06),0_30px_70px_rgba(2,6,23,0.8)]">
            <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">system-status.sh</span>
            </div>

            <div className="space-y-6 p-6 font-mono text-sm text-slate-200">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Infrastructure Status</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {statusRows.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3 rounded border border-border bg-surface/40 px-2 py-2 text-[11px] uppercase tracking-[0.14em]">
                    <span className="text-slate-300">{label}</span>
                    <span className={value === 'ONLINE' || value === 'RUNNING' || value === 'ACTIVE' ? 'text-primary' : value === 'READY' ? 'text-cyan-300' : 'text-amber-300'}>{value}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 border-t border-border pt-4 text-[11px] text-slate-400">
                <div className="flex items-center gap-2"><TerminalSquare className="h-4 w-4 text-primary" /> Build pipeline healthy</div>
                <div className="flex items-center gap-2"><ServerCog className="h-4 w-4 text-cyan-300" /> Cloud workloads provisioned</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Security controls enabled</div>
                <div className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-amber-300" /> Available for design and delivery work</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
