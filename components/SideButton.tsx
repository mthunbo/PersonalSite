'use client';

import React, { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence, Variants, TargetAndTransition } from 'framer-motion';

type SocialLink = {
    name: string;
    icon: React.ReactNode;
    url: string;
};

type SideButtonProps = {
    position: 'left' | 'right';
    icon: React.ReactNode;
    label: string;
    animation?: React.ReactNode;
    socials?: SocialLink[];
    onClick?: () => void;
    whileHover?: TargetAndTransition;
    whileTap?: TargetAndTransition;
};

const itemPositions = [
    { x: -90, y: -25 },
    { x: -105, y: 30 },
    { x: -80, y: 85 },
    { x: -25, y: 105 },
];

export const SideButton = forwardRef<HTMLDivElement, SideButtonProps>(function SideButton(
    { position, icon, label, animation, socials, onClick, whileHover, whileTap },
    ref
) {
    const [isOpen, setIsOpen] = useState(false);
    // Ref to manage the timeout that delays closing the fan animation on mouse leave.
    // This prevents the fan from closing if the user briefly moves the mouse off and back on.
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // --- Event Handlers for Fan Animation ---
    // Opens the fan immediately and clears any pending close timeout.
    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setIsOpen(true);
    };
    // Sets a delay before closing the fan to improve user experience.
    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    // --- Framer Motion Variants ---
    // Controls staggering of children for the <ul> container
    const listVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };
    // Controls position and opacity of individual <li> items based on index (custom prop)
    const itemVariants: Variants = {
        open: (i: number) => ({
            x: itemPositions[i].x,
            y: itemPositions[i].y,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24,
            },
        }),
        closed: {
            x: -10,
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div
            ref={ref}
            className={`fixed top-4 sm:top-12 z-50 ${
                position === 'left' ? 'left-4 sm:left-12' : 'right-4 sm:right-12'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-14 h-14 sm:w-24 sm:h-24">
                <AnimatePresence>
                    {isOpen && socials && (
                        <motion.ul
                            className="absolute top-0 right-0 w-12 h-12 z-10"
                            variants={listVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {socials.map((social, i) => (
                                <motion.li
                                    key={social.name}
                                    className="absolute top-0 right-0 w-full h-full"
                                    custom={i}
                                    variants={itemVariants}
                                >
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-full bg-primary rounded-full flex justify-center items-center text-highlight border-2 border-highlight shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-[0_0_20px_#A68A64] hover:shadow-highlight"
                                    >
                                        {social.icon}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <motion.button
                    className="absolute top-0 right-0 w-full h-full rounded-full bg-primary text-highlight flex items-center justify-center border-2 border-highlight shadow-2xl z-20"
                    aria-label={label}
                    onClick={onClick}
                    whileHover={whileHover}
                    whileTap={whileTap}
                >
                    {icon}
                </motion.button>

                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full w-12 sm:w-16 h-screen -z-10 overflow-visible">
                    {animation}
                </div>
            </div>
        </div>
    );
});
