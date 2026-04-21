import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticleView } from "@/components/blog-article-view"
import { getAllBlogSlugs, getBlogArticle } from "@/data/blog-articles-registry"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticle(slug)
  if (!article) return { title: "Article | Digirestro" }
  return {
    title: `${article.title} | Digirestro`,
    description: article.metaDescription,
    alternates: { canonical: `/blogs/${article.slug}` },
  }
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params
  const article = getBlogArticle(slug)
  if (!article) notFound()
  return <BlogArticleView article={article} />
}
