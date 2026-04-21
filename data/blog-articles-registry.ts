import type { BlogArticleData } from "@/lib/blog-article-types"
import { articleRider } from "@/data/articles/01-rider"
import { articleKds } from "@/data/articles/02-kds"
import { articleMobileApps } from "@/data/articles/03-mobile-apps"
import { articleCloudPosIndia } from "@/data/articles/04-cloud-pos-india"
import { articleCommonProblems } from "@/data/articles/05-common-problems"
import { articleFbPosBenefits } from "@/data/articles/06-fb-pos-benefits"
import { articleHardwarePos } from "@/data/articles/07-hardware-pos"
import { articleRestaurantErp } from "@/data/articles/08-restaurant-erp"
import { articleAccountingSoftware } from "@/data/articles/09-accounting-software"
import { articleKdsSevenBenefits } from "@/data/articles/10-kds-seven-benefits"
import { articleCloudEpos } from "@/data/articles/11-cloud-epos"
import { articleQrOrdering } from "@/data/articles/12-qr-ordering"

const list: BlogArticleData[] = [
  articleRider,
  articleKds,
  articleMobileApps,
  articleCloudPosIndia,
  articleCommonProblems,
  articleFbPosBenefits,
  articleHardwarePos,
  articleRestaurantErp,
  articleAccountingSoftware,
  articleKdsSevenBenefits,
  articleCloudEpos,
  articleQrOrdering,
]

export const blogArticlesBySlug: Record<string, BlogArticleData> = Object.fromEntries(
  list.map((a) => [a.slug, a]),
)

export function getBlogArticle(slug: string): BlogArticleData | undefined {
  return blogArticlesBySlug[slug]
}

export function getAllBlogSlugs(): string[] {
  return list.map((a) => a.slug)
}
