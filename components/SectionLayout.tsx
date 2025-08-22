import { SectionHeader } from "./SectionHeader"

type SectionLayoutProps = {
    title: string
    subtitle?: string
    size?: "sm" | "md" | "lg"
    align?: "left" | "center" | "right"
    className?: string
    fromColorClass?: string
    toColorClass?: string
    children?: React.ReactNode
  }
  
  export function SectionLayout({
    title,
    subtitle = "",
    size = "lg",
    align = "center",
    className = "text-gold-header",
    fromColorClass = "from-background",
    toColorClass = "to-surface",
    children,
  }: SectionLayoutProps) {
    return (
      <section
      className={`min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b ${fromColorClass} ${toColorClass}`}
      >
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align={align}
          size={size}
          className={className}
        />
        {children}
      </section>
    )
  }
  