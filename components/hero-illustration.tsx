/** Flat line-art POS / counter scene — red + grey only, no photography */
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 320"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="24" y="40" width="512" height="240" rx="16" className="stroke-border fill-card" strokeWidth="1.5" />
      <rect x="48" y="64" width="200" height="140" rx="8" className="stroke-muted-foreground/35 fill-muted/40" strokeWidth="1.25" />
      <path d="M64 88h168M64 108h120M64 128h148M64 148h96" className="stroke-muted-foreground/50" strokeWidth="2" strokeLinecap="round" />
      <rect x="272" y="64" width="240" height="180" rx="10" className="stroke-primary/80 fill-primary/5" strokeWidth="1.5" />
      <rect x="292" y="84" width="80" height="52" rx="6" className="stroke-primary fill-muted/30" strokeWidth="1.25" />
      <rect x="384" y="84" width="108" height="100" rx="6" className="stroke-muted-foreground/40 fill-background" strokeWidth="1.25" />
      <path d="M400 108h76M400 128h56M400 148h72" className="stroke-muted-foreground/45" strokeWidth="2" strokeLinecap="round" />
      <circle cx="120" cy="216" r="28" className="stroke-primary fill-primary/15" strokeWidth="1.5" />
      <path d="M108 216h24M120 204v24" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
      <rect x="168" y="196" width="88" height="40" rx="6" className="stroke-border fill-muted/50" strokeWidth="1.25" />
      <rect x="320" y="200" width="160" height="36" rx="8" className="stroke-primary fill-primary" strokeWidth="1.25" />
      <path
        d="M340 218h120"
        stroke="oklch(0.99 0 0)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
