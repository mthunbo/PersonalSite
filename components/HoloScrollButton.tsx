import React from "react"
import CircuitPattern from "./CircuitPattern"

type HoloScrollButtonProps = {
    title: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function HoloScrollButton({ title, onClick }: HoloScrollButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                group relative w-full max-w-sm h-16 
                bg-primary
                border-2 border-highlight rounded-lg 
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-hologram"
        >
            <div 
                className="
                    absolute left-[-2px] top-1/2 -translate-y-1/2 w-6 h-[130%] rounded-full z-10
                    bg-wood/50 border-2 border-wood-highlight 
                    shadow-[0_0_10px_theme(colors.wood.highlight)]
                    transition-all duration-300
                    group-hover:shadow-[0_0_20px_theme(colors.highlight)] group-hover:bg-highlight/30"
            />
            <div 
                className="
                    absolute right-[-2px] top-1/2 -translate-y-1/2 w-6 h-[130%] rounded-full z-10
                    bg-wood/50 border-2 border-wood-highlight 
                    shadow-[0_0_10px_theme(colors.wood.highlight)]
                    transition-all duration-300
                    group-hover:shadow-[0_0_20px_theme(colors.highlight)] group-hover:bg-highlight/30"
            />
    
            <CircuitPattern
                className="
                    absolute inset-0 w-full h-full object-fill
                    text-highlight
                    [animation:pulse-low_4s_ease-in-out_infinite]
                    group-hover:[animation:pulse-high_2s_ease-in-out_infinite]"
            />
            <h3 className="relative truncate font-heading text-lg text-highlight">
                {title}
            </h3>
        </button>
    )
}