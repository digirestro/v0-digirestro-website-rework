"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Manish Patel",
    business: "Leo's Cafe",
    quote:
      "I would definitely recommend it as it is very easy. The staff is very calm, and the features are understandable. The support team easily handles and solves minor issues. The discount and customer details features are good.",
  },
  {
    name: "Aman Singh",
    business: "Renaissance Grand Restaurant",
    quote:
      "Because DigiRestro offers you maximum features at an affordable price, I highly recommend DigiRestro as a one-stop solution for any restaurant.",
  },
  {
    name: "Mr. Neeraj",
    business: "Laapaso",
    quote:
      "It is very user-friendly, and there is no delay in support. I'll be using the loyalty program soon. Also, the order taking and billing process is effortless.",
  },
]

function Stars() {
  return (
    <div className="flex justify-center gap-0.5 sm:justify-start" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            The Stunning Results Our Customers Have Experienced
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real feedback from operators who switched to DigiRestro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" aria-hidden />
              <Stars />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.business}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
