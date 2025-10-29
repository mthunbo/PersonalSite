import { SectionHeader } from './SectionHeader';

type SectionLayoutProps = {
    id?: string;
    title: string;
    subtitle?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    align?: 'left' | 'center' | 'right';
    className?: string;
    minHeight?: string;
    children?: React.ReactNode;
};

export function SectionLayout({
    id,
    title,
    subtitle = '',
    size = 'lg',
    align = 'center',
    className = '',
    minHeight,
    children,
}: SectionLayoutProps) {
    return (
        <section
            id={id}
            className={`py-24 sm:py-32 flex flex-col items-center ${className}`}
            style={minHeight ? { minHeight } : undefined}
        >
            <SectionHeader title={title} subtitle={subtitle} align={align} size={size} />
            <div className="flex-grow flex flex-col items-center w-full">{children}</div>
        </section>
    );
}
