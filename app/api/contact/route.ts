import { NextResponse } from "next/server"

interface ContactFormData {
  name: string
  mobile: string
  email: string
  business: string
  city: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.mobile || !data.email || !data.business || !data.city) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the submission (in production, you'd send this to a database or email service)
    console.log("Contact form submission:", {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      business: data.business,
      city: data.city,
      timestamp: new Date().toISOString(),
    })

    // Here you could:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Forward to a CRM
    // 4. Send to a webhook

    return NextResponse.json(
      { message: "Form submitted successfully", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    )
  }
}
