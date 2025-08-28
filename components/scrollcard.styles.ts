import { tv } from "tailwind-variants";

// Main scroll container
export const scroll = tv({
  base: "group relative w-full max-w-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1",
});

// The rolled-up scroll
export const scrollHeader = tv({
  base: [
    "flex items-center justify-center",
    "h-16 px-12", // Height and padding for the rolled-up state
    "bg-primary border-2 border-highlight rounded-lg", // Main scroll body color
    "text-highlight text-center",
    "relative", // For positioning the decorative ends
    "shadow-lg",
    // Simulating wooden ends with pseudo-elements
    "before:content-[''] before:absolute before:left-[-2px] before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-[130%] before:bg-[#5C3D2E] before:rounded-full before:border-2 before:border-yellow-900",
    "after:content-[''] after:absolute after:right-[-2px] after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-[130%] after:bg-[#5C3D2E] after:rounded-full after:border-2 after:border-yellow-900",
  ],
});

// The container for the content that unfurls
export const scrollContent = tv({
  base: [
    "absolute top-[80%]", // Position it just below the header
    "left-0 right-0", // Span the full width
    "z-10", // Ensure it appears above other elements in the row below
    "max-h-0 opacity-0", // Hidden by default
    "overflow-hidden", // Crucial for the animation
    "transition-all duration-500 ease-in-out", // Smooth animation
    "group-hover:max-h-[500px] group-hover:opacity-100 group-hover:pt-6", // Reveal on hover
  ],
});

// The actual body/paper of the unfurled scroll
export const scrollBody = tv({
  base: "bg-primary text-highlight border-2 border-highlight border-t-0 rounded-b-lg p-4 shadow-xl",
});

// Styles for the image inside the unfurled scroll
export const scrollImage = tv({
  base: "w-full aspect-video overflow-hidden mb-4 border-2 border-highlight/50 rounded-md",
});

// Description text
export const scrollDescription = tv({
  base: "text-sm text-highlight mb-4 font-body",
});

// Action buttons container
export const scrollActions = tv({
  base: "flex gap-2 mt-auto",
});