import type { Metadata } from "next"
import { BlogsContent } from "@/components/blogs-content"

export const metadata: Metadata = {
  title: "Blogs | Digirestro",
  description:
    "Articles from Digirestro on restaurant POS, rider apps, KDS, QR ordering, cloud EPOS, ERP, and operations—hosted on digirestro.ai.",
}

export default function BlogsPage() {
  return <BlogsContent />
}
