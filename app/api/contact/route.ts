import { NextResponse } from "next/server"
import { Resend } from "resend"

interface ContactFormData {
  name: string
  mobile: string
  email: string
  business: string
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
    }

    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY?.trim()
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

    const toRaw = process.env.CONTACT_EMAIL_TO ?? "sales@digirestro.ai"
    const to = toRaw
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean)
    if (to.length === 0) {
      return NextResponse.json({ error: "CONTACT_EMAIL_TO is invalid" }, { status: 500 })
    }

    const from =
      process.env.RESEND_FROM?.trim() ??
      "Digirestro Website <onboarding@resend.dev>"

    const displayOptional = (v: string) => (v ? escapeHtml(v) : "—")

    const safe = {
      name: escapeHtml(data.name),
      mobile: displayOptional(data.mobile),
      email: escapeHtml(data.email),
      business: displayOptional(data.business),
    }

    const subject =
      data.business.length > 0
        ? `Website contact: ${data.name} — ${data.business}`
        : `Website contact: ${data.name}`

    const html = `
<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
  <h2 style="margin: 0 0 16px;">New contact form submission</h2>
  <p style="margin: 0 0 8px;"><strong>Name</strong><br/>${safe.name}</p>
  <p style="margin: 0 0 8px;"><strong>Mobile</strong><br/>${safe.mobile}</p>
  <p style="margin: 0 0 8px;"><strong>Email</strong><br/><a href="mailto:${safe.email}">${safe.email}</a></p>
  <p style="margin: 0 0 8px;"><strong>Business</strong><br/>${safe.business}</p>
  <p style="margin: 16px 0 0; font-size: 12px; color: #666;">Submitted from the Digirestro website contact form.</p>
</body>
</html>
`.trim()

    const text = [
      "New contact form submission",
      "",
      `Name: ${data.name}`,
      `Mobile: ${data.mobile || "—"}`,
      `Email: ${data.email}`,
      `Business: ${data.business || "—"}`,
      "",
      "Submitted from the Digirestro website contact form.",
    ].join("\n")

    const resend = new Resend(apiKey)
    const { data: sendData, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo: data.email,
    })

    if (error) {
      const errMsg =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message: unknown }).message)
          : String(error)
      console.error("Resend error:", errMsg, error)

      const lower = errMsg.toLowerCase()
      const sandboxBlock =
        lower.includes("only send testing") ||
        lower.includes("verify a domain") ||
        lower.includes("testing emails to your own")

      const hint = sandboxBlock
        ? "Resend’s test sender (onboarding@resend.dev) can only deliver to your Resend signup email. To receive mail at sales@digirestro.ai: verify digirestro.ai in the Resend dashboard (Domains), then set RESEND_FROM to an address on that domain, e.g. Digirestro <noreply@digirestro.ai>."
        : undefined

      return NextResponse.json(
        {
          error: "Could not send email. Please try again later.",
          ...(hint && { hint }),
          ...(process.env.NODE_ENV === "development" && { debug: errMsg }),
        },
        { status: 502 },
      )
    }

    if (sendData?.id) {
      console.info("Resend email queued:", sendData.id, "to:", to.join(", "))
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
