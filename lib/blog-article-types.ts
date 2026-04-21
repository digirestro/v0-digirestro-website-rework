export type ProseSection = {
  heading: string
  paragraphs: string[]
  /** Optional hero illustration shown under the heading, before paragraphs */
  image?: { src: string; alt: string }
}

export type ListSection = { heading: string; items: string[] }

/** Full-width figure between sections (no heading) */
export type FigureSection = {
  figureOnly: true
  image: { src: string; alt: string }
}

export type ArticleSection = ProseSection | ListSection | FigureSection

export type BlogArticleData = {
  slug: string
  title: string
  metaDescription: string
  chips: { label: string; variant: "primary" | "muted" }[]
  /** Shown after author — no dates */
  tagsLine: string
  lead: string[]
  sections: ArticleSection[]
}

export function splitBullet(text: string): { lead: string; rest: string } | null {
  const i = text.indexOf(":")
  if (i <= 0) return null
  return { lead: text.slice(0, i + 1), rest: text.slice(i + 1).trim() }
}
