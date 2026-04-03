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

const channelPartners = ["Zomato", "Swiggy", "Aggregator orders", "Accounting integrations"]

export function Clients() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-muted/20 via-transparent to-transparent border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold text-foreground text-balance">
            Trusted by over 1000+ restaurant businesses
          </h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Venues across India and abroad run on DigiRestro—from neighbourhood favourites to clubs and chains.
          </p>
        </div>

        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
          Trusted partners &amp; integrations
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {channelPartners.map((label) => (
            <span
              key={label}
              className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Restaurants &amp; brands
        </p>
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
