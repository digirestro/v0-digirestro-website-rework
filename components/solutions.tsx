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
  Building 
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

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            DigiRestro is Made For Your Business
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The best restaurant management app tailored for every type of food business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {businessTypes.map((type) => (
            <div 
              key={type.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group"
            >
              <type.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
              <span className="text-sm font-medium text-foreground">{type.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-border bg-gradient-to-br from-primary/[0.07] via-card to-muted/40 p-8 sm:p-10 lg:p-12 shadow-lg">
          <div className="order-2 lg:order-1 space-y-4 text-center lg:text-left">
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground text-balance">
              One platform from counter to kitchen
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Run billing, online orders, and back-office workflows from a single DigiRestro experience—built for how real service floors operate.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl border border-border bg-background/80 p-4 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src="/images/solutions-product.png"
                alt="DigiRestro POS on tablet and phone"
                width={768}
                height={768}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-primary/5 rounded-2xl">
            <div className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">1000+</div>
            <p className="text-muted-foreground mt-2">Restaurant Businesses</p>
          </div>
          <div className="text-center p-8 bg-primary/5 rounded-2xl">
            <div className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">24/7</div>
            <p className="text-muted-foreground mt-2">Live Support</p>
          </div>
          <div className="text-center p-8 bg-primary/5 rounded-2xl">
            <div className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">10+</div>
            <p className="text-muted-foreground mt-2">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  )
}
