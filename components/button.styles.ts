import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-highlight text-sm py-1 px-4 rounded-full border-2 border-highlight bg-accent hover:text-yellow-300 hover:animate-pulse hover:scale-110 font-body",
  variants: {
    variant: {
      project: "text-highlight bg-accent",
      primary: "bg-highlight text-white",
      secondary: "bg-background text-highlight",
    },
    size: {
      sm: "text-xs px-3 py-1",
      md: "text-sm px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
