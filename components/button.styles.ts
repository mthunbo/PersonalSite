import { tv } from 'tailwind-variants';

export const button = tv({
    base: 'text-highlight text-sm rounded-full border-2 border-highlight hover:text-yellow-300 hover:animate-pulse hover:scale-110 font-body',
    variants: {
        variant: {
            project: 'text-highlight bg-primary',
            primary: 'bg-highlight text-white',
            secondary: 'bg-background text-highlight',
        },
        size: {
            sm: 'text-xs',
            md: 'text-sm',
            lg: 'text-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});
