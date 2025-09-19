"use client"
import Typewriter from "./Typewriter";
import { SectionLayout } from "./SectionLayout";
import { useEffect, useState } from "react";

export default function Hero(){
    const taglineText = [
        "Developer, Dreamer, and Professional Overthinker.",
    ];
    const bootSequenceText = [
        "",
        "> AUTHENTICATING SPQR_SYSTEM...",
        "> LOADING LEGATUS_KERNEL...",
        "> INITIALIZING CENTURION_MODULES...",
        "> SYSTEMA THUNBO: OPERATIONAL.",
    ];
    const [showBootSequence, setShowBootSequence] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBootSequence(true)
        }, 4100);
        return () => clearTimeout(timer)
    }, [])

    return(
        <SectionLayout
            id="Hero"
            title="Mark Thunbo" 
            size="xl" 
            align="center" 
            fromColorClass="from-background" 
            toColorClass="to-surface"
        >
            <p className="font-body text-lg sm:text-2xl text-text-muted mt-4 text-center">
                <Typewriter 
                    text={taglineText} 
                    speed={75}
                    hideCursorWhenDone={true}
                />
            </p>
            {showBootSequence && (
                <pre className="font-body text-lg sm:text-3xl text-highlight mt-8 whitespace-pre-wrap text-left">
                    <Typewriter 
                        text={bootSequenceText} 
                        speed={50} 
                    />
                </pre>
            )}
        </SectionLayout>
    )
}