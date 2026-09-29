import Link from 'next/link'
import { Code2, FileText, Mail, Share2 } from 'lucide-react'
import type { SiteSettings } from '@/types/portfolio'

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="mt-20 border-t border-border bg-surface/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-mono text-lg font-bold text-white">{settings.name}</h3>
            <p className="mb-4 font-mono text-sm text-primary">{settings.professionalTitle}</p>
            <p className="max-w-md text-sm text-slate-400">Cloud Infrastructure • Automation • Security • Observability</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono uppercase tracking-[0.2em]">System status: online</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">Connect</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {settings.github && <li><a href={settings.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Code2 className="h-4 w-4" /> GitHub</a></li>}
                {settings.linkedin && <li><a href={settings.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Share2 className="h-4 w-4" /> LinkedIn</a></li>}
                {settings.email && <li><a href={`mailto:${settings.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> Email</a></li>}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
                <li><Link href="/articles" className="hover:text-primary">Articles</Link></li>
                <li><a href={settings.resumeUrl} className="inline-flex items-center gap-2 hover:text-primary"><FileText className="h-4 w-4" /> Resume</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} {settings.name}. All rights reserved.</p>
          <div className="rounded border border-border bg-background px-2 py-1 font-mono uppercase tracking-[0.18em] text-slate-300">v1.0.0</div>
        </div>
      </div>
    </footer>
  )
}
