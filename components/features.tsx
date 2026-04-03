import Image from "next/image"

const features = [
  {
    image: "/images/feature-ai.png",
    title: "AI-Enabled Features",
    description: "AI utilizes your historic data and helps you make crucial business decisions with smart insights.",
    imageClass: "object-cover object-center",
  },
  {
    image: "/images/feature-billing.webp",
    title: "Point of Sale & Billing",
    description: "End-to-end technology experience for your restaurant and customers with comprehensive billing tools.",
    imageClass: "object-contain p-4",
  },
  {
    image: "/images/feature-easy.webp",
    title: "Easy to Operate",
    description: "Easy to navigate billing screen designed with a layman-centric approach for busy hours.",
    imageClass: "object-contain p-4",
  },
  {
    image: "/images/feature-integration.webp",
    title: "Seamless Integrations",
    description: "Manage online orders directly on POS with Zomato, Swiggy, and accounting system integrations.",
    imageClass: "object-contain p-4",
  },
  {
    image: "/images/feature-support.webp",
    title: "24/7 Live Support",
    description: "Real humans hearing your complaints and requests. We provide personalized support round the clock.",
    imageClass: "object-cover object-center",
  },
  {
    image: "/images/feature-inventory.webp",
    title: "Inventory Management",
    description: "Real-time inventory tracking and management to reduce waste and optimize your stock levels.",
    imageClass: "object-contain p-4",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Boost Profits & Grow Your Business
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Transform your growth journey with smart business tools designed for modern restaurants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="w-full h-48 relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/80 to-muted/40 ring-1 ring-border/60">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className={feature.imageClass}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
