'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    GiTreasureMap,
    GiAnvilImpact,
    GiCaesar,
    GiScrollQuill,
    GiRomanShield,
} from 'react-icons/gi';

export default function LoadingNavbar() {
    const [fillPercentage, setFillPercentage] = useState(0);

    // Smooth scrolls to the target section ID, applying an offset from the top.
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Calculate position slightly above the section top for better visual spacing
            const offset = 80;
            const newPosition = element.offsetTop - offset;

            window.scrollTo({
                top: newPosition,
                behavior: 'smooth',
            });
        }
    };

    // Effect to listen for scroll events and update the fill percentage state.
    useEffect(() => {
        const handleScroll = () => {
            // Calculate how much of the page (excluding viewport height) has been scrolled.
            const totalScrollableHeight = document.body.scrollHeight - window.innerHeight;

            if (totalScrollableHeight === 0) {
                setFillPercentage(0);
                return;
            }

            let scrollY = window.scrollY;
            let finalPercentage = (scrollY / totalScrollableHeight) * 100;

            finalPercentage = Math.max(0, Math.min(100, finalPercentage));
            setFillPercentage(finalPercentage);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
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
