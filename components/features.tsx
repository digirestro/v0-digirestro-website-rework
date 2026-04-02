import { 
  Brain, 
  BarChart3, 
  Zap, 
  Puzzle, 
  HeadphonesIcon, 
  Smartphone 
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Enabled Features",
    description: "AI utilizes your historic data and helps you make crucial business decisions with smart insights."
  },
  {
    icon: BarChart3,
    title: "360 Degree Solutions",
    description: "End-to-end technology experience for your restaurant and customers with comprehensive tools."
  },
  {
    icon: Zap,
    title: "User-Friendly Interface",
    description: "Easy to navigate billing screen designed with a layman-centric approach for busy hours."
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description: "Manage online orders directly on POS with Zomato, Swiggy, and accounting system integrations."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Live Support",
    description: "Real humans hearing your complaints and requests. We provide personalized support round the clock."
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Real-time sales tracking and management on the go with our powerful mobile application."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Boost Profits & Grow Your Business
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Transform your growth journey with smart business tools designed for modern restaurants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
