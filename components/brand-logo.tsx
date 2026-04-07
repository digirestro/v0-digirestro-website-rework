import Link from "next/link"

const red = "#d92a2a"

type BrandLogoProps = {
  /** Light background (header) */
  variant?: "light" | "dark"
  className?: string
}

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const restroClass =
    variant === "light" ? "text-[#1a1a1a]" : "text-neutral-300"

  return (
    <Link href="/" className={`inline-flex items-baseline gap-0 font-bold tracking-tight ${className}`}>
      <span style={{ color: red }} className="text-[1.15em] leading-none">
        Digi
      </span>
      <span className={`text-[1.15em] leading-none ${restroClass}`}>restro</span>
    </Link>
  )
}
