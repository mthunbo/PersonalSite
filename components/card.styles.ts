import { tv } from "tailwind-variants";

export const card = tv({
  base: "flex flex-col rounded-xl overflow-hidden shadow-md bg-primary border-2 border-highlight transition-transform hover:scale-105",
  variants: {
    type: {
      project: "bg-primary text-highlight",
      blog: "bg-white text-black",
    },
    size: {
      sm: "max-w-xs",
      md: "max-w-sm",
      lg: "max-w-md",
    },    
  },
  defaultVariants: {
    type: "project",
    size: "md",
  },
});

export const cardHeader = tv({
  base: "bg-primary-dark text-highlight border-highlight border-b-2 text-lg font-semibold px-4 py-2 w-full truncate font-heading",
});

export const cardBody = tv({
  base: "flex flex-col flex-grow p-4",
});

export const cardDescription = tv({
  base: "text-sm text-highlight mb-4 line-clamp-3 font-body", 
});

export const cardActions = tv({
  base: "flex gap-2 mt-auto",
});
