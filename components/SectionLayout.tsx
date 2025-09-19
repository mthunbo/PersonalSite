import { SectionHeader } from "./SectionHeader"

type SectionLayoutProps = {
    id?: string
    title: string
    subtitle?: string
    size?: "sm" | "md" | "lg" | "xl"
    align?: "left" | "center" | "right"
    className?: string
    fromColorClass?: string
    toColorClass?: string
    minHeight?: string
    children?: React.ReactNode
  }
  
  export function SectionLayout({
    id,
    title,
    subtitle = "",
    size = "lg",
    align = "center",
    className = "text-gold-header",
    fromColorClass = "from-background",
    toColorClass = "to-surface",
    minHeight,
    children,
  }: SectionLayoutProps) {
    return (
      <section
      id={id} 
      className={`min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b ${fromColorClass} ${toColorClass}`}
      style={minHeight ? { minHeight } : undefined}
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
  