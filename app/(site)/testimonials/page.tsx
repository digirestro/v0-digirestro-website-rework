import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Testimonials | Digirestro",
  description: "What restaurant operators say about Digirestro POS and support.",
}

export default function TestimonialsPage() {
  return <Testimonials />
}
