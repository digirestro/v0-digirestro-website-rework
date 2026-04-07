export default function BecomeResellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-background text-foreground antialiased">
      {children}
    </div>
  )
}
