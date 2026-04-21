export type BlogPost = {
  title: string
  description: string
  /** Same-site path (e.g. `/blogs/...`) or full URL for external articles */
  href: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Using a rider app to revolutionise food delivery",
    description:
      "How a dedicated rider app speeds up dispatch, cuts confusion on the road, and keeps customers informed from kitchen to doorstep.",
    href: "/blogs/using-a-rider-app-to-revolutionise-food-delivery",
    category: "Delivery",
  },
  {
    title: "Using a kitchen display system (KDS) to simplify restaurant operations",
    description:
      "Why moving from paper KOTs to a digital KDS reduces errors, speeds up the pass, and gives the kitchen one clear source of truth.",
    href: "https://digirestro.ai/using-a-kitchen-display-system-kds-to-simplify-restaurant-operations/",
    category: "Kitchen",
  },
  {
    title: "Mobile apps in restaurant operations to empower your staff",
    description:
      "Put menus, tables, and tasks in your team’s pockets so floor and kitchen staff spend less time running and more time serving.",
    href: "https://digirestro.ai/the-use-of-mobile-apps-in-restaurant-operations-to-empower-your-staff/",
    category: "Staff",
  },
  {
    title: "Streamlining restaurant operations with Digirestro’s cloud POS in India",
    description:
      "A look at how cloud-based POS ties billing, outlets, and back office together so Indian restaurants scale without extra chaos.",
    href: "https://digirestro.ai/streamlining-restaurant-operations-with-digirestro-a-cloud-based-restaurant-pos-application-in-india/",
    category: "Cloud POS",
  },
  {
    title: "5 common restaurant problems and simple ways to solve them",
    description:
      "Practical fixes for everyday pain points from slow service to stock surprises that don’t require a full overhaul overnight.",
    href: "https://digirestro.ai/5-common-restaurant-problems-and-simple-ways-to-solve-them/",
    category: "Operations",
  },
  {
    title: "6 benefits of a food and beverage POS system",
    description:
      "The outcomes operators care about: faster turns, cleaner data, tighter inventory, and happier guests at the till.",
    href: "https://digirestro.ai/6-benefits-of-a-food-and-beverage-pos-system/",
    category: "POS",
  },
  {
    title: "What are the types of hardware for a POS system?",
    description:
      "Terminals, printers, scanners, and tablets explained so you can match hardware to your floor layout and service style.",
    href: "https://digirestro.ai/what-are-the-types-of-hardware-for-pos-system/",
    category: "Hardware",
  },
  {
    title: "What is restaurant ERP?",
    description:
      "How ERP-style thinking connects finance, inventory, and outlets and where POS fits in that bigger picture.",
    href: "https://digirestro.ai/what-is-restaurant-erp/",
    category: "ERP",
  },
  {
    title: "Choose the right restaurant POS software",
    description:
      "A concise checklist for comparing vendors: integrations, offline use, training, and what to trial before you sign.",
    href: "https://digirestro.ai/choose-the-right-restaurant-pos-software/",
    category: "Buyers guide",
  },
  {
    title: "7 critical benefits of restaurant kitchen display systems",
    description:
      "From fewer remakes to better pacing during rush hour—why kitchens adopt KDS and what to measure after go-live.",
    href: "https://digirestro.ai/7-critical-benefits-of-restaurant-kitchen-display-systems/",
    category: "Kitchen",
  },
  {
    title: "What is a cloud-based EPOS system?",
    description:
      "Cloud EPOS in plain language: updates, backups, multi-site visibility, and what “always on” really means for your venue.",
    href: "https://digirestro.ai/what-is-cloud-based-epos-system/",
    category: "Cloud",
  },
  {
    title: "Contactless dining and convenience with QR code ordering",
    description:
      "How QR menus and table ordering reduce wait time, support safer service, and pair neatly with your existing POS flow.",
    href: "https://digirestro.ai/contactless-dining-and-convenience-with-qr-code-ordering/",
    category: "QR and guest",
  },
]

export function isInternalBlogHref(href: string): boolean {
  return href.startsWith("/")
}
