"use client"

import Image from "next/image"
import { CreditCard, Network } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    duration: 50,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const updateScales = () => {
      const slides = slideRefs.current
      slides.forEach((slide, index) => {
        if (!slide) return
        const distance = Math.abs(index - selectedIndex)
        
        let scale = 1
        let opacity = 1
        
        if (distance === 0) {
          scale = 1.1
          opacity = 1
        } else if (distance === 1) {
          scale = 0.95
          opacity = 0.9
        } else if (distance === 2) {
          scale = 0.85
          opacity = 0.7
        } else {
          scale = 0.75
          opacity = 0.5
        }
        
        slide.style.transform = `scale(${scale})`
        slide.style.opacity = `${opacity}`
        slide.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out"
      })
    }

    updateScales()
    emblaApi.on("select", updateScales)
    emblaApi.on("settle", updateScales)

    return () => {
      emblaApi.off("select", updateScales)
      emblaApi.off("settle", updateScales)
    }
  }, [emblaApi, selectedIndex])

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className="clients-carousel-wrap relative overflow-hidden py-8" ref={emblaRef}>
      <div className="flex gap-4">
        {restaurantCards.map((item, i) => (
          <figure
            key={`${item.name}-${i}`}
            ref={(el) => {
              slideRefs.current[i] = el
            }}
            className="relative h-36 w-[220px] shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:h-40 sm:w-[260px] cursor-grab active:cursor-grabbing"
          >
            <Image
              src={item.image}
              alt={item.name}
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
