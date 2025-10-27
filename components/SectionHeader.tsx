import React from 'react';
import clsx from 'clsx';

type SectionHeaderProps = {
    title: string;
    subtitle?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    align?: 'left' | 'center' | 'right';
    className?: string;
};

export function SectionHeader({
    title,
    subtitle = '',
    size = 'lg',
    align = 'center',
    className = '',
}: SectionHeaderProps) {
    const headerClasses = clsx(
        'flex',
        'flex-col',
        'w-full',
        'gap-2',
        align === 'center' && 'items-center text-center',
        align === 'left' && 'items-start text-left',
        align === 'right' && 'items-end text-right'
    );

    const titleClasses = clsx(
        'text-gold-header',
        'font-heading',
        'tracking-wide',
        size === 'sm' && 'text-3xl sm:text-4xl',
        size === 'md' && 'text-4xl sm:text-5xl',
        size === 'lg' && 'text-5xl sm:text-7xl',
        size === 'xl' && 'text-6xl sm:text-8xl'
    );

    const subtitleClasses = clsx(
        'text-text-muted',
        'font-body',
        'text-lg',
        'sm:text-xl',
        'font-light',
        'italic',
        'tracking-wider'
    );

    return (
        <header className={clsx(headerClasses, className)}>
            <h2 className={titleClasses}>{title}</h2>
            {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </header>
    );
}
