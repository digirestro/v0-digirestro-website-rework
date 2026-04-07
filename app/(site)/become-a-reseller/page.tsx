import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Clients } from "@/components/clients"
import { BecomeResellerContent } from "@/components/become-reseller-content"

export const metadata: Metadata = {
  title: "Become a Reseller | Digirestro",
  description:
    "Partner with Digirestro: grow your business with our restaurant POS. Competitive margins, marketing support, and we handle onboarding and tech support.",
}

export default function BecomeResellerPage() {
  return (
    <>
      <BecomeResellerContent />
      <div className="border-t border-border bg-muted/20">
        <Clients />
      </div>
      <ContactForm
        pageTopPadding
        heading="Ready to partner with us?"
        subheading="Share your details and our team will reach out within 24 hours."
      />
    </>
  )
}
