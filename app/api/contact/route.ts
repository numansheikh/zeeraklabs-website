import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, interest, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Graceful fallback during development: log and return success
    console.log('[contact form submission]', { name, email, interest, message })
    return NextResponse.json({ ok: true })
  }

  const { Resend } = await import('resend')
  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Zeerak Labs <noreply@zeeraklabs.com>',
    to: 'hello@zeeraklabs.com',
    replyTo: email,
    subject: `New inquiry from ${name}${interest ? ` — ${interest}` : ''}`,
    text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest || 'N/A'}\n\n${message}`,
  })

  if (error) {
    console.error('[resend error]', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
