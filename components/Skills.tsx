import { SectionHeader } from "./SectionHeader";

export default function Skills() {

    return(
        <section className="h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background">
            <SectionHeader 
            title="Skills"
            subtitle=""
            align="center"
            size="lg"
            className="text-gold-header"
            /> 
        </section>
    )
}