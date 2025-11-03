'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    GiTreasureMap,
    GiAnvilImpact,
    GiCaesar,
    GiScrollQuill,
    GiRomanShield,
} from 'react-icons/gi';

const SECTION_IDS = ['Hero', 'About', 'Journey', 'Skills', 'Projects', 'Game'];

export default function LoadingNavbar() {
    const [fillPercentage, setFillPercentage] = useState(0);
    const sectionOffsetsRef = useRef<number[]>([]);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = -20;
            const newPosition = element.offsetTop - offset;
            window.scrollTo({ top: newPosition, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sectionOffsetsRef.current;
            if (offsets.length !== SECTION_IDS.length || offsets[1] === 0) {
                const totalDocumentHeight = Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                );
                const totalScrollableHeight = totalDocumentHeight - window.innerHeight;

                if (totalScrollableHeight <= 0) {
                    setFillPercentage(0);
                    return;
                }
                let scrollY_fallback = window.scrollY;
                let finalPercentage_fallback = (scrollY_fallback / totalScrollableHeight) * 100;
                finalPercentage_fallback = Math.max(0, Math.min(100, finalPercentage_fallback));
                setFillPercentage(finalPercentage_fallback);
                return;
            }

            const scrollY = window.scrollY;
            const scrollOffset = -20;
            const adjustedScrollY = scrollY - scrollOffset;

            let currentSegmentIndex = 0;
            for (let i = 0; i < offsets.length; i++) {
                if (adjustedScrollY >= offsets[i]) {
                    currentSegmentIndex = i;
                } else {
                    break;
                }
            }

            let finalPercentage = 0;
            const basePercentage = currentSegmentIndex * 20;

            if (currentSegmentIndex < offsets.length - 1) {
                const segmentStart = offsets[currentSegmentIndex];
                const segmentEnd = offsets[currentSegmentIndex + 1];
                const segmentLength = Math.max(1, segmentEnd - segmentStart);

                const progressInSegment = Math.max(
                    0,
                    Math.min(1, (adjustedScrollY - segmentStart) / segmentLength)
                );

                finalPercentage = basePercentage + progressInSegment * 20;
            } else {
                const totalDocumentHeight = Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                );
                if (scrollY + window.innerHeight >= totalDocumentHeight - 10) {
                    finalPercentage = 100;
                } else {
                    finalPercentage = basePercentage;
                }
            }

            if (adjustedScrollY < offsets[0]) {
                finalPercentage = 0;
            }

            finalPercentage = Math.max(0, Math.min(100, finalPercentage));
            setFillPercentage(finalPercentage);
        };

        const calculateOffsets = () => {
            sectionOffsetsRef.current = SECTION_IDS.map((id) => {
                const element = document.getElementById(id);
                return element ? element.offsetTop : 0;
            });
            sectionOffsetsRef.current.sort((a, b) => a - b);
            handleScroll();
        };

        calculateOffsets();
        window.addEventListener('resize', calculateOffsets);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calculateOffsets);
        };
    }, []);

    return (
        <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg rounded-full shadow-lg border-highlight border-2 overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${fillPercentage}%` }}
            />
            <ul className="relative z-10 flex justify-around bg-transparent text-highlight px-4 py-2">
                <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
                    <Link
                        href="#About"
                        scroll={false}
                        onClick={(e) => handleScrollTo(e, 'About')}
                        className="flex flex-col items-center"
                    >
                        <GiCaesar size={20} />
                        <span className="text-xs font-body">About</span>
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
                    <Link
                        href="#Journey"
                        scroll={false}
                        onClick={(e) => handleScrollTo(e, 'Journey')}
                        className="flex flex-col items-center"
                    >
                        <GiTreasureMap size={20} />
                        <span className="text-xs font-body">Journey</span>
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
                    <Link
                        href="#Skills"
                        scroll={false}
                        onClick={(e) => handleScrollTo(e, 'Skills')}
                        className="flex flex-col items-center"
                    >
                        <GiScrollQuill size={20} />
                        <span className="text-xs font-body">Skills</span>
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
                    <Link
                        href="#Projects"
                        scroll={false}
                        onClick={(e) => handleScrollTo(e, 'Projects')}
                        className="flex flex-col items-center"
                    >
                        <GiAnvilImpact size={20} />
                        <span className="text-xs font-body">Projects</span>
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
                    <Link
                        href="#Game"
                        scroll={false}
                        onClick={(e) => handleScrollTo(e, 'Game')}
                        className="flex flex-col items-center"
                    >
                        <GiRomanShield size={20} />
                        <span className="text-xs font-body">RUN!!!</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
