import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const recentRequests = new Map<string, number>()
const requestWindow = 60_000

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const requester = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'
  const now = Date.now()
  const lastRequest = recentRequests.get(requester)

  if (lastRequest && now - lastRequest < requestWindow) {
    return NextResponse.json({ error: 'Please wait before sending another message.' }, { status: 429 })
  }

  try {
    const body = await request.json() as { name?: unknown; email?: unknown; subject?: unknown; message?: unknown; website?: unknown }
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const subject = typeof body.subject === 'string' ? body.subject.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const website = typeof body.website === 'string' ? body.website.trim() : ''

    if (website) return NextResponse.json({ success: true })
    if (!name || name.length > 100 || !isValidEmail(email) || email.length > 254 || !subject || subject.length > 160 || !message || message.length > 5000) {
      return NextResponse.json({ error: 'Please provide a valid name, email, subject, and message.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const destination = process.env.CONTACT_EMAIL
    const sender = process.env.CONTACT_FROM_EMAIL
    if (!apiKey || !destination || !sender) {
      return NextResponse.json({ error: 'Contact delivery is not configured.' }, { status: 503 })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: sender,
      to: destination,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) return NextResponse.json({ error: 'The message could not be delivered.' }, { status: 502 })
    recentRequests.set(requester, now)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'The message could not be processed.' }, { status: 400 })
  }
}