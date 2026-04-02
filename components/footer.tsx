import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#features" },
    { label: "Pricing", href: "#contact" },
    { label: "Demo", href: "#contact" },
  ],
  solutions: [
    { label: "Restaurant", href: "#solutions" },
    { label: "Cafe", href: "#solutions" },
    { label: "Cloud Kitchen", href: "#solutions" },
    { label: "Bar & Pub", href: "#solutions" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Status", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-background/10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/digirestro-logo.png" 
                alt="DigiRestro" 
                width={140} 
                height={40}
                className="brightness-0 invert"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              The perfect AI-powered POS system for modern restaurants.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} DigiRestro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
