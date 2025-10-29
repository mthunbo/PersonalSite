'use client';
import Typewriter from './Typewriter';
import { SectionLayout } from './SectionLayout';
import { useEffect, useState } from 'react';

export default function Hero() {
    const bootSequenceText = [
        '',
        '> AUTHENTICATING SPQR_SYSTEM...',
        '> LOADING LEGATUS_KERNEL...',
        '> INITIALIZING CENTURION_MODULES...',
        '> SYSTEMA THUNBO: OPERATIONAL.',
    ];
    const [showBootSequence, setShowBootSequence] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBootSequence(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SectionLayout
            id="Hero"
            title="Mark Thunbo"
            subtitle="Developer, Dreamer, and Professional Overthinker"
            size="xl"
            align="center"
            className="min-h-screen"
        >
            {showBootSequence && (
                <pre className="font-body text-lg sm:text-3xl text-highlight mt-8 whitespace-pre-wrap text-left">
                    <Typewriter text={bootSequenceText} speed={50} />
                </pre>
            )}
        </SectionLayout>
    );
}
