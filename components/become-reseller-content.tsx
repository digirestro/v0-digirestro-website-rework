import Link from "next/link"

const benefits = [
  "Access to our full range of products.",
  "Competitive pricing and attractive profit margins.",
  "Marketing and promotional materials to help you promote our products.",
  "Dedicated support from our team of experts to help you every step of the way.",
  "Regular updates on new products, promotions, and sales opportunities.",
]

const btnPrimary =
  "inline-flex min-w-[200px] items-center justify-center rounded-sm bg-[#2ea3f2] px-8 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#1e8bc4] sm:min-w-[220px]"
const btnOutline =
  "inline-flex min-w-[200px] items-center justify-center rounded-sm border-2 border-[#2ea3f2] bg-transparent px-8 py-3 text-center text-base font-semibold text-[#2ea3f2] transition-colors hover:bg-[#f7fbfe] sm:min-w-[220px]"

export function BecomeResellerContent() {
  return (
    <>
      <section className="border-b border-[#e2e2e2] bg-white px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-[1080px] text-center">
          <h1 className="text-[#333] text-balance text-[26px] font-bold leading-[1.3] sm:text-4xl lg:text-[42px] lg:leading-[1.25]">
            Let us help you to grow your business with DigiRestro&apos;s unique product offerings.
          </h1>
          <p className="mt-6 text-lg font-semibold text-[#4e4e4e] sm:text-xl">
            Become a DigiRestro Reseller Partner Now!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href="#contact" className={btnPrimary}>
              Get Started
            </Link>
            <Link href="#contact" className={btnOutline}>
              Request A Callback
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[#333] text-2xl font-bold sm:text-[28px] sm:leading-snug">
            Who can become a DigiRestro Reseller?
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-[#666] sm:text-lg">
            ANYBODY who has connections in the F&amp;B industry and is passionate about sales can become a DigiRestro reseller. It&apos;s perfectly fine if you are non technical and haven&apos;t sold any technology product before. We even have a restaurant&apos;s chefs and manager who trusts our products and works as a partner for us part time.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[#333] text-2xl font-bold sm:text-[28px] sm:leading-snug">
            How can I become a DigiRestro Reseller?
          </h2>
          <div className="mt-5 space-y-5 text-base leading-[1.8] text-[#666] sm:text-lg">
            <p>
              If you are already on this page, you have already completed half a milestone. It&apos;s pretty simple, just fill up the Reseller form below and expect a callback from our team within 24 hours.
            </p>
            <p>
              Our team will then explain to you DigiRestro products offerings and provide the detailed product demo.
            </p>
            <p>
              Once the product demo is done and you are confident, our team will provide you with all the marketing materials &amp; videos which will help you to close the deals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[#333] text-2xl font-bold sm:text-[28px] sm:leading-snug">
            Who will manage the product onboarding and support?
          </h2>
          <p className="mt-5 text-lg font-semibold text-[#333] sm:text-xl">It&apos;s us!!!</p>
          <p className="mt-4 text-base leading-[1.8] text-[#666] sm:text-lg">
            We want our reseller partner to focus completely on building relationships with the merchants and do sales. Rest everything, right from catalogs onboarding to tech support, we will ensure to get it done.
          </p>
        </div>
      </section>

      <section className="border-t border-[#e2e2e2] bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[#333] text-2xl font-bold sm:text-[28px] sm:leading-snug">
            Benefits of DigiRestro Reseller Program-
          </h2>
          <ul className="mt-8 list-none space-y-4 pl-0">
            {benefits.map((line) => (
              <li
                key={line}
                className="relative pl-8 text-base leading-[1.8] text-[#666] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2ea3f2] sm:text-lg"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
