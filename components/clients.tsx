"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import type { Swiper as SwiperClass } from "swiper"
import { Autoplay, EffectCoverflow } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"

/** Venue imagery — ImageKit from digirestro.ai for trusted restaurant brands */
const VENUE_IMAGES = [
  "https://ik.imagekit.io/ybpqqauwy5/lasolas_eEyrpimhSB.jpg?updatedAt=1748327089143",
  "https://ik.imagekit.io/ybpqqauwy5/we%20desi_V3eqbyubO.jpg?updatedAt=1748327089311",
  "https://ik.imagekit.io/ybpqqauwy5/chaat-di-hatti-margao-goa-chaat-corners-a8561g3k2z%20(1)_Hw0CwGUM1.jpg?updatedAt=1744723323584",
  "https://ik.imagekit.io/ybpqqauwy5/mashaal_lc3eJY7nw.jpg?updatedAt=1743683228284",
  "https://ik.imagekit.io/ybpqqauwy5/Group%202_uEcg6zv30.jpg?updatedAt=1734408700141",
  "https://ik.imagekit.io/ybpqqauwy5/Group%203_thavnW6s-.jpg?updatedAt=1734408700078",
  "https://ik.imagekit.io/ybpqqauwy5/Group%201_33KY-glYC.jpg?updatedAt=1734408700091",
  "https://ik.imagekit.io/ybpqqauwy5/Group%201_-utk7lcPq.jpg?updatedAt=1733385636606",
  "https://ik.imagekit.io/ybpqqauwy5/Group%201_ExmsY2RX4d.png?updatedAt=1733385636723",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/Group%2023911_BTpE5eQ94n.png?updatedAt=1704454686331",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/Artboard%20_%202_gIFcaCc9Y.jpg?updatedAt=1697797748837",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/WhatsApp-Image-2023-06-29-at-2.08.58-PM-1_KIfOZ03iW.jpeg?updatedAt=1689158445527",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=480&h=300&fit=crop&q=80",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/1972-SBL-wood-fired-pizza-Bengaluru_-Karnataka_a2FD6PLIz.jpg?updatedAt=1680852590367",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=480&h=300&fit=crop&q=80",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/pune-desi_KXt_DSAnDg.jpg?updatedAt=1680852594946",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/Raipur_-Chhattisgarh---Chatpati-Rasoi_b8C4Jm9SqT.jpg?updatedAt=1680852594794",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=480&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=480&h=300&fit=crop&q=80",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/Bankura_-West-Bengal-Wow-China-NewYork-Pizza_9zsCJf5Nki.jpg?updatedAt=1680852590563",
  "https://images.unsplash.com/photo-1544148103-0777bfbcd62c?w=480&h=300&fit=crop&q=80",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/Pizza-Garage-Ghazipur_26ZTIEG7z.jpg?updatedAt=1680852594515",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=480&h=300&fit=crop&q=80",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/SAHARANPUR_dDuON1OHiH.jpg?updatedAt=1680852590355",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=480&h=300&fit=crop&q=80",
  "https://ik.imagekit.io/ybpqqauwy5/DigiRestro-Client_Logo/durga-cafe-used-digirestro_HhLTTzBOJc.jpg?updatedAt=1680861169179",
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

/** DuckDuckGo-hosted favicons — small marks when Simple Icons has no slug in v11. */
function fav(domain: string) {
  return `https://icons.duckduckgo.com/ip3/${domain}.ico`
}

/**
 * Order matches stakeholder list. Logos: Simple Icons (SVG) where available,
 * else site favicons / official assets for crisp small marks.
 */
const integrationPartners: { name: string; logoUrl: string }[] = [
  { name: "Xplorpay", logoUrl: fav("xplorpay.com") },
  { name: "Paymob", logoUrl: fav("paymob.com") },
  { name: "Azure AI", logoUrl: `${SI}/microsoftazure.svg` },
  { name: "Infobip", logoUrl: fav("infobip.com") },
  { name: "Zomato", logoUrl: `${SI}/zomato.svg` },
  { name: "Swiggy", logoUrl: `${SI}/swiggy.svg` },
  { name: "Paytm", logoUrl: `${SI}/paytm.svg` },
  { name: "PhonePe", logoUrl: `${SI}/phonepe.svg` },
  { name: "Microsoft", logoUrl: `${SI}/microsoft.svg` },
  { name: "Visa", logoUrl: `${SI}/visa.svg` },
  { name: "Mastercard", logoUrl: `${SI}/mastercard.svg` },
  { name: "Fiserv", logoUrl: "/images/partners/fiserv.svg" },
  { name: "Deliverect", logoUrl: fav("deliverect.com") },
  { name: "Lalamove", logoUrl: fav("lalamove.com") },
  { name: "DoorDash", logoUrl: `${SI}/doordash.svg` },
  { name: "Uber Eats", logoUrl: `${SI}/ubereats.svg` },
  { name: "Urban Piper", logoUrl: fav("www.urbanpiper.com") },
  { name: "ONDC", logoUrl: fav("ondc.org") },
  { name: "Avalara", logoUrl: fav("avalara.com") },
  { name: "Foodpanda Singapore", logoUrl: `${SI}/foodpanda.svg` },
  { name: "Grubtech", logoUrl: fav("grubtech.com") },
  { name: "Stripe", logoUrl: `${SI}/stripe.svg` },
  { name: "Razorpay", logoUrl: `${SI}/razorpay.svg` },
  { name: "Ecomnext", logoUrl: "/images/partners/ecomnext.svg" },
  { name: "Xirify", logoUrl: fav("www.xirify.com") },
]

const restaurantCards = clients.map((name, i) => ({
  name,
  image: VENUE_IMAGES[i % VENUE_IMAGES.length]!,
}))

/**
 * Digirestro.ai uses Divi + Swiper coverflow: centeredSlides, loop, autoplay 2s, speed 400,
 * spacing 50, cover depth 362, breakpoints 3|1|1. Image is full-bleed; title sits below (same structure as their markup).
 */
function RestaurantPartnersCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null)

  return (
    <div className="clients-carousel-wrapper w-full">
      <div className="partners-swiper-wrap relative mx-auto w-full max-w-7xl">
        <Swiper
          className="partners-swiper w-full py-6"
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          loopAdditionalSlides={3}
          watchSlidesProgress
          speed={400}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 362,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={(instance) => {
            swiperRef.current = instance
          }}
        >
          {restaurantCards.map((item, i) => (
            <SwiperSlide key={`${item.name}-${i}`} className="!flex justify-center !bg-transparent">
              <div className="flex w-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-border/90 shadow-xl">
                <div className="relative aspect-[4/3] w-full min-h-[180px] bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1023px) 92vw, 320px"
                    unoptimized
                  />
                </div>
                <div className="bg-card px-3 py-3">
                  <p className="text-center text-sm font-semibold leading-snug text-foreground">{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 flex justify-center gap-10">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-muted"
          aria-label="Previous restaurant"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-muted"
          aria-label="Next restaurant"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
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


        <RestaurantPartnersCarousel />

        <br />
        <br />
                
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Trusted partners &amp; integrations
        </p>

        <br />
        <br />
        <div className="mb-14 flex flex-wrap items-start justify-center gap-x-6 gap-y-6 px-2 sm:gap-x-8 sm:gap-y-7">
          {integrationPartners.map((p) => (
            <div
              key={p.name}
              className="flex w-[92px] flex-col items-center justify-start gap-1.5 sm:w-[105px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- remote brand marks (SVG/ICO/PNG) */}
              <img
                src={p.logoUrl}
                alt={`${p.name} logo`}
                width={54}
                height={54}
                loading="lazy"
                decoding="async"
                className="h-[2.1rem] w-[2.1rem] object-contain opacity-90 grayscale transition hover:grayscale-0 sm:h-[2.3625rem] sm:w-[2.3625rem]"
              />
              <span className="line-clamp-3 min-h-[3.25rem] text-center text-[15px] font-medium leading-tight text-muted-foreground sm:min-h-[3.25rem] sm:text-[15px]">
                {p.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
