import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Testimonials | DigiRestro",
  description: "What restaurant operators say about DigiRestro POS and support.",
}

export default function TestimonialsPage() {
  return <Testimonials />
}
