import Image from "next/image"

export default function RiderAppPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/25 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Rider App
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Routes, handoffs, and delivery status so riders stay in sync with the kitchen.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p>
              As a business owner, we understand, it's not possible to be present at the restaurant every time. With Digirestro owner app, track the performance of your restaurant on fingertips. This allows for better decision-making and the ability to quickly address any issues that arise.
            </p>
            <p>
              Owner app can also help restaurant owners to overcome the most critical issues of understocking & overstocking. The app can track inventory levels in real-time, alerting owners when stock is low and helping to prevent shortages or overstocking. This leads to better inventory control and cost management.
            </p>
            <p>
              Owners can easily update menus, add or remove items, and adjust pricing directly from the app and even more multiple outlets in one go. This ensures that customers always have access to the most current offerings.
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