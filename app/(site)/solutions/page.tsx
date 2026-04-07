import type { Metadata } from "next"
import { Solutions } from "@/components/solutions"

export const metadata: Metadata = {
  title: "Solutions | Digirestro",
  description:
    "Restaurant POS tailored for hotels, cafes, cloud kitchens, QSR, bakeries, bars, and chains.",
}

export default function SolutionsPage() {
  return <Solutions />
}
