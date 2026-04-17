import {
  DIGIRESTRO_SUITE_MOBILE_CHECKLIST,
  ProductPageLayout,
} from "@/components/product-page-layout"

export default function DigipayPage() {
  return (
    <ProductPageLayout
      eyebrow="Payments"
      title="DigiPay"
      lead="Card, wallet, and online payments tied to billing, reporting, and accounting—fewer errors and clearer books."
      heroImage={{
        src: "/images/suite/digipay.png",
        alt: "DigiPay payment flow integrated with DigiRestro POS",
        priority: true,
      }}
      introParagraphs={[
        "DigiPay connects checkout to the rest of your stack: tenders land against the right bill, reconciliation is simpler, and finance sees what happened without re-keying.",
        "Support the mix your guests expect—cards, UPI and wallets, and online payments—while keeping staff on one familiar billing screen.",
        "Reporting ties payment activity back to shifts and outlets so you can spot trends and exceptions without exporting spreadsheets first.",
      ]}
      mobileChecklist={[...DIGIRESTRO_SUITE_MOBILE_CHECKLIST]}
    />
  )
}
