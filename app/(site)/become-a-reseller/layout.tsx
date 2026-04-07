import { Caveat } from "next/font/google"

const resellerHeading = Caveat({
  subsets: ["latin"],
  variable: "--font-reseller-heading",
  weight: ["600", "700"],
})

export default function BecomeResellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={`${resellerHeading.variable} bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  )
}
