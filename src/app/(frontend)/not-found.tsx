import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">404</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Page not found.</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-300">The resource you’re looking for may have moved, been removed, or never existed.</p>
      <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
        <ArrowLeft className="h-4 w-4" /> Return home
      </Link>
    </main>
  )
}
