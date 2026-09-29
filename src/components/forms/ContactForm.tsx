'use client'

import { Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactForm({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')
    const form = new FormData(event.currentTarget)
    let response: Response
    try {
      response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      })
    } catch {
      setError('The message could not be sent. Please try again later.')
      setStatus('error')
      return
    }

    if (!response.ok) {
      const result = await response.json().catch(() => ({ error: 'The message could not be sent.' }))
      setError(result.error ?? 'The message could not be sent.')
      setStatus('error')
      return
    }

    event.currentTarget.reset()
    setStatus('success')
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${className}`}>
      <div aria-hidden="true" className="hidden"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="flex flex-col gap-1.5 text-sm font-mono text-text-main" htmlFor="contact-name">Name
        <input id="contact-name" name="name" required maxLength={100} className="bg-background border border-border rounded px-4 py-3 font-sans text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-mono text-text-main" htmlFor="contact-email">Email
        <input id="contact-email" name="email" required type="email" maxLength={254} className="bg-background border border-border rounded px-4 py-3 font-sans text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="Your email address" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-mono text-text-main" htmlFor="contact-subject">Subject
        <input id="contact-subject" name="subject" required maxLength={160} className="bg-background border border-border rounded px-4 py-3 font-sans text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="What is this regarding?" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-mono text-text-main" htmlFor="contact-message">Message
        <textarea id="contact-message" name="message" required maxLength={5000} rows={5} className="resize-none bg-background border border-border rounded px-4 py-3 font-sans text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="Tell me a bit about your infrastructure or platform needs..." />
      </label>
      <button type="submit" disabled={status === 'sending'} className="bg-primary hover:bg-primary-dark disabled:cursor-wait disabled:opacity-60 text-background font-bold py-3 px-6 rounded transition-colors mt-2">
        <span className="inline-flex items-center gap-2"><Send className="h-4 w-4" /> {status === 'sending' ? 'Sending...' : 'Send Message'}</span>
      </button>
      <p role="status" aria-live="polite" className="text-sm text-slate-300">{status === 'success' ? 'Message sent successfully.' : status === 'error' ? error : ''}</p>
    </form>
  )
}