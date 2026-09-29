import Link from 'next/link'
import { ArrowUpRight, Code2, FileText, Mail, Share2 } from 'lucide-react'
import type { SiteSettings } from '@/types/portfolio'

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div><p className="text-lg font-semibold text-white">{settings.name}</p><p className="mt-2 text-sm text-text-muted">{settings.professionalTitle} · Cloud infrastructure · Automation · Security</p></div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-text-muted">
          {settings.github && <a href={settings.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Code2 className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" /></a>}
          {settings.linkedin && <a href={settings.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Share2 className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" /></a>}
          {settings.email && <a href={`mailto:${settings.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> Email</a>}
          <Link href="/resume" className="inline-flex items-center gap-2 hover:text-primary"><FileText className="h-4 w-4" /> Resume</Link>
        </div>
      </div>
      <div className="section-shell mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} {settings.name}. All rights reserved.</span><span>Designed for reliable systems.</span></div>
    </footer>
  )
}