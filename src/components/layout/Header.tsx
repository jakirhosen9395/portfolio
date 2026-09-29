'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import CommandPalette from '@/components/command-palette/CommandPalette'
import type { SiteSettings } from '@/types/portfolio'

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Notes', href: '/articles' },
]

export default function Header({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/60 text-sm font-semibold text-primary">JH</span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">{settings.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => <Link key={link.name} href={link.href} className="text-sm text-text-muted transition hover:text-white">{link.name}</Link>)}
          <Link href="/resume" className="rounded-full border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-slate-950">Resume</Link>
          <CommandPalette />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <CommandPalette />
          <button type="button" onClick={() => setOpen((current) => !current)} className="rounded-full border border-border p-2 text-slate-200" aria-label="Toggle menu" aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-4 py-4 md:hidden"><div className="section-shell flex flex-col gap-1">{navLinks.map((link) => <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-surface hover:text-primary">{link.name}</Link>)}<Link href="/resume" onClick={() => setOpen(false)} className="mt-2 rounded-full border border-primary/50 px-3 py-3 text-center text-sm font-semibold text-primary">Resume</Link></div></nav>}
    </header>
  )
}