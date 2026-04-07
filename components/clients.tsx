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

const integrationServices = [
  "Zomato",
  "Swiggy",
  "Aggregator orders",
  "Accounting integrations",
]

export function Clients() {
  return (
    <section className="border-y border-border bg-muted/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mx-auto lg:max-w-2xl">
          <h3 className="text-balance font-[family-name:var(--font-display)] text-xl font-semibold text-foreground sm:text-2xl">
            Trusted by 300+ wonderful restaurant teams
          </h3>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Teams across India and abroad rely on Digirestro—from neighbourhood favourites to busy chains.
          </p>
        </div>

        <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Trusted partners &amp; integrations
        </p>

        <ul className="mx-auto mb-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {integrationServices.map((name) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
              {name}
            </li>
          ))}
        </ul>

        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Restaurants &amp; brands
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {clients.map((client) => (
            <span
              key={client}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
