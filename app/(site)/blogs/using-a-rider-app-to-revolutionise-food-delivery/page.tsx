import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Bike, Building2, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Using a Rider App to Revolutionise Food Delivery | Digirestro",
  description:
    "How rider applications transform food delivery: real-time tracking, optimised routes, and Digirestro’s Rider app for restaurants and delivery teams.",
}

type ProseSection = { heading: string; paragraphs: string[] }
type ListSection = { heading: string; items: string[] }

const sections: (ProseSection | ListSection)[] = [
  {
    heading: "Delivery of food in evolution",
    paragraphs: [
      "Prior to the invention of rider applications, most meal deliveries were handled through phone orders or third-party networks. For both consumers and restaurants, this frequently resulted in misunderstandings, prolonged delivery times, and a lack of real-time tracking. These difficulties have been addressed head-on by the advent of rider applications, resulting in a smooth and effective food delivery procedure.",
    ],
  },
  {
    heading: "Rider by Digirestro",
    paragraphs: [
      "The Rider App from Digirestro is revolutionary in the field of food delivery. The software empowers delivery staff and improves the whole delivery ecosystem. It was designed with an emphasis on efficiency, transparency, and customer pleasure.",
    ],
  },
  {
    heading: "Features of the Rider app from Digirestro",
    items: [
      "Real-time tracking: Customers may track the delivery status and anticipated arrival time of their orders using the app’s real-time tracking feature.",
      "Route optimisation: The programme uses real-time traffic data to optimise delivery routes, making sure that deliveries are performed as quickly and effectively as possible.",
      "Communication: By using the app, delivery staff may communicate with the restaurant and consumers, lowering the likelihood of order mistakes or misunderstandings.",
      "Order management: The software streamlines the delivery process by giving a comprehensive picture of all allocated orders, pickup locations, and drop-off points.",
      "Payment integration: The app’s seamless payment integration streamlines the transaction process for clients and gives delivery staff access to a safe payment method.",
    ],
  },
  {
    heading: "Benefits of the Rider app from Digirestro",
    items: [
      "Faster deliveries: By using real-time traffic updates and optimised routing, delivery staff may get to their locations more quickly, cutting down on delivery times.",
      "Enhanced customer experience: Throughout the delivery process, consumers are kept informed and involved through real-time tracking and contact options.",
      "Effective order handling: The software simplifies order administration and assignment, reducing the possibility of mistakes and delays.",
      "Greater transparency: Restaurants can keep an eye on the status of deliveries to make sure that orders are sent out and delivered on time.",
      "Improved payment process: The app’s secure and smooth payment connection means that both consumers and delivery staff have a hassle-free experience.",
    ],
  },
  {
    heading: "Real-world illustration",
    paragraphs: [
      "Consider a busy evening at a well-known eatery that provides food delivery. The restaurant had trouble arranging deliveries prior to using Digirestro’s Rider App, which led to missed delivery windows and disgruntled customers.",
      "The restaurant’s delivery procedures significantly improved once the Rider App was included. Real-time order tracking was available to customers, and the app’s improved routing made sure that delivery people got to their locations more quickly than previously. Due to this, the restaurant’s reputation was enhanced and customer loyalty strengthened.",
      "In this case, Digirestro’s Rider App played a crucial role in changing the restaurant’s food delivery operations from a laborious procedure to a simplified and effective one.",
    ],
  },
]

function splitBullet(text: string): { lead: string; rest: string } | null {
  const i = text.indexOf(":")
  if (i <= 0) return null
  return { lead: text.slice(0, i + 1), rest: text.slice(i + 1).trim() }
}

export default function RiderAppBlogPage() {
  return (
    <article className="relative border-b border-border bg-muted/15">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.78 0 0) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-primary/[0.12] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 -left-16 h-64 w-64 rounded-full bg-primary/[0.08] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to journal
        </Link>

        <header className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative border-b border-border bg-gradient-to-br from-primary/[0.14] via-primary/[0.04] to-transparent px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-primary/20">
                <Bike className="h-3.5 w-3.5" aria-hidden />
                Delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <Building2 className="h-3.5 w-3.5 text-primary/80" aria-hidden />
                Restaurant Business
              </span>
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              Using a Rider App to Revolutionise Food Delivery
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Dr.DigiRestro</span>
              <span className="hidden sm:inline" aria-hidden>
                |
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                Aug 25, 2023
              </span>
              <span className="hidden sm:inline" aria-hidden>
                |
              </span>
              <span>blog, Restaurant Business</span>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              The landscape of food delivery has experienced a tremendous upheaval in the age of digital transformation. The way
              businesses and customers experience food delivery services has been fundamentally revolutionised by the incorporation
              of technology, notably the creation of specialised rider applications.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              The innovative Pune-based business Digirestro is at the fore of this change. With a thorough awareness of the
              changing demands of the food sector, Digirestro has tapped into the potential of rider applications to transform the
              experience of food delivery for both customers and businesses.
            </p>

            {sections.map((block, si) => (
              <section
                key={block.heading}
                className={
                  si === 0
                    ? "mt-10 border-t border-border/80 pt-10"
                    : "mt-12 border-t border-border/80 pt-10"
                }
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {block.heading}
                </h2>
                {"paragraphs" in block &&
                  block.paragraphs.map((para, pi) => (
                    <p key={pi} className="mt-4 leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                {"items" in block && (
                  <ul className="mt-5 list-none space-y-4 pl-0">
                    {block.items.map((item, ii) => {
                      const parts = splitBullet(item)
                      return (
                        <li
                          key={ii}
                          className="relative border-l-2 border-primary/30 pl-5 leading-relaxed text-muted-foreground"
                        >
                          {parts ? (
                            <>
                              <span className="font-semibold text-foreground">{parts.lead}</span> {parts.rest}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
          <p>Explore more guides in the Digirestro journal.</p>
          <Link href="/blogs" className="font-semibold text-primary underline-offset-4 transition hover:underline">
            View all articles
          </Link>
        </div>
      </div>
    </article>
  )
}
