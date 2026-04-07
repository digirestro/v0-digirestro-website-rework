import Image from "next/image"

export default function BillingSoftwarePage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/25 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Billing POS
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Billing, tables, and checkout in one flow—built for busy service.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p>
              We understand changing existing hardwares and making a hefty investment on buying new hardware can be expensive, but we got your back and our POS can be worked on any hardware and save cost for you.
            </p>
            <p>
              Also, considering the most vital factor in your business which is billing, our POS is designed in a way that it can function seamlessly, even when your internet is down.
            </p>
            <p>
              We store All data locally and syncs to the cloud once your connection is up and running.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li><strong>Hardware & Internet Independent:</strong> Works on any hardware and functions offline</li>
              <li><strong>Easy to navigate billing Screen:</strong> Self-explanatory and simple to learn</li>
              <li><strong>Customize your billing flow:</strong> Keep only required features for operations</li>
              <li><strong>Sectionwise Pricing & KOT Printings:</strong> Different prices for sections and automatic KOT routing</li>
              <li><strong>Integration for all 3rd party order aggregators:</strong> Manage online orders on POS</li>
              <li><strong>Multi User & Multi Terminal Billing:</strong> Run multiple terminals with offline sync</li>
              <li><strong>Customisable reports formats:</strong> Customize reports with required data</li>
            </ul>

            <h2>Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <p>"Would definitely recommend it as it is very easy. The staff is very calm and the features are understandable. The support team easily handles and solves minor issues. Discount and Customer Details features are good."</p>
                <p className="mt-2 font-semibold">- Manish Patel, LEO'S CAFE</p>
              </div>
              <div className="rounded-lg border p-4">
                <p>"It is very user-friendly, and there is no delay in support. I'll use the loyalty program soon. Also, the order taking & billing process is effortless"</p>
                <p className="mt-2 font-semibold">- Aman Singh, Renaissance Grand Restaurant</p>
              </div>
              <div className="rounded-lg border p-4">
                <p>"It is very user-friendly, and there is no delay in support. I'll use the loyalty program soon. Also, the order taking & billing process is effortless"</p>
                <p className="mt-2 font-semibold">- Mr. Neeraj, LAAPASO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}