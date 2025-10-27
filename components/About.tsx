import { SectionLayout } from './SectionLayout';
import Image from 'next/image';

export default function About() {
    return (
        <SectionLayout
            id="About"
            title="About"
            subtitle="A citadel of Thought"
            size="lg"
            align="center"
            fromColorClass="from-surface"
            toColorClass="to-background"
        >
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-center">
                    <div className="relative rounded-full aspect-square w-64 md:w-80 lg:w-96 flex items-center justify-center overflow-hidden border-highlight border-4">
                        <Image src="/ME.jpg" alt="Portrait" className="object-cover" fill />
                    </div>
                    <div className="flex flex-col gap-6 text-lg text-text leading-relaxed font-body">
                        <p>
                            {/*Danish version*/}
                            {/* Min vej ind i kodens verden er en bro mellem to store passioner: oldtidens strukturerede visdom og science fictions grænseløse potentiale. 
                            Jeg betragter softwareudvikling som en moderne form for håndværk 
                            – en måde at smede orden ud af kaos og vække gennemtænkte idéer til live, én linje ad gangen. */}
                            {/*English version*/}
                            My journey into code is a bridge between two passions: the structured
                            wisdom of ancient history and the limitless potential of science
                            fiction. I see development as a modern form of craftsmanship, a way to
                            forge order from chaos and bring thoughtful ideas to life, one line at a
                            time.
                        </p>
                        <p>
                            {/*Danish version*/}
                            {/* Dette dobbelte perspektiv stammer fra mange års figurmaling, hvor succes afhænger af både omhyggelige, pixel-perfekte detaljer og en storslået, strategisk vision. 
                            Mit sind trives i det, jeg kalder 'struktureret kaos'. 
                            Jeg har en naturlig evne til at navigere i kompleksitet, hvilket gør mig i stand til at finde elegante mønstre og bygge robuste, skalerbare systemer, hvor andre måske kun ser en indviklet udfordring. */}
                            {/*English version*/}
                            This dual perspective comes from years spent painting miniatures, where
                            success lies in both meticulous, pixel-perfect details and a grand,
                            strategic vision. "My mind thrives in what I call 'structured chaos.' I
                            have a natural aptitude for navigating complexity, which allows me to
                            find elegant patterns and build robust, scalable systems where others
                            might only see an intricate challenge."
                        </p>
                        <p>
                            {/*Danish version*/}
                            {/* I sidste ende mener jeg, at teknologi skal tjene vores fælles medmenneskelighed. 
                            Mit mål er ikke kun at løse tekniske udfordringer, men at skabe værktøjer, der er intuitive, tilgængelige og bringer os tættere på en mere forenet og empatisk fremtid. 
                            For mig er et problem ikke en forhindring; det er fundamentet for den næste bro, vi bygger sammen. */}
                            {/*English version*/}
                            Ultimately, I believe technology should serve our shared humanity. My
                            goal is not just to solve technical challenges, but to build tools that
                            are intuitive, accessible, and bring us closer to a more united and
                            compassionate future. For me, a problem isn't a blockade; it's the
                            foundation for the next bridge we'll build together.
                        </p>
                        <blockquote className="my-4 text-center font-signature italic text-4xl text-royal-hover">
                            "Forging future technology from the wisdom of the past."
                        </blockquote>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
