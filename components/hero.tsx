import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
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
            <Button size="lg" className="text-base px-8">
              Get a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Explore Features
            </Button>
          </div>
        </div>

        {/* POS Dashboard Screenshot */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="/images/pos-dashboard.png"
              alt="DigiRestro POS Dashboard"
              width={1536}
              height={974}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by <span className="font-semibold text-foreground">1000+</span> restaurant businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Leo's Cafe",
              "Renaissance Grand",
              "Mashaal Club",
              "Urban Theka",
              "Begum's",
              "Hungry Oven"
            ].map((client) => (
              <span key={client} className="text-foreground font-medium text-sm sm:text-base">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
