"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Manish Patel",
    business: "Leo's Cafe",
    quote: "I would definitely recommend it as it is very easy. The staff is very calm, and the features are understandable. The support team easily handles and solves minor issues. The discount and customer details features are good."
  },
  {
    name: "Aman Singh",
    business: "Renaissance Grand Restaurant",
    quote: "Because DigiRestro offers you maximum features at an affordable price, I highly recommend DigiRestro as a one-stop solution for any restaurant."
  },
  {
    name: "Mr. Neeraj",
    business: "Laapaso",
    quote: "It is very user-friendly, and there is no delay in support. I'll be using the loyalty program soon. Also, the order taking and billing process is effortless."
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            The Stunning Results Our Customers Have Experienced
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 sm:p-12 border border-border">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
            
            <div className="text-center relative z-10">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground text-lg">
                  {testimonials[current].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[current].business}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === current ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
