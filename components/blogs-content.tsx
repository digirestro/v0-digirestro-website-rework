import { ExternalLink } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

export function BlogsContent() {
  return (
    <section className="border-b border-border bg-muted/20 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Blogs
        </h1>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          Guides and ideas from Digirestro on POS, delivery, kitchen tech, and running a smoother restaurant. Each link
          opens the full article on{" "}
          <span className="font-medium text-foreground">digirestro.ai</span> in a new tab.
        </p>
      </div>

      <ul className="mx-auto mt-14 max-w-3xl space-y-4">
        {blogPosts.map((post) => (
          <li key={post.href}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md sm:p-6"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground text-balance group-hover:text-primary sm:text-xl">
                  {post.title}
                </span>
                <ExternalLink
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-primary"
                  aria-hidden
                />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{post.description}</p>
              <span className="text-xs font-medium text-primary">Read on digirestro.ai →</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
