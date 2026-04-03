import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

function HeroVisual({
  src,
  alt,
  width,
  height,
  priority,
}: {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}) {
  return (
    <figure className="mx-auto w-full max-w-5xl">
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-xl ring-1 ring-black/5 dark:ring-white/10">
        <div className="relative aspect-[1024/576] w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-full w-full object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={priority}
          />
        </div>
      </div>
    </figure>
  )
}

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

        <div className="mt-16 space-y-10 sm:space-y-12">
          <HeroVisual
            src="/images/hero-smart-automation-ai.png"
            alt="Smart automation: simplify POS orders with DigiRestro AI chatbot"
            width={1024}
            height={576}
            priority
          />
          <HeroVisual
            src="/images/hero-ecosystem.png"
            alt="DigiRestro restaurant technology ecosystem: QR ordering, online orders, POS, KDS, apps, and payments"
            width={1024}
            height={576}
          />
        </div>
      </div>
    </section>
  )
}
