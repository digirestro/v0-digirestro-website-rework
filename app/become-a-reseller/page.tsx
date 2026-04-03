import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Clients } from "@/components/clients"
import { BecomeResellerContent } from "@/components/become-reseller-content"

export const metadata: Metadata = {
  title: "Become a Reseller | DigiRestro",
  description:
    "Partner with DigiRestro: grow your business with our restaurant POS and tools. Competitive margins, marketing support, and we handle onboarding and tech support.",
}

export default function BecomeResellerPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BecomeResellerContent />
      <Clients />
      <ContactForm
        showLeadVisual={false}
        heading="Are you ready to grow your business with us?"
        subheading="Fill in your details and our team will reach out within 24 hours."
      />
      <Footer />
    </main>
  )
}
