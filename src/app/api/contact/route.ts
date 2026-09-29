import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const recentRequests = new Map<string, number>()
const requestWindow = 60_000
export const runtime = 'nodejs'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function redactProviderMessage(value: unknown) {
  if (typeof value !== 'string') return undefined
  return value.replace(/re_[A-Za-z0-9_-]+/g, '[redacted]').slice(0, 300)
}

function classifyResendError(error: { name?: unknown; message?: unknown; statusCode?: unknown }) {
  const message = typeof error.message === 'string' ? error.message.toLowerCase() : ''
  const statusCode = typeof error.statusCode === 'number' ? error.statusCode : undefined

  if (statusCode === 401 || statusCode === 403 || message.includes('api key') || message.includes('unauthorized')) return 'resend_authentication_failure'
  if (message.includes('sender') || message.includes('from') || message.includes('domain') || message.includes('verified')) return 'sender_configuration_failure'
  if (statusCode === 400) return 'resend_validation_failure'
  if (statusCode === 429) return 'resend_rate_limit'
  return 'resend_api_error'
}

export async function POST(request: Request) {
  console.info('[contact] request received')
  const forwardedFor = request.headers.get('x-forwarded-for')
  const requester = forwardedFor?.split(',')[0]?.trim() ?? 'unknown'
  const now = Date.now()
  const lastRequest = recentRequests.get(requester)

  if (lastRequest && now - lastRequest < requestWindow) {
    console.warn('[contact] request throttled', { requester })
    return NextResponse.json({ success: false, error: 'rate_limit' }, { status: 429 })
  }

  try {
    const body = await request.json() as { name?: unknown; email?: unknown; subject?: unknown; message?: unknown; website?: unknown }
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const subject = typeof body.subject === 'string' ? body.subject.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const website = typeof body.website === 'string' ? body.website.trim() : ''

    if (website) {
      console.info('[contact] honeypot submission ignored')
      return NextResponse.json({ success: true })
    }
    if (!name || name.length > 100 || !isValidEmail(email) || email.length > 254 || !subject || subject.length > 160 || !message || message.length > 5000) {
      console.warn('[contact] invalid request payload')
      return NextResponse.json({ success: false, error: 'validation' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const destination = process.env.CONTACT_EMAIL
    const sender = process.env.CONTACT_FROM_EMAIL
    console.info('[contact] Resend configuration', {
      RESEND_API_KEY: Boolean(apiKey),
      CONTACT_EMAIL: Boolean(destination),
      CONTACT_FROM_EMAIL: Boolean(sender),
    })
    const missingConfiguration = [
      !apiKey && 'RESEND_API_KEY',
      !destination && 'CONTACT_EMAIL',
      !sender && 'CONTACT_FROM_EMAIL',
    ].filter((value): value is string => Boolean(value))
    if (missingConfiguration.length > 0) {
      console.error('[contact] delivery configuration missing', { missingConfiguration })
      return NextResponse.json({ success: false, error: 'email_delivery' }, { status: 503 })
    }

    if (!apiKey || !destination || !sender) {
      return NextResponse.json({ success: false, error: 'email_delivery' }, { status: 503 })
    }

    console.info('[contact] validation passed; attempting Resend request')
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [destination],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      console.error('[contact] Resend request failed', {
        category: classifyResendError(error),
        errorType: typeof error.name === 'string' ? error.name : undefined,
        statusCode: typeof error.statusCode === 'number' ? error.statusCode : undefined,
        providerMessage: redactProviderMessage(error.message),
      })
      return NextResponse.json({ success: false, error: 'email_delivery' }, { status: 502 })
    }

    if (!data?.id) {
      console.error('[contact] Resend returned no accepted message ID')
      return NextResponse.json({ success: false, error: 'email_delivery' }, { status: 502 })
    }

    recentRequests.set(requester, now)
    console.info('[contact] Resend request accepted', { messageId: data?.id })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] unexpected request failure', {
      errorType: error instanceof Error ? error.name : 'unknown',
      providerMessage: redactProviderMessage(error instanceof Error ? error.message : undefined),
    })
    return NextResponse.json({ success: false, error: 'request' }, { status: 400 })
  }
}