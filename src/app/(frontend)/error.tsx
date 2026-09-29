'use client'

import Link from 'next/link'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Error</p>
      <h1 className="text-4xl font-bold text-white">Something went wrong.</h1>
      <p className="mt-4 text-slate-300">The page could not be loaded. Please try again or return to the homepage.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={() => reset()} className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300">Try again</button>
        <Link href="/" className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-white hover:border-primary/60 hover:text-primary">Go home</Link>
      </div>
    </main>
  )
}
