'use client';

import React, { useEffect, useState } from 'react';

type TypewriterProps = {
    text: string[];
    speed: number;
    className?: string;
    hideCursorWhenDone?: boolean;
};

export default function Typewriter({
    text,
    speed = 150,
    className = '',
    hideCursorWhenDone = false,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (lineIndex < text.length) {
            const currentLine = text[lineIndex];

            // State 1: Currently typing characters within a line
            if (currentIndex < currentLine.length) {
                const timeoutId = setTimeout(() => {
                    setDisplayedText((prev) => prev + currentLine[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }, speed);
                return () => clearTimeout(timeoutId);
            }
            // State 2: End of line reached, wait before starting the next line
            else {
                const timeoutId = setTimeout(() => {
                    setLineIndex((prev) => prev + 1);
                    setCurrentIndex(0);
                    setDisplayedText((prev) => prev + '\n');
                }, 500);
                setIsTyping(false);
                return () => clearTimeout(timeoutId);
            }
        }
    }, [currentIndex, lineIndex, text, speed]);

    return (
        <span className={className}>
            {displayedText}
            {(isTyping || !hideCursorWhenDone) && <span className="blinking-cursor">|</span>}
        </span>
    );
}
