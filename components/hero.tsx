import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] translate-x-1/4 opacity-70 sm:h-[520px] sm:w-[520px]"
        aria-hidden
      >
        <Image
          src="/images/hero-gradient.webp"
          alt=""
          width={520}
          height={520}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-[380px] w-[380px] -translate-x-1/3 opacity-60 sm:h-[480px] sm:w-[480px]"
        aria-hidden
      >
        <Image
          src="/images/hero-gradient-2.webp"
          alt=""
          width={480}
          height={480}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/15 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Try our QR Code Menu ordering for free!</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            The Complete POS Platform for Your Restaurant
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Streamline your operations, boost profits, and deliver exceptional customer experiences with DigiRestro&apos;s AI-powered business tools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">
                Get a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-background/80 backdrop-blur-sm" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="relative aspect-[1536/974] w-full bg-muted">
              <Image
                src="/images/pos-dashboard.png"
                alt="DigiRestro POS software running on desktop for restaurant billing and operations"
                width={1536}
                height={974}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Product imagery: DigiRestro
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <article className="group rounded-2xl overflow-hidden border border-border bg-card shadow-lg transition-all hover:border-primary/25 hover:shadow-xl">
            <div className="relative aspect-[1024/607] bg-muted">
              <Image
                src="/images/showcase-table-ordering.png"
                alt="DigiRestro table ordering and QR menu experience"
                width={1024}
                height={607}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                Table ordering &amp; QR menus
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Let guests order from their phones while your floor stays calm and your kitchen stays in sync.
              </p>
            </div>
          </article>
          <article className="group rounded-2xl overflow-hidden border border-border bg-card shadow-lg transition-all hover:border-primary/25 hover:shadow-xl">
            <div className="relative aspect-[1024/543] bg-muted">
              <Image
                src="/images/showcase-kds.png"
                alt="DigiRestro kitchen display system"
                width={1024}
                height={543}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                Kitchen Display System
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Clear tickets, faster prep times, and fewer mistakes from front of house to the pass.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
