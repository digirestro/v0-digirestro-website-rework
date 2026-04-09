import { NextResponse } from "next/server"
import { Resend } from "resend"

interface ContactFormData {
  name: string
  mobile: string
  email: string
  business: string
  city: string
}

const MAX_LEN = 500

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function sanitizeField(value: unknown): string {
  const t = String(value ?? "").trim()
  return t.length > MAX_LEN ? t.slice(0, MAX_LEN) : t
}

export async function POST(request: Request) {
  try {
    const raw = await request.json()
    const data: ContactFormData = {
      name: sanitizeField(raw.name),
      mobile: sanitizeField(raw.mobile),
      email: sanitizeField(raw.email),
      business: sanitizeField(raw.business),
      city: sanitizeField(raw.city),
    }

    if (!data.name || !data.mobile || !data.email || !data.business || !data.city) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — contact form cannot send email.")
      return NextResponse.json(
        {
          error:
            "Email is not configured on this server. Please set RESEND_API_KEY in the environment.",
        },
        { status: 503 },
      )
    }

    const to = process.env.CONTACT_EMAIL_TO ?? "sales@digirestro.ai"
    const from =
      process.env.RESEND_FROM ?? "Digirestro Website <onboarding@resend.dev>"

    const safe = {
      name: escapeHtml(data.name),
      mobile: escapeHtml(data.mobile),
      email: escapeHtml(data.email),
      business: escapeHtml(data.business),
      city: escapeHtml(data.city),
    }

    const subject = `Website contact: ${data.business} (${data.city})`

    const html = `
<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
  <h2 style="margin: 0 0 16px;">New contact form submission</h2>
  <p style="margin: 0 0 8px;"><strong>Name</strong><br/>${safe.name}</p>
  <p style="margin: 0 0 8px;"><strong>Mobile</strong><br/>${safe.mobile}</p>
  <p style="margin: 0 0 8px;"><strong>Email</strong><br/><a href="mailto:${safe.email}">${safe.email}</a></p>
  <p style="margin: 0 0 8px;"><strong>Business</strong><br/>${safe.business}</p>
  <p style="margin: 0 0 8px;"><strong>City</strong><br/>${safe.city}</p>
  <p style="margin: 16px 0 0; font-size: 12px; color: #666;">Submitted from the Digirestro website contact form.</p>
</body>
</html>
`.trim()

    const text = [
      "New contact form submission",
      "",
      `Name: ${data.name}`,
      `Mobile: ${data.mobile}`,
      `Email: ${data.email}`,
      `Business: ${data.business}`,
      `City: ${data.city}`,
      "",
      "Submitted from the Digirestro website contact form.",
    ].join("\n")

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      html,
      text,
      replyTo: data.email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Could not send email. Please try again later." },
        { status: 502 },
      )
    }

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 },
    )
  }
}
