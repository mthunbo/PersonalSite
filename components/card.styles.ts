import { tv } from "tailwind-variants";

export const card = tv({
  base: "flex flex-col rounded-xl overflow-hidden shadow-md bg-accent border border-highlight transition-transform hover:scale-105 h-full",
  variants: {
    type: {
      project: "bg-accent text-highlight",
      blog: "bg-white text-black",
    },
    size: {
      sm: "w-60",
      md: "w-80",
      lg: "w-96",
    },
  },
  defaultVariants: {
    type: "project",
    size: "md",
  },
});

export const cardHeader = tv({
  base: "bg-accent-dark text-highlight text-lg font-semibold px-4 py-2 w-full truncate",
});

export const cardBody = tv({
  base: "flex flex-col flex-grow p-4",
});

export const cardDescription = tv({
  base: "text-sm text-highlight mb-4 line-clamp-3", 
});

export const cardActions = tv({
  base: "flex gap-2 mt-auto",
});
