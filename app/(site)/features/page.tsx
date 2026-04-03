import type { Metadata } from "next"
import { Features } from "@/components/features"

export const metadata: Metadata = {
  title: "Features | DigiRestro",
  description:
    "AI-enabled POS, billing, integrations with Zomato and Swiggy, inventory, and 24/7 support for your restaurant.",
}

export default function FeaturesPage() {
  return <Features />
}
