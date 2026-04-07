import type { Metadata } from "next"
import { PlatformContent } from "@/components/platform-content"

export const metadata: Metadata = {
  title: "Platform | Digirestro",
  description:
    "Digirestro platform: POS, DigiPay, supply chain, owner app, QR ordering, KDS, online ordering, and ONDC—integrated restaurant operations.",
}

export default function PlatformPage() {
  return <PlatformContent />
}
