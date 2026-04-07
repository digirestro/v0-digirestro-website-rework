import { Check } from "lucide-react"
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
} from "lucide-react"

const businessTypes = [
  { icon: Building2, name: "Hotel" },
  { icon: Coffee, name: "Cafe" },
  { icon: ChefHat, name: "Cloud Kitchen" },
  { icon: Utensils, name: "QSR" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Pizza, name: "Pizzeria" },
  { icon: Cake, name: "Bakery" },
  { icon: IceCream, name: "Dessert" },
  { icon: Wine, name: "Bar" },
  { icon: Building, name: "Large Chain" },
]

const platformServices = [
  "Point of sale & billing",
  "QR ordering & digital menus",
  "Online ordering & aggregators",
  "Kitchen display (KDS)",
  "Captain & floor apps",
  "Inventory & recipes",
  "Payments & settlements",
  "Reports & outlet analytics",
  "Owner dashboard & alerts",
]

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Digirestro is Made For Your Business
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The best restaurant management app tailored for every type of food business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {businessTypes.map((type) => (
            <div
              key={type.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-muted/40 transition-all cursor-pointer group"
            >
              <type.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
              <span className="text-sm font-medium text-foreground">{type.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-muted/30 p-8 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground text-balance">
              One platform from counter to kitchen
            </h3>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Run billing, online orders, and back-office workflows from a single Digirestro experience—built for how real service floors operate.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformServices.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl border border-border bg-muted/20">
            <div className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">300+</div>
            <p className="text-muted-foreground mt-2">Restaurant teams</p>
          </div>
          <div className="text-center p-8 rounded-2xl border border-border bg-muted/20">
            <div className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">24/7</div>
            <p className="text-muted-foreground mt-2">Live support</p>
          </div>
          <div className="text-center p-8 rounded-2xl border border-border bg-muted/20">
            <div className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">10+</div>
            <p className="text-muted-foreground mt-2">Countries served</p>
          </div>
        </div>
      </div>
    </section>
  )
}
