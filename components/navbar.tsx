"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinkClass =
  "text-[15px] font-medium text-[#4a4a4a] transition-colors hover:text-[#1a1a1a]"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/90 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          <Link href="/" className="flex flex-shrink-0 flex-col gap-0.5">
            <Image
              src="/images/digirestro-logo.webp"
              alt="Digirestro"
              width={156}
              height={32}
              className="h-7 w-auto sm:h-8"
              priority
            />
            <span className="hidden pl-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#888] sm:block sm:text-[11px]">
              Smart restaurant POS
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            <Link href="/features" className={navLinkClass}>
              Features
            </Link>
            <Link href="/solutions" className={navLinkClass}>
              Solutions
            </Link>
            <Link href="/testimonials" className={navLinkClass}>
              Testimonials
            </Link>
            <Link href="/become-a-reseller" className={navLinkClass}>
              Become a Reseller
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          <button
            className="rounded-md p-2 text-[#4a4a4a] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-neutral-100 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                href="/features"
                className={`${navLinkClass} py-1`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/solutions"
                className={`${navLinkClass} py-1`}
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/testimonials"
                className={`${navLinkClass} py-1`}
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/become-a-reseller"
                className={`${navLinkClass} py-1`}
                onClick={() => setIsOpen(false)}
              >
                Become a Reseller
              </Link>
              <Link
                href="/contact"
                className={`${navLinkClass} py-1`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
