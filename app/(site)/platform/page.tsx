import type { Metadata } from "next"
import { PlatformContent } from "@/components/platform-content"

export const metadata: Metadata = {
  title: "Platform | Digirestro",
  description:
    "Digirestro platform: POS, DigiPay, SCM, owner app, QR ordering, captain & rider, KDS, online ordering, ONDC, and AI insights—integrated restaurant operations.",
}

export default function PlatformPage() {
  return <PlatformContent />
}
