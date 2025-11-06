'use client';
import Typewriter from './Typewriter';
import { SectionLayout } from './SectionLayout';
import { useEffect, useState } from 'react';

export default function Hero() {
    const animatedBootText = [
        '',
        '> INITIALIZING CITADEL_INTERFACE...',
        '> WELCOME!',
        // '> AUTHENTICATING SPQR_SYSTEM...',
        // '> LOADING LEGATUS_KERNEL...',
        // '> INITIALIZING CENTURION_MODULES...',
        // '> SYSTEMA THUNBO: OPERATIONAL.',
    ];
    const staticBootText = [
        'Fueled by coffee and a stubborn belief that it can be done.',
        'Professionally overthinking problems until they become elegant solutions.',
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
            <div className="font-body text-lg sm:text-3xl text-highlight mt-8 whitespace-pre-wrap text-center">
                {staticBootText.join('\n')}
            </div>
            {showBootSequence && (
                <pre className="font-body text-lg sm:text-3xl text-highlight mt-8 whitespace-pre-wrap text-left">
                    <Typewriter text={animatedBootText} speed={50} />
                </pre>
            )}
        </SectionLayout>
    );
}
