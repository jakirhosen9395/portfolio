import { Mail, MapPin, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { getPortfolioContent } from '@/sanity/lib/content'

export default async function ContactPage() {
  const { siteSettings } = await getPortfolioContent()

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
            <a href={`mailto:${siteSettings.email}`} className="text-slate-300 hover:text-primary">{siteSettings.email}</a>
          </div>
          <div className="rounded-2xl border border-border bg-surface/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-white"><MapPin className="h-4 w-4 text-primary" /> Location</div>
            <p className="text-slate-300">{siteSettings.location}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-white"><MessageSquare className="h-4 w-4 text-primary" /> Availability</div>
            <p className="text-slate-300">{siteSettings.availabilityStatus}</p>
          </div>
        </div>

        <ContactForm className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8" />
      </div>
    </main>
  )
}
