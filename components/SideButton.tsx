// type SideButtonProps = {
//     position: "left" | "right";
//     icon: React.ReactNode;
//     label: string;
//     animation?: React.ReactNode;
// };

// export function SideButton({ position, icon, label, animation} : SideButtonProps){
//     return (
//         <div
//         className={`fixed top-4 sm:top-12 ${
//             position === "left" ? "left-4 sm:left-12" : "right-4 sm:right-12"
//         }`}
//         >
//             <div className="relative w-14 h-14 sm:w-20 sm:h-20">
//                 <button
//                 className="
//                     w-full h-full rounded-full 
//                     bg-gradient-to-br from-accent to-accent-dark 
//                     text-highlight flex items-center justify-center 
//                     border-2 border-highlight shadow-2xl
//                     hover:scale-110 transition-transform"
//                 aria-label={label}
//                 >
//                     {icon}
//                 </button>

//                 {/* Banner Animation */}
//                 <div
//                 className="
//                     pointer-events-none 
//                     absolute left-1/2 -translate-x-1/2 
//                     top-full
//                     w-20 sm:w-28 
//                     h-screen sm:h-screen
//                     -z-10 overflow-visible"
//                 >
//                     {animation}
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from "react";

type SideButtonProps = {
    position: "left" | "right";
    icon: React.ReactNode;
    label: string;
    animation?: React.ReactNode;
};

export function SideButton({ position, icon, label, animation} : SideButtonProps){
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
                <div
                className="
                    pointer-events-none 
                    absolute left-1/2 -translate-x-1/2 
                    top-full
                    w-20 sm:w-28 
                    h-screen sm:h-screen
                    -z-10 overflow-visible"
                >
                    {animation}
                </div>
            </div>
        </div>
    )
}