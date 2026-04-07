import Link from "next/link"
import Image from "next/image"

type BrandLogoProps = {
  /** Dark footer: boost contrast on near-black backgrounds */
  variant?: "light" | "dark"
  className?: string
}

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
    >
      <Image
        src="/images/digirestro-logo.png"
        alt="Digirestro"
        width={247}
        height={45}
        priority
        className={
          variant === "dark"
            ? "h-7 w-auto rounded-md bg-white px-2 py-1.5 sm:h-8"
            : "h-7 w-auto sm:h-8"
        }
      />
    </Link>
  )
}
