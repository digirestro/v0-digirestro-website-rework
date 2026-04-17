import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  LayoutDashboard,
  UtensilsCrossed,
  WifiOff,
} from "lucide-react"

/** Local asset (same scene as Unsplash NASA Earth view) — avoids blank tiles when remote images are blocked */
const WHO_WE_SERVE_IMAGE = "/images/global.jpg"

const whoWeServeRegions = [
  "India",
  "Middle East",
  "Asia",
  "Africa",
  "Europe",
  "North America",
] as const

const suite = [
  {
    title: "Owner App",
    desc: "Sales, menus, and outlet performance on your phone wherever you are.",
    src: "/images/suite/owner-app.png",
    slug: "owner-app",
  },
  {
    title: "QR Ordering",
    desc: "Guests scan, browse, and order from the table with your branded digital menu.",
    src: "/images/suite/qr-ordering.png",
    slug: "qr-menu",
  },
  {
    title: "Rider App",
    desc: "Routes, handoffs, and delivery status so riders stay in sync with the kitchen.",
    src: "/images/suite/rider-app.png",
    slug: "digirestro-rider-app",
  },
  {
    title: "Captain App",
    desc: "Table map and floor service tools so captains run the room with confidence.",
    src: "/images/suite/captain-app.png",
    slug: "captain-ordering",
  },
  {
    title: "Billing POS",
    desc: "Billing, tables, and checkout in one flow built for busy service.",
    src: "/images/suite/billing-pos.png",
    slug: "billing-software",
  },
  {
    title: "KDS – Kitchen Display System",
    desc: "Colour coded tickets, prep states, and handoff from kitchen to the pass.",
    src: "/images/suite/kds.png",
    slug: "kds-kitchen-display-system",
  },
  {
    title: "SCM – Supply Chain Management",
    desc: "Purchasing, stock, and analytics tied to what your kitchens actually use.",
    src: "/images/suite/scm.png",
    slug: "scm-3",
  },
  {
    title: "Online Ordering App",
    desc: "Your menu and offers in a consumer ready ordering experience.",
    src: "/images/suite/online-ordering.png",
    slug: "online-ordering-mobile-app",
  },
  {
    title: "ONDC Integration",
    desc: "Connect to India’s open commerce network without a separate order stack.",
    src: "/images/suite/ondc.png",
    slug: "ondc-digirestro",
  },
  {
    title: "DigiPay",
    desc: "Payment integrated with billing, reporting, and accounting for smoother operations and clearer records.",
    src: "/images/suite/digipay.png",
    slug: "digipay",
  },
  {
    title: "Review Lens",
    desc: "Signals and suggestions to refine operations, menus, and guest experience.",
    src: "/images/suite/review_lens.png",
    slug: "ai-feedback",
  },
]

const posHighlights = [
  {
    icon: LayoutDashboard,
    title: "Built for real staff",
    body: "Self explanatory billing screens so teams adopt faster with less training overhead.",
  },
  {
    icon: WifiOff,
    title: "Hardware flexible & offline ready",
    body: "Run on the devices you already own. Bill locally when the line drops; sync when you’re back online.",
  },
  {
    icon: UtensilsCrossed,
    title: "Sections & kitchens",
    body: "Section wise pricing and KOT routing so the right kitchen gets the right ticket.",
  },
  {
    icon: Building2,
    title: "Many terminals, one sequence",
    body: "Multi terminal billing with offline sync and continuous bill numbering across the floor.",
  },
]

const red = "#d92a2a"

export function PlatformContent() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/25 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Everything you need to run food service from POS to supply chain
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Digirestro is a one stop platform for restaurants, cafés, bars, and chains: billing,
            payments, inventory, digital ordering, kitchen screens, and owner tools in one connected system.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95"
              style={{ backgroundColor: red }}
            >
              Book a Demo
            </Link>
            <Link
              href="/features"
              className="inline-flex rounded-lg border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground transition hover:bg-muted"
            >
              Explore features
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
              Product suite
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-8">
            {suite.map((item) => (
              <Link
                key={item.title}
                href={`/${item.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-md transition hover:border-primary/25 hover:shadow-lg sm:p-4"
              >
                <div
                  className="relative w-full bg-muted/30"
                  style={{ aspectRatio: "596 / 406" }}
                >
                  <Image
                    src={item.src}
                    alt={`${item.title}: ${item.desc}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-foreground transition group-hover:text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
              Billing POS that fits your operation
            </h2>
            <p className="mt-3 text-muted-foreground">
              Highlights operators care about on day one speed, resilience, and control at the register.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {posHighlights.map((h) => (
              <div key={h.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                  <h.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section
        id="who-we-serve"
        className="scroll-mt-24 border-t border-border bg-muted/35 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          {/* Large local image first so it always paints (no remote / fill layout surprises) */}
          <div className="overflow-hidden rounded-3xl border-2 border-primary/25 bg-zinc-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
            <Image
              src={WHO_WE_SERVE_IMAGE}
              width={1600}
              height={1000}
              alt="Earth from space representing Digirestro’s reach across India, the Middle East, Asia, Africa, Europe, and North America"
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={false}
              unoptimized
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Who we serve
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed sm:text-lg">
              Independent eateries, growing regional brands, and multi outlet chains in India, the Middle East, Asia,
              Africa, Europe, and North America. SMEs get fast time to value; enterprises get consistency and scale
              across locations.
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              Serving teams across continents from single outlets to global chains.
            </p>
            <ul
              className="mt-6 flex flex-wrap justify-center gap-2"
              aria-label="Regions we serve"
            >
              {whoWeServeRegions.map((region) => (
                <li
                  key={region}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm sm:text-sm"
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
