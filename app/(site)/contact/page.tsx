import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Digirestro",
  description: "Get in touch with Digirestro for a demo or callback.",
}

export default function ContactPage() {
  return <ContactForm pageTopPadding />
}
