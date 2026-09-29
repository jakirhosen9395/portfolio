'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download, Mail, MapPin, ServerCog, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SiteSettings } from '@/types/portfolio'

export default function HeroSection({ settings }: { settings: SiteSettings }) {
  const portrait = settings.profileImage

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(69,194,177,0.13),transparent_28%),radial-gradient(circle_at_18%_20%,rgba(245,185,66,0.08),transparent_30%)]" />
      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary" /> DevOps Engineer
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
            {settings.name}
          </h1>
          <p className="mt-7 max-w-2xl text-2xl font-medium leading-tight text-slate-200 sm:text-3xl">
            Building reliable cloud infrastructure, automation, and production systems.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            {settings.shortTagline}. I design calm, observable delivery systems that help teams ship with confidence.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              View projects <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/resume" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-white transition hover:border-primary/60 hover:text-primary">
              <Download className="h-4 w-4" /> Resume
            </Link>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-text-muted transition hover:text-white">
              <Mail className="h-4 w-4" /> Let&apos;s connect
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5 text-sm text-text-muted">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> {settings.availabilityStatus}</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {settings.location}</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#20262a]">
                {portrait ? (
                  <Image src={portrait} alt={`${settings.name} profile portrait`} fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_28%,rgba(245,185,66,0.2),transparent_22%),linear-gradient(145deg,#1b2226,#101417)] p-8 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-3xl font-semibold text-primary">JH</div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">Profile portrait</p>
                    <p className="mt-2 max-w-[14rem] text-sm leading-6 text-slate-400">Upload your real photo in Sanity Site Settings to complete this identity panel.</p>
                  </div>
                )}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-primary">Operational focus</p>
                      <p className="mt-1 text-sm font-medium text-white">Cloud · Automation · Security</p>
                    </div>
                    <ServerCog className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4 text-xs text-text-muted">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Reliable by design</span>
                <span className="font-mono">01 / 01</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}