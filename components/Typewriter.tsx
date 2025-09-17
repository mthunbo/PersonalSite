"use client"

import React, { useEffect, useState } from "react"


type TypewriterProps = {
    text: string
    speed: number
    className?: string
}

export default function Typewriter({ 
    text,
    speed = 150,
    className = ""
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, speed);

            return () => clearTimeout(timeoutId)
        }
    }, [currentIndex, text, speed])

    return (
        <span className={className}>
            {displayedText}
            <span className="blinking-cursor">|</span>
        </span>
    )
}