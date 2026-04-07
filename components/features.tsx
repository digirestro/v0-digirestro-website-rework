import Image from "next/image"

/** Unsplash — https://unsplash.com/license (decorative / thematic imagery) */
const U = "https://images.unsplash.com"

const features: {
  title: string
  description: string
  image: string
  alt: string
}[] = [
  {
    title: "Analytics & reporting",
    description:
      "Use sales history, inventory, and outlet data to spot trends, tighten costs, and make clearer day-to-day decisions.",
    image: `${U}/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=82`,
    alt: "Laptop showing charts and business analytics on a desk",
  },
  {
    title: "Point of Sale & billing",
    description:
      "End-to-end tools for your restaurant and guests—from orders to receipts—with a billing flow built for busy service.",
    image: `${U}/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop&q=82`,
    alt: "Contactless card payment at a counter",
  },
  {
    title: "Easy to operate",
    description:
      "Straightforward screens designed so staff can move fast during lunch and dinner rushes.",
    image: `${U}/photo-1556740758-90f3742e0f0e?w=900&h=600&fit=crop&q=82`,
    alt: "Person using a tablet for orders in a café setting",
  },
  {
    title: "Seamless integrations",
    description:
      "Bring aggregator and accounting workflows into one place with Zomato, Swiggy, and your finance stack.",
    image: `${U}/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&q=82`,
    alt: "Team collaborating with laptops and phones",
  },
  {
    title: "24/7 live support",
    description:
      "Real people on the line for questions and fixes—personalised help around the clock.",
    image: `${U}/photo-1521790365259-fb0d9cde40d7?w=900&h=600&fit=crop&q=82`,
    alt: "Customer support headset representing help desk assistance",
  },
  {
    title: "Inventory management",
    description:
      "Track stock in real time to cut waste and keep the kitchen and bar aligned with what actually sells.",
    image: `${U}/photo-1542838132-92c53300491e?w=900&h=600&fit=crop&q=82`,
    alt: "Fresh produce and ingredients in a market or kitchen context",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52 sm:h-56 md:h-60 bg-muted">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
