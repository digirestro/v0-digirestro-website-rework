"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Manish Patel",
    business: "LEO'S CAFE",
    image: "/images/testimonial-manish-patel.png",
    quote:
      "I would definitely recommend it as it is very easy. The staff is very calm, and the features are understandable. The support team easily handles and solves minor issues. The discount and customer details features are good.",
  },
  {
    name: "Aman Singh",
    business: "Renaissance Grand Restaurant",
    image: "/images/testimonial-aman-singh.png",
    quote:
      "Because Digirestro offers you maximum features at an affordable price, I highly recommend Digirestro as a one stop solution for any restaurant.",
  },
  {
    name: "Mr. Neeraj",
    business: "LAAPASO",
    image: "/images/testimonial-mr-neeraj.png",
    quote:
      "It is very user friendly, and there is no delay in support. I'll be using the loyalty program soon. Also, the order taking and billing process is effortless.",
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
    <section id="testimonials" className="scroll-mt-24 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What operators say about Digirestro
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real feedback from teams using Digirestro day to day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative flex min-h-[22rem] flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md sm:min-h-[24rem] sm:p-10 lg:p-11"
            >
              <Quote className="absolute right-7 top-7 h-11 w-11 text-primary/15 sm:right-9 sm:top-9" aria-hidden />
              <Stars />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground sm:text-lg sm:leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-5 border-t border-border pt-8">
                <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted shadow-sm ring-2 ring-background sm:h-24 sm:w-24">
                  <Image
                    src={t.image}
                    alt={`${t.name}, ${t.business}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-foreground">{t.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t.business}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
