import type { Metadata } from "next"
import { Features } from "@/components/features"

export const metadata: Metadata = {
  title: "Features | Digirestro",
  description:
    "Digirestro POS: billing, integrations with Zomato and Swiggy, inventory, reporting, and 24/7 support for your restaurant.",
}

export default function FeaturesPage() {
  return <Features />
}
