import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Plug,
  Headphones,
  Package,
} from "lucide-react"

type FeatureItem =
  | {
      kind: "image"
      title: string
      description: string
      image: string
      imageClass: string
    }
  | {
      kind: "icon"
      icon: LucideIcon
      title: string
      description: string
    }

const features: FeatureItem[] = [
  {
    kind: "image",
    image: "/images/analytics-dashboard.png",
    title: "Analytics & reporting",
    description:
      "Use sales history, inventory, and outlet data to spot trends, tighten costs, and make clearer day-to-day decisions.",
    imageClass: "object-cover object-top",
  },
  {
    kind: "icon",
    icon: CreditCard,
    title: "Point of Sale & billing",
    description:
      "End-to-end tools for your restaurant and guests—from orders to receipts—with a billing flow built for busy service.",
  },
  {
    kind: "icon",
    icon: LayoutDashboard,
    title: "Easy to operate",
    description:
      "Straightforward screens designed so staff can move fast during lunch and dinner rushes.",
  },
  {
    kind: "icon",
    icon: Plug,
    title: "Seamless integrations",
    description:
      "Bring aggregator and accounting workflows into one place with Zomato, Swiggy, and your finance stack.",
  },
  {
    kind: "icon",
    icon: Headphones,
    title: "24/7 live support",
    description:
      "Real people on the line for questions and fixes—personalised help around the clock.",
  },
  {
    kind: "icon",
    icon: Package,
    title: "Inventory management",
    description:
      "Track stock in real time to cut waste and keep the kitchen and bar aligned with what actually sells.",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built for busy restaurant floors
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One consistent toolset from Digirestro—so teams spend less time on software and more time with guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-full h-48 relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/80 to-muted/40 ring-1 ring-border/60 flex items-center justify-center">
                {feature.kind === "image" ? (
                  <Image
                    src={feature.image}
                    alt="Digirestro dashboard with inventory, stock level, and analytics widgets"
                    fill
                    className={feature.imageClass}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <feature.icon className="h-16 w-16 text-primary" strokeWidth={1.25} aria-hidden />
                )}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                {feature.kind === "image" && (
                  <BarChart3 className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                )}
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
