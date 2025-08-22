import { SectionHeader } from "./SectionHeader";

export default function CaeserInGaul() {
    return (
      <section className="h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background text-highlight"
      style={{ height: 'calc(100vh - 6rem)' }}
      >
      <SectionHeader 
          title="Ceaser in Gaul"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        /> 
      </section>
    )
}