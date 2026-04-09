import type { Metadata } from "next"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Solutions | Digirestro",
  description:
    "Restaurant POS tailored for hotels, cafes, cloud kitchens, QSR, bakeries, bars, and chains.",
}

export default function SolutionsPage() {
  return (
    <>
      <Solutions />
      <Testimonials />
    </>
  )
}
