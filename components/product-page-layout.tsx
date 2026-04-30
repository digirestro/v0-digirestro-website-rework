import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle2, LayoutDashboard, Sparkles, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const DEFAULT_ADMIN_BLOCKS: { title: string; description: string }[] = [
  {
    title: "Easy Management",
    description:
      "Manage one product catalogue and sync inventory so it is available for online and in-person selling.",
  },
  {
    title: "Staff Management",
    description: "Create staff login PINs and assign specific rights to secure access.",
  },
  {
    title: "Sales Analysis",
    description:
      "Check sales analysis on your mobile or tablet and adapt to trends with unified analytics.",
  },
]

const ADMIN_ICONS = [LayoutDashboard, Users, BarChart3, Sparkles] as const

/** Shared copy used on digirestro.ai product templates */
export const DIGIRESTRO_SUITE_MOBILE_CHECKLIST = [
  "Allows your captains to place orders directly at the table.",
  "Allows you to communicate swiftly in the kitchen through direct KOT prints.",
  "Upsell smartly by suggesting the right combination of dishes from the floor.",
  "Retain more customers by saving customer details with fast, portable billing.",
  "Make a bill within seconds and check your customer sales on the go.",
] as const

export type ProductPageLayoutProps = {
  eyebrow?: string
  title: string
  lead: string
  heroImage: { src: string; alt: string; priority?: boolean }
  introParagraphs: string[]
  /** DigiRestro-style bullet list; omit for article-only pages */
  mobileChecklist?: string[]
  showAdminControl?: boolean
  adminBlocks?: { title: string; description: string }[]
  /** Extra feature grid below intro (optional) */
  keyFeatureCards?: { title: string; description: string }[]
  /** Long-form sections (billing, KDS) */
  articleSections?: { heading: string; paragraphs: string[] }[]
  variant?: "suite" | "article" | "review"
  /** Optional second visual */
  secondaryImage?: { src: string; alt: string }
  /** Optional USP bullet list (billing page) */
  uspBullets?: string[]
}

export function ProductPageLayout({
  eyebrow = "DigiRestro Suite",
  title,
  lead,
  heroImage,
  introParagraphs,
  mobileChecklist,
  showAdminControl = true,
  adminBlocks,
  keyFeatureCards,
  articleSections,
  variant = "suite",
  secondaryImage,
  uspBullets,
}: ProductPageLayoutProps) {
  const rawBlocks = adminBlocks ?? DEFAULT_ADMIN_BLOCKS
  const blocks = rawBlocks.map((b, i) => ({
    ...b,
    icon: ADMIN_ICONS[i % ADMIN_ICONS.length],
  }))

  const isReview = variant === "review"
  const isArticle = variant === "article"

  return (
    <div className="bg-background">
      <section
        className={cn(
          "relative overflow-hidden border-b border-border px-3 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8",
          isReview
            ? "bg-gradient-to-b from-violet-950/15 via-background to-background"
            : "bg-gradient-to-b from-muted/60 via-muted/20 to-background",
        )}
      >
        <div
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
          aria-hidden
        />
        {isReview && (
          <div
            className="pointer-events-none absolute right-1/4 top-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
            aria-hidden
          />
        )}

        <div className="relative mx-auto max-w-4xl text-center">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
              isReview
                ? "border-violet-500/30 bg-violet-500/10 text-violet-200"
                : "border-border bg-background/80 text-muted-foreground backdrop-blur-sm",
            )}
          >
            {eyebrow}
          </span>
          <h1
            className={cn(
              "mt-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl",
              isReview && "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text",
            )}
          >
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">{lead}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Book free demo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/platform">View all products</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl px-1 sm:mt-14 sm:px-2">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border bg-card p-2 shadow-2xl ring-1 ring-black/5 dark:ring-white/10",
              isReview && "ring-violet-500/20",
            )}
          >
            <div className="overflow-hidden rounded-2xl bg-muted/40">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1200}
                height={675}
                priority={heroImage.priority}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
          <div className="space-y-6">
            {introParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-muted-foreground [&:first-line]:text-foreground"
              >
                {p}
              </p>
            ))}
          </div>

          {secondaryImage && (
            <div className="overflow-hidden rounded-2xl border bg-muted/30 p-2 shadow-lg">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                width={1100}
                height={620}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          )}

          {keyFeatureCards && keyFeatureCards.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {keyFeatureCards.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card/50 p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          )}

          {isArticle && articleSections && (
            <div className="space-y-10">
              {articleSections.map((sec) => (
                <div
                  key={sec.heading}
                  className="rounded-2xl border border-l-4 border-l-primary bg-card/40 p-6 sm:p-8 shadow-sm"
                >
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                    {sec.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {sec.paragraphs.map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {uspBullets && uspBullets.length > 0 && (
            <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-transparent p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">Some of our USPs</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {uspBullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isArticle && mobileChecklist && mobileChecklist.length > 0 && (
            <div className="rounded-2xl border bg-muted/30 p-6 sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Sparkles className="size-5" aria-hidden />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold sm:text-2xl">
                    Mobile / Android application
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Built for speed on the floor and in the kitchen.
                  </p>
                </div>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {mobileChecklist.map((line) => (
                  <li key={line} className="flex gap-3 rounded-xl bg-background/60 p-4 text-sm leading-relaxed shadow-sm">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showAdminControl && !isArticle && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Smartly linked to admin control
                </h2>
                <p className="mt-2 text-muted-foreground">
                  One backbone for catalogue, people, and numbers—wherever guests order.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {blocks.map((b) => (
                  <div
                    key={b.title}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                      <b.icon className="size-6" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        className={cn(
          "border-t px-3 py-10 sm:px-6 sm:py-16 lg:px-8",
          isReview ? "bg-violet-950/10" : "bg-muted/40",
        )}
      >
        <div className="mx-auto max-w-3xl rounded-3xl border bg-card p-6 text-center shadow-lg sm:p-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
            Ready to grow with {isReview ? "Review Lens" : "DigiRestro"}?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Share your outlet details and we will walk you through setup, integrations, and go-live.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-10">
            <Link href="/contact">
              Get a callback
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
