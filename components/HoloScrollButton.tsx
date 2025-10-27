import React from 'react';
import CircuitPattern from './CircuitPattern';

type HoloScrollButtonProps = {
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function HoloScrollButton({ title, onClick }: HoloScrollButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                group relative w-full max-w-sm h-16
                bg-[linear-gradient(to_bottom,_theme(colors.primary.hover),_theme(colors.primary.dark))]
                shadow-inner-highlight
                border-2 border-highlight rounded-lg
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-hologram"
        >
            <div
                className="
                    absolute left-[-2px] top-1/2 -translate-y-1/2 w-6 h-[130%] rounded-full z-10
                    bg-[linear-gradient(to_bottom,_theme(colors.primary.hover),_theme(colors.primary.dark))]
                    border-highlight border-t-2 border-l-2 border-b-2
                    transition-all duration-300
                    group-hover:bg-highlight/30"
            />
            <div
                className="
                    absolute right-[-2px] top-1/2 -translate-y-1/2 w-6 h-[130%] rounded-full z-10
                    bg-[linear-gradient(to_bottom,_theme(colors.primary.hover),_theme(colors.primary.dark))]
                    border-highlight border-t-2 border-r-2 border-b-2
                    transition-all duration-300
                    group-hover:bg-highlight/30"
            />

            <div className="z-20">
                <CircuitPattern
                    className="
                        absolute inset-0 w-full h-full object-fill
                        text-highlight
                        [animation:pulse-low_4s_ease-in-out_infinite]
                        group-hover:[animation:pulse-high_2s_ease-in-out_infinite]"
                />
                <h3 className="relative truncate font-heading text-lg text-highlight">{title}</h3>
            </div>
        </button>
    );
}
