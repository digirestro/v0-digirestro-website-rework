import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const benefits = [
  "Access to our full range of products.",
  "Competitive pricing and attractive profit margins.",
  "Marketing and promotional materials to help you promote our products.",
  "Dedicated support from our team of experts to help you every step of the way.",
  "Regular updates on new products, promotions, and sales opportunities.",
]

export function BecomeResellerContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/[0.07] via-background to-background px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Let us help you to grow your business with DigiRestro&apos;s unique product offerings.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Become a DigiRestro Reseller Partner Now!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="w-full min-w-[200px] shadow-lg shadow-primary/20 sm:w-auto" asChild>
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full min-w-[200px] bg-background/80 backdrop-blur-sm sm:w-auto" asChild>
              <Link href="#contact">Request A Callback</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
            Who can become a DigiRestro Reseller?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            ANYBODY who has connections in the F&amp;B industry and is passionate about sales can become a DigiRestro reseller. It&apos;s perfectly fine if you are non technical and haven&apos;t sold any technology product before. We even have a restaurant&apos;s chefs and manager who trusts our products and works as a partner for us part time.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
            How can I become a DigiRestro Reseller?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              If you are already on this page, you have already completed half a milestone. It&apos;s pretty simple, just fill up the Reseller form below and expect a callback from our team within 24 hours.
            </p>
            <p>
              Our team will then explain to you DigiRestro products offerings and provide the detailed product demo.
            </p>
            <p>
              Once the product demo is done and you are confident, our team will provide you with all the marketing materials &amp; videos which will help you to close the deals.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
            Who will manage the product onboarding and support?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            It&apos;s us!!!
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We want our reseller partner to focus completely on building relationships with the merchants and do sales. Rest everything, right from catalogs onboarding to tech support, we will ensure to get it done.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-br from-primary/[0.06] via-muted/20 to-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
            Benefits of DigiRestro Reseller Program
          </h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((line) => (
              <li key={line} className="flex gap-3 text-muted-foreground">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-base leading-relaxed sm:text-lg">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
