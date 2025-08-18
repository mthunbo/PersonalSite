import { tv } from "tailwind-variants";

export const card = tv({
  base: "rounded-xl overflow-hidden shadow-md bg-background border border-gray-200 transition-transform hover:scale-110",
  variants: {
    type: {
      project: "bg-background text-foreground",
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

export const cardImage = tv({
  base: "w-full h-48 object-cover",
});

export const cardBody = tv({
  base: "p-4",
});

export const cardTitle = tv({
  base: "text-lg font-semibold mb-2",
});

export const cardDescription = tv({
  base: "text-sm text-muted-foreground mb-4",
});

export const cardActions = tv({
  base: "flex gap-2 mt-2",
});
