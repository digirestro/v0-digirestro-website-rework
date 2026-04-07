import Link from "next/link"

const benefits = [
  "Access to our full range of products.",
  "Competitive pricing and attractive profit margins.",
  "Marketing and promotional materials to help you promote our products.",
  "Dedicated support from our team of experts to help you every step of the way.",
  "Regular updates on new products, promotions, and sales opportunities.",
]

const btnPrimary =
  "inline-flex min-w-[200px] items-center justify-center rounded-lg bg-primary px-8 py-3 text-center text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:min-w-[220px]"
const btnOutline =
  "inline-flex min-w-[200px] items-center justify-center rounded-lg border-2 border-primary bg-transparent px-8 py-3 text-center text-base font-semibold text-primary transition-colors hover:bg-muted sm:min-w-[220px]"

export function BecomeResellerContent() {
  return (
    <>
      <section className="border-b border-border bg-card px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-[1080px] text-center">
          <h1 className="text-balance text-2xl font-bold leading-snug text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.25]">
            Grow with Digirestro&apos;s product line and partner support.
          </h1>
          <p className="mt-6 text-lg font-semibold text-muted-foreground sm:text-xl">
            Become a Digirestro reseller partner
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href="#contact" className={btnPrimary}>
              Get Started
            </Link>
            <Link href="#contact" className={btnOutline}>
              Request a callback
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-2xl font-bold text-foreground sm:text-[28px] sm:leading-snug">
            Who can become a Digirestro reseller?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Anyone with connections in the F&amp;B industry and a passion for sales can become a Digirestro reseller.
            You don&apos;t need a technical background or prior experience selling software—we support you with demos
            and materials. Some of our partners are chefs and managers who already trust the product.
          </p>
        </div>
      </section>

      <section className="bg-card px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-2xl font-bold text-foreground sm:text-[28px] sm:leading-snug">
            How do I become a reseller?
          </h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              If you&apos;re on this page, you&apos;re already halfway there. Fill in the form below and expect a call
              from our team within 24 hours.
            </p>
            <p>
              We&apos;ll walk you through Digirestro&apos;s offerings and a full product demo.
            </p>
            <p>
              When you&apos;re ready, we share marketing assets and videos to help you close deals with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-2xl font-bold text-foreground sm:text-[28px] sm:leading-snug">
            Who handles onboarding and support?
          </h2>
          <p className="mt-5 text-lg font-semibold text-foreground sm:text-xl">We do.</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            You focus on relationships and sales—we take care of catalog onboarding, setup, and ongoing technical
            support for your merchants.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-2xl font-bold text-foreground sm:text-[28px] sm:leading-snug">
            Reseller program benefits
          </h2>
          <ul className="mt-8 list-none space-y-4 pl-0">
            {benefits.map((line) => (
              <li
                key={line}
                className="relative pl-8 text-base leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary sm:text-lg"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
