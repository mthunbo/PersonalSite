import { SectionHeader } from "./SectionHeader";

export default function Hero(){
    return(
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface">
        <SectionHeader 
          title="Mark Thunbo"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        />      
      </section> 
    )
}