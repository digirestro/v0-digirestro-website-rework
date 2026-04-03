export default function BecomeResellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="font-[family-name:var(--font-open-sans)] bg-white text-[#333] antialiased">
      {children}
    </div>
  )
}
