import Link from "next/link"
import { HeroIllustration } from "@/components/hero-illustration"

/** Light shell, red CTA, split headline */
const red = "#d92a2a"
const headingGray = "#3a3a3a"
const subGray = "#5c5c5c"

export function Hero() {
  return (
    <section className="relative border-b border-neutral-200/80 bg-[#f7f8f9] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <h1
              className="text-balance font-semibold leading-[1.15] tracking-tight"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: headingGray,
              }}
            >
              Restaurants Run Better With{" "}
              <span className="font-bold" style={{ color: red }}>
                Digirestro
              </span>
            </h1>
            <p
              className="mt-5 max-w-md text-pretty text-base leading-relaxed sm:text-lg"
              style={{ color: subGray }}
            >
              One powerful system connecting POS, online ordering, inventory, and operations.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95 active:scale-[0.99]"
                style={{ backgroundColor: red }}
              >
                Book a Demo Today
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <div
              className="relative aspect-[560/320] w-full rounded-2xl border border-border bg-card p-4 shadow-sm ring-1 ring-border/60"
              role="img"
              aria-label="Stylised illustration of a POS screen, order list, and payment action"
            >
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
