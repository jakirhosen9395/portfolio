import { ArrowUpRight, Code2, Mail, MapPin, Share2 } from 'lucide-react'
import type { SiteSettings } from '@/types/portfolio'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="contact" className="bg-surface/45 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="eyebrow">07 / Contact</p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl">Let&apos;s make the next system easier to operate.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-text-muted">For DevOps, cloud infrastructure, platform engineering, or a thoughtful systems conversation, send a note and I&apos;ll get back to you.</p>
            <div className="mt-10 space-y-4 text-sm text-text-muted">
              {settings.email && <a href={`mailto:${settings.email}`} className="flex items-center gap-3 transition hover:text-primary"><Mail className="h-4 w-4 text-primary" /> {settings.email}<ArrowUpRight className="h-4 w-4" /></a>}
              {settings.location && <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {settings.location}</p>}
              {settings.linkedin && <a href={settings.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-primary"><Share2 className="h-4 w-4 text-primary" /> LinkedIn <ArrowUpRight className="h-4 w-4" /></a>}
              {settings.github && <a href={settings.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-primary"><Code2 className="h-4 w-4 text-primary" /> GitHub <ArrowUpRight className="h-4 w-4" /></a>}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}