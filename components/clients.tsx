import Image from "next/image"
import { CreditCard, Network } from "lucide-react"

/** Venue imagery — Unsplash (license: https://unsplash.com/license), decorative context only */
const VENUE_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544148103-0777bfbcd62c?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=480&h=300&fit=crop&q=80",
]

const clients = [
  "Las Olas",
  "We Desi",
  "Chaat Di Hatti",
  "Mashaal Club",
  "Mast Banarasi Paan",
  "Kulhar Chai",
  "Urban Theka",
  "Begum's",
  "Yalla Begum's",
  "Integrated Group",
  "Shree Nidhi",
  "Niyaaz",
  "Hotel Godavari",
  "1972 SBL Wood Fired Pizza",
  "OutPost 7",
  "Desi Aroma",
  "Chatpati Rasoi",
  "Moon Broch Multicuisine",
  "Ambrosia Restaurant",
  "Wow China New York Pizza",
  "Hungry Oven",
  "Pizza Garage",
  "Kill no kalorie",
  "Laziz Pizza",
  "A Paradise Rasoi",
  "Durga Cafe",
]

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@11.4.0/icons"

/** Logos via Simple Icons (jsDelivr). */
const integrationPartners: { name: string; logoUrl?: string }[] = [
  { name: "Zomato", logoUrl: `${SI}/zomato.svg` },
  { name: "Swiggy", logoUrl: `${SI}/swiggy.svg` },
  { name: "Paytm", logoUrl: `${SI}/paytm.svg` },
  { name: "PhonePe", logoUrl: `${SI}/phonepe.svg` },
  { name: "Microsoft", logoUrl: `${SI}/microsoft.svg` },
  { name: "Visa", logoUrl: `${SI}/visa.svg` },
  { name: "Mastercard", logoUrl: `${SI}/mastercard.svg` },
  { name: "Fiserv", logoUrl: `${SI}/fiserv.svg` },
  { name: "Diliverect", logoUrl: "https://www.deliverect.com/images/deliverect_logo_white.svg" },
  { name: "Lalamove", logoUrl: "https://van-static.lalamove.com/llm-user-web/885125/assets/logo-4e75aa7b.svg" },
  { name: "DoorDash", logoUrl: `${SI}/doordash.svg` },
  { name: "Uber Eats", logoUrl: `${SI}/ubereats.svg` },
  { name: "Urban Piper" },
]

const restaurantCards = clients.map((name, i) => ({
  name,
  image: VENUE_IMAGES[i % VENUE_IMAGES.length]!,
}))

function RestaurantMarquee() {
  const loop = [...restaurantCards, ...restaurantCards]

  return (
    <div className="clients-marquee-wrap relative overflow-hidden py-1">
      <div
        className="clients-marquee-track flex w-max gap-4"
        aria-hidden={false}
      >
        {loop.map((item, i) => (
          <figure
            key={`${item.name}-${i}`}
            className="relative h-36 w-[220px] shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:h-40 sm:w-[260px]"
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover"
              sizes="260px"
              unoptimized
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 pb-3 pt-10">
              <span className="line-clamp-2 text-sm font-semibold text-white">{item.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export function Clients() {
  return (
    <section className="border-y border-border bg-muted/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mx-auto lg:max-w-2xl">
          <h3 className="text-balance font-[family-name:var(--font-display)] text-xl font-semibold text-foreground sm:text-2xl">
            Restaurant teams in India and all over the world trust Digirestro.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Teams across many states in India and abroad rely on Digirestro—from neighbourhood favourites to busy chains.
          </p>
        </div>

        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Trusted partners &amp; integrations
        </p>

        <div className="mb-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 px-2">
          {integrationPartners.map((p) => (
            <div
              key={p.name}
              className="flex h-14 w-[100px] flex-col items-center justify-center gap-1 sm:h-16 sm:w-[120px]"
            >
              {p.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element -- remote SVG brand marks
                <img
                  src={p.logoUrl}
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain opacity-90 grayscale transition hover:grayscale-0 sm:h-12 sm:w-12"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card sm:h-12 sm:w-12">
                  <CreditCard className="h-6 w-6 text-primary" aria-hidden />
                </div>
              )}
              <span className="text-center text-[10px] font-medium text-muted-foreground sm:text-xs">
                {p.name}
              </span>
            </div>
          ))}
          <div className="flex h-14 w-[100px] flex-col items-center justify-center gap-1 sm:h-16 sm:w-[120px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card sm:h-12 sm:w-12">
              <Network className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <span className="text-center text-[10px] font-medium text-muted-foreground sm:text-xs">ONDC</span>
          </div>
        </div>

        <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Restaurants &amp; brands
        </p>
        <p className="mb-6 text-center text-xs text-muted-foreground">
          
        </p>

        <RestaurantMarquee />
      </div>
    </section>
  )
}
