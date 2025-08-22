import { SectionHeader } from "./SectionHeader";

export default function About(){
    
    return (
        <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background">
            <SectionHeader
            title="About"
            subtitle=""
            align="center"
            size="lg"
            className="text-gold-header"
            />
        </section>
    )
}