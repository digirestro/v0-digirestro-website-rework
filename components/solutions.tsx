"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Building2,
  Coffee,
  ChefHat,
  Utensils,
  Pizza,
  Cake,
  IceCream,
  Wine,
  Building,
  Sandwich,
  Check,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

const platformServices = [
  "Point of sale and billing",
  "QR ordering and digital menus",
  "Online ordering and aggregators",
  "Kitchen display (KDS)",
  "Captain and floor apps",
  "Inventory and recipes",
  "Payments and settlements",
  "Reports and outlet analytics",
  "Owner dashboard and alerts",
] as const

type ServiceName = (typeof platformServices)[number]

const businessTypes: {
  id: string
  name: string
  icon: typeof Building2
  imageSrc: string
  imageAlt: string
  topServices: readonly [ServiceName, ServiceName, ServiceName]
}[] = [
  {
    id: "hotel",
    name: "Hotel",
    icon: Building2,
    imageSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    imageAlt: "Hotel restaurant dining area",
    topServices: [
      "Online ordering and aggregators",
      "Kitchen display (KDS)",
      "Reports and outlet analytics",
    ],
  },
  {
    id: "cafe",
    name: "Cafe",
    icon: Coffee,
    imageSrc:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    imageAlt: "Coffee shop interior",
    topServices: [
      "QR ordering and digital menus",
      "Point of sale and billing",
      "Owner dashboard and alerts",
    ],
  },
  {
    id: "cloud-kitchen",
    name: "Cloud Kitchen",
    icon: ChefHat,
    imageSrc:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80",
    imageAlt: "Commercial food production line in a delivery kitchen",
    topServices: [
      "Online ordering and aggregators",
      "Kitchen display (KDS)",
      "Inventory and recipes",
    ],
  },
  {
    id: "qsr",
    name: "QSR",
    icon: Sandwich,
    imageSrc:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80",
    imageAlt: "Quick service fast food on a counter",
    topServices: [
      "Point of sale and billing",
      "Online ordering and aggregators",
      "Kitchen display (KDS)",
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant",
    icon: Utensils,
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    imageAlt: "Busy restaurant dining room",
    topServices: [
      "Point of sale and billing",
      "QR ordering and digital menus",
      "Kitchen display (KDS)",
    ],
  },
  {
    id: "pizzeria",
    name: "Pizzeria",
    icon: Pizza,
    imageSrc:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    imageAlt: "Fresh pizza",
    topServices: [
      "Point of sale and billing",
      "Online ordering and aggregators",
      "Kitchen display (KDS)",
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    icon: Cake,
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    imageAlt: "Bakery bread display",
    topServices: [
      "Point of sale and billing",
      "QR ordering and digital menus",
      "Inventory and recipes",
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    icon: IceCream,
    imageSrc:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    imageAlt: "Dessert and sweets",
    topServices: [
      "Point of sale and billing",
      "QR ordering and digital menus",
      "Payments and settlements",
    ],
  },
  {
    id: "bar",
    name: "Bar",
    icon: Wine,
    imageSrc:
      "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=1200&q=80",
    imageAlt: "Bar with cocktails and bottles",
    topServices: [
      "Point of sale and billing",
      "Captain and floor apps",
      "Reports and outlet analytics",
    ],
  },
  {
    id: "large-chain",
    name: "Large Chain",
    icon: Building,
    imageSrc:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    imageAlt: "Food court with multiple restaurant brands and outlets",
    topServices: [
      "Owner dashboard and alerts",
      "Reports and outlet analytics",
      "Inventory and recipes",
    ],
  },
]

export function Solutions() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = businessTypes.find((b) => b.id === selectedId)
  const topSet = selected
    ? new Set<string>(selected.topServices as readonly string[])
    : null

  return (
    <section
      id="solutions"
      className="scroll-mt-24 pt-28 sm:pt-32 pb-24 sm:pb-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <div className="max-w-[min(100%,90rem)] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Digirestro is Made For Your Business
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Compare every business model with the full platform. The checkmarks
            show the three capabilities teams in that segment rely on most.
          </p>
        </div>

        <div className="grid gap-8 min-[1100px]:grid-cols-2 min-[1100px]:gap-10 min-[1100px]:items-stretch min-[1100px]:min-h-[min(88vh,58rem)]">
          {/* Left pane — business models */}
          <div
            className={cn(
              "relative flex min-h-0 min-[1100px]:min-h-full flex-col overflow-hidden rounded-3xl border-2 shadow-xl transition-shadow duration-300",
              selectedId === null
                ? "border-primary/55 shadow-lg shadow-primary/15 ring-2 ring-primary/25"
                : "border-border",
            )}
          >
            {selectedId === null && (
              <span
                className="pointer-events-none absolute right-5 top-5 z-[2] flex h-3 w-3"
                aria-hidden
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-black dark:via-slate-950 dark:to-black" />
            <div className="relative z-[1] border-b border-white/10 px-6 sm:px-7 py-6">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Business types
                  </h3>
                  <p className="text-sm text-slate-300 mt-0.5">
                    {selectedId === null
                      ? "Choose one to preview recommended services"
                      : `Selected: ${selected?.name}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-[1] grid min-h-0 min-[1100px]:min-h-[min(82vh,52rem)] flex-1 grid-cols-2 gap-4 overflow-y-auto p-5 sm:p-6 sm:grid-cols-2">
              {businessTypes.map((type) => {
                const isActive = type.id === selectedId
                return (
                  <button
                    key={type.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedId(type.id)}
                    className={cn(
                      "group relative flex flex-col overflow-hidden rounded-2xl text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
                      isActive
                        ? "ring-2 ring-primary shadow-lg shadow-primary/25 scale-[1.02] z-[2]"
                        : "ring-1 ring-white/10 hover:ring-primary/40 hover:scale-[1.01]",
                    )}
                  >
                    <div className="relative aspect-[4/3] min-h-[9.5rem] w-full overflow-hidden bg-slate-800 sm:min-h-[10.5rem]">
                      <Image
                        src={type.imageSrc}
                        alt={type.imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 1100px) 50vw, 30vw"
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity",
                          isActive ? "opacity-95" : "opacity-80 group-hover:opacity-90",
                        )}
                      />
                      <div className="absolute bottom-0 left-0 right-0 flex items-end gap-2 p-3">
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm transition-colors",
                            isActive && "bg-primary text-primary-foreground",
                          )}
                        >
                          <type.icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span
                          className={cn(
                            "font-semibold text-white text-sm leading-tight drop-shadow-md",
                            isActive && "text-primary-foreground",
                          )}
                        >
                          {type.name}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right pane — all services */}
          <div
            className={cn(
              "relative flex min-h-0 min-[1100px]:min-h-full flex-col overflow-hidden rounded-3xl border-2 bg-card shadow-xl transition-all duration-300",
              selectedId
                ? "border-primary/35 shadow-primary/5"
                : "border-dashed border-muted-foreground/30",
            )}
          >
            <div className="border-b border-border bg-muted/40 px-6 sm:px-7 py-6 backdrop-blur-sm">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                Platform services
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {selected ? (
                  <>
                    Top picks for{" "}
                    <span className="font-semibold text-foreground">
                      {selected.name}
                    </span>{" "}
                    are marked below.
                  </>
                ) : (
                  "Select a business type to see which three capabilities are highlighted for that model."
                )}
              </p>
            </div>

            <ul className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-5 sm:p-6 sm:pr-4">
              {platformServices.map((line) => {
                const isTop = topSet?.has(line) ?? false
                return (
                  <li
                    key={line}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border px-4 py-4 sm:px-5 text-sm transition-all duration-200",
                      isTop
                        ? "border-primary/50 bg-primary/8 text-foreground shadow-sm dark:bg-primary/15"
                        : "border-border bg-background/80 text-muted-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                        isTop
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground/25 bg-muted/50",
                      )}
                      aria-hidden
                    >
                      {isTop ? (
                        <Check className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/35" />
                      )}
                    </span>
                    <span
                      className={cn(
                        "font-medium leading-snug",
                        isTop && "text-foreground",
                      )}
                    >
                      {line}
                    </span>
                    {isTop && (
                      <span className="ml-auto hidden shrink-0 rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary sm:inline">
                        Top 3
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
