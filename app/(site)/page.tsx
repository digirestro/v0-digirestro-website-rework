import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Testimonials />
      <ContactForm />
    </>
  )
}
