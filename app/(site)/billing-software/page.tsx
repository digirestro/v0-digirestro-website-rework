import { ProductPageLayout } from "@/components/product-page-layout"

export default function BillingSoftwarePage() {
  return (
    <ProductPageLayout
      variant="article"
      showAdminControl={false}
      eyebrow="POS and billing"
      title="Billing software — the one-stop platform you need to thrive"
      lead="Hardware-flexible, offline-capable billing built for real restaurant floors."
      heroImage={{
        src: "/images/suite/billing-pos.png",
        alt: "DigiRestro POS billing screen with items, taxes, and checkout",
        priority: true,
      }}
      introParagraphs={[
        "Changing hardware overnight is expensive. DigiRestro POS runs on the devices you already own so you can invest in guest experience—not another mandatory terminal refresh.",
        "Billing is the heartbeat of your business: our POS keeps ringing sales even when the internet drops. Data is stored locally and syncs to the cloud when connectivity returns.",
      ]}
      articleSections={[
        {
          heading: "Hardware and internet independent",
          paragraphs: [
            "We understand that replacing hardware and buying new kit can be costly. DigiRestro POS works across a wide range of hardware so you can save capital while still getting a fast, reliable billing experience.",
            "When connectivity is unreliable, billing should not stop. The POS is designed to keep serving checks offline, then sync when your line is back—without you managing duplicate entries by hand.",
          ],
        },
        {
          heading: "Easy to navigate billing screen",
          paragraphs: [
            "The billing screen is engineered for everyday operators: self-explanatory flows, fewer taps for common tasks, and faster training for new staff.",
            "That means quicker adoption on the floor, less supervisor time on corrections, and a smoother experience during rush hours.",
          ],
        },
        {
          heading: "Customize your billing flow",
          paragraphs: [
            "Keep only the buttons and flows your operation needs. Hide clutter so billers stay focused on speed—whether you run QSR, dine-in, or a mixed format.",
          ],
        },
        {
          heading: "Section-wise pricing and KOT routing",
          paragraphs: [
            "Set different prices for the same item across sections or formats where your business needs it.",
            "Operate multiple kitchens or cuisines without manually splitting tickets—KOTs route to the right station so prep stays organized.",
          ],
        },
        {
          heading: "Third-party order aggregators",
          paragraphs: [
            "Stop jumping between dashboards for Swiggy, Zomato, and other channels. Accept aggregator orders on the POS and align menu and inventory from one place so online and in-store stay consistent.",
          ],
        },
        {
          heading: "Multi-user and multi-terminal billing",
          paragraphs: [
            "Run several billing terminals—even across floors—with one license mindset: terminals stay in sync offline and bill numbers follow your sequence rules so finance stays clean at close.",
          ],
        },
        {
          heading: "Customisable report formats",
          paragraphs: [
            "Reports should answer your questions, not ours. Configure the fields you care about and schedule summaries to email after service so owners see the day in the shape that matches how they run the business.",
          ],
        },
      ]}
      uspBullets={[
        "Future orders for cake and bakery shops.",
        "Customizable bill formats.",
        "Personalized e-bills for your customers.",
        "Your customized UPI QR code on bill print.",
        "Weight combos for sweet shops.",
      ]}
    />
  )
}
