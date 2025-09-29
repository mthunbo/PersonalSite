import React from "react";

type SkillIconProps = {
    name: string
    icon: React.ReactNode
    level: string
}

export default function SkillIcon({ name, icon, level }: SkillIconProps) {
    return (
        <div className="group flex flex-col items-center gap-2 text-highlight transition-all duration-300 hover:text-highlight hover:scale-110">
            <div className="
                relative 
                transition-all duration-300
                group-hover:drop-shadow-[0_0_8px_theme(colors.primary)]
                group-hover:drop-shadow-[0_0_18px_theme(colors.primary.hover)]"
            >
                {icon}
            </div>
            <span className="font-body text-sm font-semibold text-text">{name}</span>
            <span className="mt-2 text-xs font-orbitron text-highlight/80 border border-highlight/50 rounded-full px-2 py-0.5">
                {level}
            </span>
        </div>
    )
}