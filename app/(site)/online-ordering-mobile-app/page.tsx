import Image from "next/image"

export default function OnlineOrderingPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/25 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Online Ordering App
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Your menu and offers in a consumer-ready ordering experience.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p>
              Online ordering mobile app for restaurants.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li><strong>Easy Management:</strong> Manage one product catalogue and sync inventory so it's available for online and in-person selling</li>
              <li><strong>Staff Management:</strong> Create staff login PINs and assign specific rights to secure access</li>
              <li><strong>Sales Analysis:</strong> Check the sales analysis on your mobile/tablet and adapt to growing trends in your business with unified analytics</li>
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