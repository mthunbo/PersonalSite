type SideButtonProps = {
    position: "left" | "right";
    icon: React.ReactNode;
    label: string;
};

export function SideButton({ position, icon, label} : SideButtonProps){
    return (
        <div
        className={`fixed top-4 sm:top-12 ${
            position === "left" ? "left-4 sm:left-12" : "right-4 sm:right-12"
        }`}
        >
            <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                <button
                className="
                    w-full h-full rounded-full 
                    bg-gradient-to-br from-accent to-accent-dark 
                    text-highlight flex items-center justify-center 
                    border-2 border-highlight shadow-2xl
                    hover:scale-110 transition-transform"
                aria-label={label}
                >
                    {icon}
                </button>

                {/* Banner Animation */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-highlight rounded-full animate-bounce">
                </div>
            </div>
        </div>
    )
}