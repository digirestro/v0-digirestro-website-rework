import type { Metadata } from "next"
import { PlatformContent } from "@/components/platform-content"

export const metadata: Metadata = {
  title: "Platform | Digirestro",
  description:
    "Digirestro product suite: Owner App, QR ordering, rider and captain apps, billing POS, KDS, SCM, online ordering, ONDC, AI Learning Academy, and AI feedback.",
}

export default function PlatformPage() {
  return <PlatformContent />
}
