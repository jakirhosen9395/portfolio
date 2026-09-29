import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Let’s build reliable infrastructure.</h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-surface/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-white"><Mail className="h-4 w-4 text-primary" /> Email</div>
            <a href="mailto:hello@your-domain.com" className="text-slate-300 hover:text-primary">hello@your-domain.com</a>
          </div>
          <div className="rounded-2xl border border-border bg-surface/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-white"><MapPin className="h-4 w-4 text-primary" /> Location</div>
            <p className="text-slate-300">Bangladesh</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-white"><MessageSquare className="h-4 w-4 text-primary" /> Availability</div>
            <p className="text-slate-300">Available for DevOps / Cloud / Platform Engineering opportunities.</p>
          </div>
        </div>

        <form className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Name</span>
              <input required className="w-full rounded-lg border border-border bg-background px-3 py-3 text-white outline-none transition focus:border-primary" placeholder="Your name" />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Email</span>
              <input required type="email" className="w-full rounded-lg border border-border bg-background px-3 py-3 text-white outline-none transition focus:border-primary" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-5 block text-sm text-slate-300">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Subject</span>
            <input required className="w-full rounded-lg border border-border bg-background px-3 py-3 text-white outline-none transition focus:border-primary" placeholder="Project discussion or opportunity" />
          </label>

          <label className="mt-5 block text-sm text-slate-300">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Message</span>
            <textarea required rows={6} className="w-full resize-none rounded-lg border border-border bg-background px-3 py-3 text-white outline-none transition focus:border-primary" placeholder="Tell me a bit about your infrastructure or platform needs..." />
          </label>

          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </main>
  )
}
