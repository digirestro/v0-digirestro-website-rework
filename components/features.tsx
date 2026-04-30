import Image from "next/image"

/** Unsplash — https://unsplash.com/license (decorative / thematic imagery) */
const U = "https://images.unsplash.com"

/** Brand illustration (JPEG); use native img so it always loads from /public without optimizer edge cases */
const SUPPORT_ART = "/images/customer-support-24-7.jpg"

type FeatureItem = {
  title: string
  description: string
  image: string
  alt: string
  /** Square or illustrated assets: show full artwork without harsh cropping */
  imageFit?: "cover" | "contain"
  imageBgClass?: string
}

const features: FeatureItem[] = [
  {
    title: "Analytics and reporting",
    description:
      "Use sales history, inventory, and outlet data to spot trends, tighten costs, and make clearer day-to-day decisions.",
    image: "/images/Analytics.jpeg",
    alt: "Laptop showing charts and business analytics on a desk",
  },
  {
    title: "Point of Sale and billing",
    description:
      "End-to-end tools for your restaurant and guests from orders to receipts with a billing flow built for busy service.",
    image: "/images/feature-billing.webp",
    alt: "Digirestro POS terminal and billing at the counter",
  },
  {
    title: "Easy to operate",
    description:
      "Straightforward screens designed so staff can move fast during lunch and dinner rushes.",
    image: "/images/operate.png",
    alt: "operations of a mobile restaurant POS system",
  },
  {
    title: "Seamless integrations",
    description:
      "Bring aggregator and accounting workflows into one place with Zomato, Swiggy, and your finance stack.",
    image: "/images/partner-integrations-hub.webp",
    alt: "Connected restaurant ecosystem—POS, QR ordering, printers, kitchen, and aggregators in one network",
  },
  {
    title: "24/7 live support",
    description:
      "Real people on the line for questions and fixes personalised help around the clock.",
    image: SUPPORT_ART,
    alt: "Customer support services—24/7 support, remote assistance, technical help, and general inquiries",
    imageFit: "contain",
    imageBgClass: "bg-white",
  },
  {
    title: "Inventory management",
    description:
      "Track stock in real time to cut waste and keep the kitchen and bar aligned with what actually sells.",
    image: "/images/inventory.png",
    alt: "Fresh produce and ingredients in a market or kitchen context",
  },
]

function FeatureMedia({ feature }: { feature: FeatureItem }) {
  const box = "relative w-full h-52 sm:h-56 md:h-60 bg-muted"
  const fit = feature.imageFit ?? "cover"
  const bg = feature.imageBgClass ?? ""

  /** Square brand JPEG: flex + explicit Image dimensions avoids a collapsed image (blank tile). */
  if (feature.image === SUPPORT_ART) {
    return (
      <div
        className={`${box} ${bg} flex items-center justify-center overflow-hidden px-3 py-2 sm:px-4 sm:py-3`}
      >
        <Image
          src={SUPPORT_ART}
          width={1024}
          height={1024}
          alt={feature.alt}
          sizes="(max-width: 768px) 90vw, 360px"
          className="h-auto max-h-52 w-full max-w-full object-contain object-center sm:max-h-56 md:max-h-60"
          unoptimized
        />
      </div>
    )
  }

  return (
    <div className={`${box} ${bg}`}>
      <Image
        src={feature.image}
        alt={feature.alt}
        fill
        className={fit === "contain" ? "object-contain object-center p-2 sm:p-3" : "object-cover"}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        unoptimized={feature.image.startsWith("http")}
      />
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 pt-20 sm:pt-32 pb-14 sm:pb-20 px-3 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built for busy restaurant floors
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One consistent toolset from Digirestro so teams spend less time on software and more time with guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              <FeatureMedia feature={feature} />
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
