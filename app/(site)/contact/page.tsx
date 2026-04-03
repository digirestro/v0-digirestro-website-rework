import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | DigiRestro",
  description: "Get in touch with DigiRestro for a demo or callback.",
}

export default function ContactPage() {
  return <ContactForm pageTopPadding />
}
