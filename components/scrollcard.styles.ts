import { tv } from "tailwind-variants"

// Main scroll container
export const scroll = tv({
  base: [
    "group relative w-full max-w-sm cursor-pointer",
    "transition-all duration-300 ease-in-out",
    "delay-500",
    "hover:-translate-y-1 hover:z-40",
    "hover:delay-0",
    "hover:drop-shadow-[0_0_8px_theme(colors.highlight)]",
  ],
})

// The rolled-up scroll
export const scrollHeader = tv({
  base: [
    "flex items-center justify-center",
    "h-16 px-12",
    "bg-primary border-2 border-highlight rounded-lg",
    "group-hover:border-b-0 group-hover:rounded-b-none",
    "text-highlight text-center",
    "relative",
    "shadow-lg",
    // Simulating wooden ends with pseudo-elements
    "before:content-[''] before:absolute before:left-[-2px] before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-[130%] before:bg-[#5C3D2E] before:rounded-full before:border-2 before:border-yellow-900",
    "after:content-[''] after:absolute after:right-[-2px] after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-[130%] after:bg-[#5C3D2E] after:rounded-full after:border-2 after:border-yellow-900",
  ],
})

// The container for the content that unfurls
export const scrollContent = tv({
  base: [
    "absolute top-[80%]",
    "left-6 right-6",
    "max-h-0 opacity-0",
    "overflow-hidden",
    "transition-all duration-500 ease-in-out",
    "group-hover:max-h-[500px] group-hover:opacity-100",
  ],
})

// The actual body/paper of the unfurled scroll
export const scrollBody = tv({
  base: "bg-primary text-highlight border-2 border-highlight border-t-0 rounded-b-lg p-4 shadow-xl",
})

// Styles for the image inside the unfurled scroll
export const scrollImage = tv({
  base: "w-full aspect-video overflow-hidden mb-4 border-2 border-highlight/50 rounded-md",
})

// Description text
export const scrollDescription = tv({
  base: "text-sm text-highlight mb-4 font-body",
})

// Action buttons container
export const scrollActions = tv({
  base: "flex gap-2 mt-auto",
})