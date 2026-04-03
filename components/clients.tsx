import Image from "next/image"

const clients = [
  "Las Olas — Goa",
  "We Desi — Singapore",
  "Chaat Di Hatti — Margao, Goa",
  "Mashaal — The Luxurious Club, Pattaya",
  "Mast Banarasi Paan",
  "Kulhar Chai",
  "Urban Theka",
  "Begum's — Muscat, Oman",
  "Yalla Begum's — Muscat, Oman",
  "Integrated Group",
  "Shree Nidhi — Mumbai",
  "Niyaaz",
  "Hotel Godavari — Suryapet, Telangana",
  "1972 SBL Wood Fired Pizza — Bengaluru",
  "OutPost 7 — Guwahati, Assam",
  "Desi Aroma — Baner, Pune",
  "Chatpati Rasoi — Raipur, Chhattisgarh",
  "Moon Broch Multicuisine — Ambegaon, Pune",
  "Ambrosia Restaurant — Kolkata",
  "Wow China New York Pizza — West Bengal",
  "Hungry Oven — Haridwar, Uttarakhand",
  "Pizza Garage — UP",
  "Kill no kalorie — Baner, Pune",
  "Laziz Pizza — Saharanpur, UP",
  "A Paradise Rasoi — Wazidpur, Jaunpur",
  "Durga Cafe — Pune",
]

const channelPartners: {
  label: string
  caption: string
  src: string
  width: number
  height: number
}[] = [
  {
    label: "Zomato",
    caption: "Aggregator order flow into POS",
    src: "/images/partner-order-flow.webp",
    width: 606,
    height: 578,
  },
  {
    label: "Swiggy",
    caption: "Delivery & menu workflows",
    src: "/images/partner-custom-ops.webp",
    width: 702,
    height: 528,
  },
  {
    label: "Aggregator orders",
    caption: "Unified channel integrations",
    src: "/images/partner-integrations-hub.webp",
    width: 550,
    height: 550,
  },
  {
    label: "Accounting integrations",
    caption: "Inventory & back-office sync",
    src: "/images/partner-inventory-finance.webp",
    width: 552,
    height: 534,
  },
]

const venueVibes = [
  { src: "/images/clients-vibe-1.jpg", alt: "Restaurant dining atmosphere" },
  { src: "/images/clients-vibe-2.jpg", alt: "Restaurant service context" },
  { src: "/images/clients-vibe-3.jpg", alt: "Venue interior" },
  { src: "/images/clients-vibe-4.jpg", alt: "Small business POS context" },
]

export function Clients() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-muted/20 via-transparent to-transparent border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 mb-14">
          <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
            <div className="relative aspect-[768/451] w-full">
              <Image
                src="/images/clients-venues-context.jpg"
                alt="Restaurants and hospitality venues using modern operations and marketing"
                width={768}
                height={451}
                className="h-full w-full object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold text-foreground text-balance">
              Trusted by over 1000+ restaurant businesses
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Venues across India and abroad run on DigiRestro—from neighbourhood favourites to clubs and chains.
            </p>
          </div>
        </div>

        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
          Trusted partners &amp; integrations
        </p>
        <p className="text-center text-xs text-muted-foreground/90 max-w-2xl mx-auto mb-8">
          Product illustrations for the kinds of channels and workflows DigiRestro supports—not third-party trademark artwork.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {channelPartners.map((p) => (
            <div
              key={p.label}
              className="flex flex-col rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="relative mx-auto h-32 w-full max-w-[220px]">
                <Image
                  src={p.src}
                  alt=""
                  width={p.width}
                  height={p.height}
                  className="h-full w-full object-contain object-center"
                  sizes="220px"
                />
              </div>
              <p className="mt-3 text-center font-semibold text-foreground text-sm sm:text-base">
                {p.label}
              </p>
              <p className="mt-1 text-center text-xs text-muted-foreground leading-snug">
                {p.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
          Restaurants &amp; brands
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {venueVibes.map((v) => (
            <div
              key={v.src}
              className="relative h-16 w-16 overflow-hidden rounded-full border border-border shadow-sm ring-2 ring-background sm:h-[72px] sm:w-[72px]"
            >
              <Image
                src={v.src}
                alt={v.alt}
                width={150}
                height={150}
                className="h-full w-full object-cover object-center"
                sizes="72px"
              />
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="flex animate-marquee gap-8 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client}-${idx}`}
                className="flex-shrink-0 px-6 py-3 bg-muted/50 rounded-full border border-border"
              >
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
