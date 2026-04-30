import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { SocialMediaLinks } from "@/components/social-media-links"

const footerLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blogs", href: "/blogs" },
  { label: "Become a Reseller", href: "/become-a-reseller" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-neutral-100 py-10 px-3 sm:py-14 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 pb-8 border-b border-white/10 sm:gap-10 sm:pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="mb-4">
              <BrandLogo variant="dark" className="text-2xl sm:text-[1.65rem]" />
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              POS and operations software for restaurants that want calmer floors, clearer numbers, and happier guests.
            </p>
            <div className="mt-6">
              <SocialMediaLinks variant="footer" className="gap-4" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Digirestro. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs">
            <a href={`mailto:sales@digirestro.ai`} className="hover:text-neutral-400 transition-colors">
              sales@digirestro.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
