import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  LayoutDashboard,
  UtensilsCrossed,
  WifiOff,
} from "lucide-react"

const suite = [
  {
    title: "Owner App",
    desc: "Sales, menus, and outlet performance on your phone—wherever you are.",
    src: "/images/suite/owner-app.png",
  },
  {
    title: "QR Ordering",
    desc: "Guests scan, browse, and order from the table with your branded digital menu.",
    src: "/images/suite/qr-ordering.png",
  },
  {
    title: "Rider App",
    desc: "Routes, handoffs, and delivery status so riders stay in sync with the kitchen.",
    src: "/images/suite/rider-app.png",
  },
  {
    title: "Captain App",
    desc: "Table map and floor service tools so captains run the room with confidence.",
    src: "/images/suite/captain-app.png",
  },
  {
    title: "Billing POS",
    desc: "Billing, tables, and checkout in one flow—built for busy service.",
    src: "/images/suite/billing-pos.png",
  },
  {
    title: "KDS – Kitchen Display System",
    desc: "Colour-coded tickets, prep states, and handoff from kitchen to the pass.",
    src: "/images/suite/kds.png",
  },
  {
    title: "SCM – Supply Chain Management",
    desc: "Purchasing, stock, and analytics tied to what your kitchens actually use.",
    src: "/images/suite/scm.png",
  },
  {
    title: "Online Ordering App",
    desc: "Your menu and offers in a consumer-ready ordering experience.",
    src: "/images/suite/online-ordering.png",
  },
  {
    title: "ONDC Integration",
    desc: "Connect to India’s open commerce network without a separate order stack.",
    src: "/images/suite/ondc.png",
  },
  {
    title: "AI – My Learning Academy",
    desc: "In-product learning paths so teams adopt Digirestro faster.",
    src: "/images/suite/ai-learning-academy.png",
  },
  {
    title: "AI Feedback",
    desc: "Signals and suggestions to refine operations, menus, and guest experience.",
    src: "/images/suite/ai-feedback.png",
  },
]

const posHighlights = [
  {
    icon: LayoutDashboard,
    title: "Built for real staff",
    body: "Self-explanatory billing screens so teams adopt faster with less training overhead.",
  },
  {
    icon: WifiOff,
    title: "Hardware-flexible & offline-ready",
    body: "Run on the devices you already own. Bill locally when the line drops; sync when you’re back online.",
  },
  {
    icon: UtensilsCrossed,
    title: "Sections & kitchens",
    body: "Section-wise pricing and KOT routing so the right kitchen gets the right ticket.",
  },
  {
    icon: Building2,
    title: "Many terminals, one sequence",
    body: "Multi-terminal billing with offline sync and continuous bill numbering across the floor.",
  },
]

const red = "#d92a2a"

export function PlatformContent() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/25 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Platform overview</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Everything you need to run food service—from POS to supply chain
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Digirestro is a full-stack operations platform for restaurants, cafés, bars, and chains: billing,
            payments, inventory, digital ordering, kitchen screens, and owner tools in one connected system.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95"
              style={{ backgroundColor: red }}
            >
              Book a demo
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
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-md transition hover:border-primary/25 hover:shadow-lg sm:p-4"
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
              </article>
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
              Highlights operators care about on day one—speed, resilience, and control at the register.
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

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">DigiPay</h2>
            <p className="mt-3 text-muted-foreground">
              Payment processing built for busy counters: multiple methods, quick authorisations, encryption at every
              step, and reporting that ties back to your books.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                Cards, wallets, and online payments in one flow
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                Integrates with inventory and accounting to cut manual entry
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                Scales from a single outlet to high-volume service
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
              Supply chain &amp; recipes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Track ingredients from supplier contracts to plate-level recipes—aligned with POS and finance for
              clearer food cost and less waste.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                Recipe standardisation across locations
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                Expiry and batch visibility to reduce spoilage
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                Automatic inventory and COGS updates where integrated
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/15 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
            Who we serve
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Independent eateries, growing regional brands, and multi-outlet chains in India, the Middle East, Asia,
            Africa, Europe, and North America. SMEs get fast time-to-value; enterprises get consistency and scale across
            locations.
          </p>
        </div>
      </section>
    </div>
  )
}
