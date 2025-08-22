import { SectionHeader } from "./SectionHeader";

export default function Journey() {
    return (
        <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface">
        <SectionHeader 
            title="Journey"
            subtitle=""
            align="center"
            size="lg"
            className="text-gold-header"
          /> 
        </section>
    )
    
}