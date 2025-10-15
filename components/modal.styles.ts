import { tv } from "tailwind-variants";

export const modal = tv({
    slots: {
        backdrop: "fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center z-[100]",
        content: "border-2 p-8 rounded-lg max-w-lg w-full m-4",
    },
    variants: {
        style: {
            default: {
                backdrop: "",
                content: "bg-primary-dark border-highlight shadow-xl",
            },
            hologram: {
                backdrop: "bg-black/80",
                content: "bg-primary-dark/80 border-highlight shadow-hologram",
            },
        },
    },
    defaultVariants: {
        style: "default",
    },
})