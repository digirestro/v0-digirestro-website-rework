import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Building2 } from "lucide-react"
import type { BlogArticleData } from "@/lib/blog-article-types"
import { splitBullet } from "@/lib/blog-article-types"

/** ~30% wider than max-w-3xl (48rem × 1.3 ≈ 62.4rem) */
const ARTICLE_MAX = "max-w-[62.4rem]"

function ArticleFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 62rem"
      />
    </figure>
  )
}

export function BlogArticleView({ article }: { article: BlogArticleData }) {
  return (
    <article className="relative border-b border-border bg-muted/15">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.78 0 0) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-primary/[0.12] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 -left-16 h-64 w-64 rounded-full bg-primary/[0.08] blur-3xl"
        aria-hidden
      />

      <div className={`relative mx-auto ${ARTICLE_MAX} px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8`}>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to journal
        </Link>

        <header className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative border-b border-border bg-gradient-to-br from-primary/[0.14] via-primary/[0.04] to-transparent px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-wrap items-center gap-3">
              {article.chips.map((c, i) => (
                <span
                  key={`${c.label}-${i}`}
                  className={
                    c.variant === "primary"
                      ? "inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-primary/20"
                      : "inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  }
                >
                  {c.variant === "primary" ? (
                    <BookOpen className="h-3.5 w-3.5" aria-hidden />
                  ) : (
                    <Building2 className="h-3.5 w-3.5 text-primary/80" aria-hidden />
                  )}
                  {c.label}
                </span>
              ))}
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Dr.DigiRestro</span>
              <span className="text-border">·</span>
              <span>{article.tagsLine}</span>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-12">
            {article.lead.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "text-lg leading-relaxed text-muted-foreground text-pretty" : "mt-6 text-lg leading-relaxed text-muted-foreground text-pretty"}
              >
                {p}
              </p>
            ))}

            {article.sections.map((block, si) => {
              const isFigure = "figureOnly" in block && block.figureOnly
              const sectionKey = isFigure ? `figure-${si}` : block.heading
              return (
                <section
                  key={sectionKey}
                  className={
                    si === 0
                      ? "mt-10 border-t border-border/80 pt-10"
                      : "mt-12 border-t border-border/80 pt-10"
                  }
                >
                  {isFigure ? (
                    <ArticleFigure src={block.image.src} alt={block.image.alt} />
                  ) : (
                    <>
                      <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {block.heading}
                      </h2>
                      {"image" in block && block.image ? (
                        <ArticleFigure src={block.image.src} alt={block.image.alt} />
                      ) : null}
                      {"paragraphs" in block &&
                        block.paragraphs.map((para, pi) => (
                          <p key={pi} className="mt-4 leading-relaxed text-muted-foreground">
                            {para}
                          </p>
                        ))}
                      {"items" in block && block.items && (
                        <ul className="mt-5 list-none space-y-4 pl-0">
                          {block.items.map((item, ii) => {
                            const parts = splitBullet(item)
                            return (
                              <li
                                key={ii}
                                className="relative border-l-2 border-primary/30 pl-5 leading-relaxed text-muted-foreground"
                              >
                                {parts ? (
                                  <>
                                    <span className="font-semibold text-foreground">{parts.lead}</span> {parts.rest}
                                  </>
                                ) : (
                                  item
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </>
                  )}
                </section>
              )
            })}
          </div>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
          <p>Explore more guides in the Digirestro journal.</p>
          <Link href="/blogs" className="font-semibold text-primary underline-offset-4 transition hover:underline">
            View all articles
          </Link>
        </div>
      </div>
    </article>
  )
}
