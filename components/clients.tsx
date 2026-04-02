const clients = [
  "Chaat Di Hatti - Margao, Goa",
  "Mashaal - The Luxurious Club, Pattaya",
  "Mast Banarasi Paan",
  "Kulhar Chai",
  "Urban Theka",
  "Begum's - Muscat, Oman",
  "Integrated Group",
  "Shree Nidhi - Mumbai",
  "Hotel Godavari - Suryapet, Telangana",
  "1972 SBL Wood Fired Pizza - Bengaluru",
  "OutPost 7 - Guwahati, Assam",
  "Desi Aroma - Baner Pune",
  "Chatpati Rasoi - Raipur, Chhattisgarh",
  "Moon Broch Multicuisine - Ambegaon Pune",
  "Ambrosia Restaurant - Kolkata",
  "Wow China New York Pizza - West Bengal",
  "Hungry Oven - Haridwar, Uttarakhand",
  "Pizza Garage - UP",
  "Kill no kalorie - Baner Pune",
  "Laziz Pizza - Saharanpur, UP",
  "A Paradise Rasoi - Wazidpur, Jaunpur",
  "Durga Cafe - Pune"
]

export function Clients() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-muted-foreground mb-8 font-medium">
          Trusted by restaurants across the globe
        </h3>
        
        <div className="relative">
          <div className="flex animate-marquee gap-8 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
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
