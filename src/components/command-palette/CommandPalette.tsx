'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { BriefcaseBusiness, Command, Download, ExternalLink, Mail, Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const commands = [
  { label: 'Go to Home', href: '/', icon: Search },
  { label: 'Go to Projects', href: '/#projects', icon: ExternalLink },
  { label: 'Go to Experience', href: '/#experience', icon: BriefcaseBusiness },
  { label: 'Go to Skills', href: '/#skills', icon: ExternalLink },
  { label: 'Go to Articles', href: '/articles', icon: ExternalLink },
  { label: 'Download Resume', href: '/resume', icon: Download },
  { label: 'Open Contact Page', href: '/contact', icon: Mail },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((current) => !current)
      }

      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredCommands = useMemo(() => {
    const nextQuery = query.trim().toLowerCase()
    if (!nextQuery) return commands

    return commands.filter((command) => command.label.toLowerCase().includes(nextQuery))
  }, [query])

  return (
    <>
      <button
        type="button"
        aria-label="Open command palette"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-primary/60 hover:text-primary"
      >
        <Command className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Ctrl K</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/70 px-4 pt-24 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.16 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-[#0b0d12] shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Quick navigation command palette"
            >
              <div className="flex items-center gap-3 border-b border-border bg-surface/60 px-4 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search actions..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  aria-label="Search navigation actions"
                />
                <button type="button" onClick={() => setOpen(false)} className="rounded-md border border-border p-1 text-slate-400 hover:text-white" aria-label="Close command palette">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[420px] overflow-auto p-2">
                {filteredCommands.length === 0 ? (
                  <p className="px-3 py-4 text-sm text-slate-400">No commands match your search.</p>
                ) : (
                  filteredCommands.map((command) => {
                    const Icon = command.icon
                    const isExternal = command.href.startsWith('http')

                    return (
                      <Link
                        key={command.label}
                        href={command.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-surface/75"
                      >
                        <div className="flex items-center gap-3">
                          <span className="rounded-md border border-border bg-surface p-2 text-slate-300">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm text-slate-200">{command.label}</span>
                        </div>

                        {isExternal && <ExternalLink className="h-4 w-4 text-slate-500" />}
                      </Link>
                    )
                  })
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
