import React from 'react';
import { Button } from './Button';

type AttributionsModalContentProps = {
    onClose: () => void;
};

type Attribution = {
    description: string;
    designer: string;
    sourceName: string;
    url: string;
};

const attributionsData: Attribution[] = [
    {
        description: 'Outer Fire Ring (Ember Glow)',
        designer: '祸生',
        sourceName: 'PNGTree',
        url: 'https://pngtree.com/freepng/fire-ring-circular-light-effect-flame_9051401.html?sol=downref&id=bef',
    },
    {
        description: 'Inner Fire Ring (Ember Flame)',
        designer: 'tohamina',
        sourceName: 'Freepik',
        url: 'https://www.freepik.com/free-psd/fiery-ring-inferno-captivating-image-burning-circle_41055596.htm',
    },
    {
        description: 'Film Grain Texture',
        designer: 'menkalinan',
        sourceName: 'PNGTree',
        url: 'https://pngtree.com/freepng/film-grain-effect-texture_8624523.html?sol=downref&id=bef',
    },
];

export default function AttributionsModalContent({ onClose }: AttributionsModalContentProps) {
    return (
        <>
            <h2 className="text-2xl font-heading text-highlight mb-6 font-bold">
                Asset Attributions
            </h2>

            <ul className="space-y-4 text-sm text-text-muted mb-8">
                {attributionsData.map((attr) => (
                    <li key={attr.description}>
                        {attr.description} designed by {attr.designer} from{' '}
                        <a
                            href={attr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-highlight hover:underline"
                        >
                            {attr.sourceName}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex justify-end border-t-2 border-highlight pt-6">
                <Button onClick={onClose} variant="secondary" size="md">
                    <span className="inline-block px-4 py-2">Close</span>
                </Button>
            </div>
        </>
    );
}
