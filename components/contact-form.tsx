"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Clock, Loader2, CheckCircle } from "lucide-react"

type ContactFormProps = {
  showLeadVisual?: boolean
  heading?: string
  subheading?: string
  /** Extra top padding for standalone /contact page and subpages (not home). */
  pageTopPadding?: boolean
}

export function ContactForm({
  showLeadVisual = true,
  heading = "Are You Ready To Grow Your Business With Us?",
  subheading = "Get in touch and we'll help you find the perfect solution for your restaurant.",
  pageTopPadding = false,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      business: formData.get("business"),
      city: formData.get("city"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSuccess(true)
      e.currentTarget.reset()
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className={`px-4 sm:px-6 lg:px-8 relative overflow-hidden pb-20 ${pageTopPadding ? "pt-28 sm:pt-32" : "py-20"}`}
    >
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[min(480px,70vw)] w-[min(480px,70vw)] translate-x-1/3 -translate-y-1/2 opacity-40"
        aria-hidden
      >
        <Image src="/images/hero-gradient-2.webp" alt="" width={480} height={480} className="h-full w-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {heading}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {showLeadVisual && (
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg ring-1 ring-black/5 dark:ring-white/10 lg:max-w-lg">
                <Image
                  src="/images/contact-side.jpg"
                  alt="Restaurant team planning with marketing and operations"
                  width={768}
                  height={451}
                  className="w-full h-auto object-cover aspect-[768/451]"
                />
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">
                  <a href="mailto:sales@digirestro.ai" className="hover:text-primary transition-colors">
                    sales@digirestro.ai
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground">09:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  We&apos;ve received your request. Our team will contact you shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input 
                    id="name"
                    name="name" 
                    placeholder="Your full name" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number *
                  </label>
                  <Input 
                    id="mobile"
                    name="mobile" 
                    type="tel"
                    placeholder="Your phone number" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email"
                    placeholder="Your email address" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    Business Name *
                  </label>
                  <Input 
                    id="business"
                    name="business" 
                    placeholder="Your restaurant/business name" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City Name *
                  </label>
                  <Input 
                    id="city"
                    name="city" 
                    placeholder="Your city" 
                    required 
                  />
                </div>

                {error && (
                  <p className="text-destructive text-sm">{error}</p>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit to get a call back"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
