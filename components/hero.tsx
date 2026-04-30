import Image from "next/image"
import Link from "next/link"

/** Light shell, red CTA, split headline */
const red = "#d92a2a"
const headingGray = "#3a3a3a"
const subGray = "#5c5c5c"

export function Hero() {
  return (
    <section className="relative border-b border-neutral-200/80 bg-[#f7f8f9] pt-20 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">
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
              One powerful system connecting POS, online ordering, payments, inventory, and operations.
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
              className="relative w-full"
              role="img"
              aria-label="Illustration of restaurant staff and guest using Digirestro POS, tablet ordering, and mobile payment"
            >
              <div className="relative w-full">
                <Image
                  src="/images/hero-illustration.png"
                  alt=""
                  className="h-auto max-h-104 w-full max-w-full object-contain object-center sm:max-h-112 md:max-h-120"
                  priority
                  sizes="(max-width: 768px) 90vw, 520px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
