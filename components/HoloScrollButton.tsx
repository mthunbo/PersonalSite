import React from "react"
import CircuitPattern from "./CircuitPattern"

type HoloScrollButtonProps = {
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function HoloScrollButton({ title, onClick }: HoloScrollButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                group relative w-full max-w-sm h-16 
                bg-primary border-2 border-highlight rounded-lg 
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                animate-pulse-glow
                hover:-translate-y-1 hover:animate-none hover:shadow-hologram"
        >
            <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-6 h-[130%] bg-wood rounded-full border-2 border-wood-highlight z-10" />
            <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-6 h-[130%] bg-wood rounded-full border-2 border-wood-highlight z-10" />
      
            <CircuitPattern
                className="
                    absolute inset-0 w-full h-full p-2
                    text-highlight  // This now controls the circuit's color
                    opacity-20 
                    transition-opacity duration-300
                    group-hover:opacity-50"
            />
            <h3 className="relative truncate font-heading text-lg text-highlight">
                {title}
            </h3>
        </button>
    )
}