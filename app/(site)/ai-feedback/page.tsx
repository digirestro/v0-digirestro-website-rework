import { ProductPageLayout } from "@/components/product-page-layout"

export default function AiFeedbackPage() {
  return (
    <ProductPageLayout
      variant="review"
      showAdminControl={false}
      eyebrow="Review Lens"
      title="Review Lens — AI-powered feedback and reputation"
      lead="Manage, analyze, and respond to reviews from one place—with AI that turns feedback into action."
      heroImage={{
        src: "/images/suite/review_lens.png",
        alt: "Review Lens dashboard for sentiment, replies, and reputation monitoring",
        priority: true,
      }}
      introParagraphs={[
        "Guest sentiment shows up across Google, social channels, and your website. Review Lens brings it together so you see patterns early, reply faster, and protect the reputation you have worked to build.",
        "Use AI to classify tone, suggest responses, and focus the team on what will actually move ratings and repeat visits—not just on clearing an inbox.",
      ]}
      keyFeatureCards={[
        {
          title: "AI-driven sentiment analysis",
          description:
            "Automatically classify reviews and surface trends in language and tone—so you spot problems before they become a narrative.",
        },
        {
          title: "Multi-platform integration",
          description:
            "Aggregate feedback from major review sources into one dashboard for a single operational view.",
        },
        {
          title: "Automated customized replies",
          description:
            "Generate personalized response drafts so managers spend less time wording and more time fixing root causes.",
        },
        {
          title: "Negative review management",
          description:
            "Workflows and tooling focused on resolving issues early and keeping your public presence accurate and fair.",
        },
        {
          title: "Reputation score and health",
          description:
            "Track how your brand is perceived over time with scores and signals that map to guest satisfaction.",
        },
        {
          title: "Interactive review widget",
          description:
            "Collect reviews on your own site to grow first-party feedback alongside third-party platforms.",
        },
      ]}
    />
  )
}
