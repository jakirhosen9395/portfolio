'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import CommandPalette from '@/components/command-palette/CommandPalette'
import type { SiteSettings } from '@/types/portfolio'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-[#0f1115]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Go to home">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-xs font-bold text-primary">J</div>
          <div className="font-mono text-sm font-semibold tracking-wide text-white">
            {settings.name}<span className="text-primary">.devops</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-primary">
              {link.name}
            </Link>
          ))}
          <div className="mx-1 h-4 w-px bg-border" />
          <Link href="/#contact" className="rounded-md border border-border bg-surface/70 px-3 py-2 text-sm font-medium text-white transition hover:border-primary/60 hover:text-primary">
            Let&apos;s Connect
          </Link>
          <CommandPalette />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <CommandPalette />
          <button type="button" onClick={() => setOpen((current) => !current)} className="rounded-md border border-border bg-surface/70 p-2 text-slate-200" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-[#0f1115] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-surface/80 hover:text-primary">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
