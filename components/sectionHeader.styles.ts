import { tv } from "tailwind-variants";

export const sectionHeader = tv({
  base: "mb-8",
  variants: {
    align: {
      center: "text-center ",
      left: "text-left",
    },
    size: {
      md: "text-3xl md:text-4xl font-bold",
      lg: "text-4xl md:text-5xl font-bold",
    },
    color: {
      default: "text-foreground",
      highlight: "text-highlight",
    },
  },
  defaultVariants: {
    align: "center",
    size: "md",
    color: "highlight",
  },
});

export const sectionSubtitle = tv({
  base: "text-sm text-muted-foreground mt-2",
});
