import Image from "next/image"

const clients = [
  { name: "Chaat Di Hatti", location: "Margao, Goa", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/chaatdihatti_8g0FrR_c4.png" },
  { name: "Mashaal", location: "Pattaya", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/Mashaal_mU8gVPu9g.png" },
  { name: "Mast Banarasi Paan", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/mast_banarasi_paan_2bN2SCtSE.png" },
  { name: "Kulhar Chai", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/kulhar_chai_0sMTt2l8E.png" },
  { name: "Urban Theka", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/urban_theka_IqZi9sOPkm.png" },
  { name: "Begum's", location: "Muscat, Oman", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/begums_jGYNMCUYK.png" },
  { name: "Yalla Begum's", location: "Muscat, Oman", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/yalla_begums_AKQVN4lhK.png" },
  { name: "Integrated Group", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/integrated_FbP3FH2xW.png" },
  { name: "Shree Nidhi", location: "Mumbai", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/shreenidhi_2TqLYBtdR.png" },
  { name: "Niyaaz", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/niyaaz_X8vHXH7Uk.png" },
  { name: "Hotel Godavari", location: "Suryapet, Telangana", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/hotel_godavari_9c3P6lCqB.png" },
  { name: "1972 SBL Wood Fired Pizza", location: "Bengaluru", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/1972_SBL_OuOSk4pRJ.png" },
  { name: "OutPost 7", location: "Guwahati, Assam", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/outpost7_Qf7hLaUPZ.png" },
  { name: "Desi Aroma", location: "Baner, Pune", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/desi_aroma_bKs8I5rQf.png" },
  { name: "Leo's Cafe", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/leos_cafe_vDQ7vXALe.png" },
  { name: "Renaissance Grand", location: "", image: "https://ik.imagekit.io/ybpqqauwy5/DigiRestro/renaissance_TaE2qGIXs.png" },
]

export function Clients() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-muted-foreground mb-8 font-medium">
          Trusted by 1000+ restaurants across the globe
        </h3>
        
        <div className="relative">
          <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-background rounded-xl border border-border shadow-sm"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {client.name}
                  </span>
                  {client.location && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {client.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
