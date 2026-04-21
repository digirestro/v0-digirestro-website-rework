import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { blogPosts, isInternalBlogHref } from "@/data/blog-posts"

function padIndex(n: number) {
  return String(n).padStart(2, "0")
}

function PostCard({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  if (isInternalBlogHref(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export function BlogsContent() {
  const [featured, ...rest] = blogPosts

  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/20 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.75 0 0) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-[93.6rem]">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            The Digirestro journal
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Guides on POS, kitchen tech, delivery, and calmer operations—all articles below open{" "}
            <span className="font-medium text-foreground">on this site</span>.
          </p>
        </div>

        {featured ? (
          <PostCard
            href={featured.href}
            className="group relative mt-14 flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition hover:border-primary/35 hover:shadow-xl md:grid md:min-h-[280px] md:grid-cols-12 md:gap-0"
          >
            <div className="relative flex flex-col justify-between bg-gradient-to-br from-primary/15 via-primary/5 to-transparent px-8 py-10 md:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-background/80 px-2.5 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden />
                  {featured.category}
                </span>
                <p className="mt-6 font-[family-name:var(--font-display)] text-6xl font-bold leading-none text-primary/90 sm:text-7xl">
                  {padIndex(1)}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Featured story</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center border-t border-border/80 px-8 py-8 md:col-span-7 md:border-l md:border-t-0 md:py-10 md:pl-10 md:pr-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground text-balance transition group-hover:text-primary sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <>
                  Read article
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </>
              </span>
            </div>
          </PostCard>
        ) : null}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => {
            const n = i + 2
            return (
              <PostCard
                key={post.href}
                href={post.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {post.category}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold tabular-nums text-primary/35 transition group-hover:text-primary/55">
                    {padIndex(n)}
                  </span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-foreground text-balance group-hover:text-primary sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </PostCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
