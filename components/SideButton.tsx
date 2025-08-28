// components/SideButton.tsx

"use client"; // This component now uses client-side hooks (useState)

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Define the shape of our social link objects
type SocialLink = {
  name: string;
  icon: React.ReactNode;
  url: string;
};

type SideButtonProps = {
  position: "left" | "right";
  icon: React.ReactNode;
  label: string;
  animation?: React.ReactNode;
  socials?: SocialLink[];
};

const itemPositions = [
  { x: -80, y: -25 },
  { x: -90, y: 30 },
  { x: -60, y: 80 },
  { x: 0, y: 90 },
];

export function SideButton({ position, icon, label, animation, socials }: SideButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the container to orchestrate the children's animations
  const listVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  // Animation variants for each individual social icon
  const itemVariants: Variants = {
    open: (i: number) => ({
        x: itemPositions[i].x,
        y: itemPositions[i].y,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    }),
    closed: {
        x: 0,
        y: 0,
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
  };

  return (
    <div
      className={`fixed top-4 sm:top-12 z-50 ${
        position === "left" ? "left-4 sm:left-12" : "right-4 sm:right-12"
      }`}
    >
      <div className="relative w-14 h-14 sm:w-20 sm:h-20">
        
        {/* AnimatePresence handles the enter/exit animations of the social icons */}
        <AnimatePresence>
          {isOpen && socials && (
            <motion.ul
              className="absolute top-0 right-0 w-12 h-12"
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
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="w-full h-full bg-primary-dark rounded-full flex justify-center items-center text-highlight border-2 border-highlight shadow-lg transition-transform hover:scale-110">
                    {social.icon}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* The main button that triggers the animation */}
        <motion.button
          className="absolute top-0 right-0 w-full h-full rounded-full bg-gradient-to-br from-primary to-primary-dark text-highlight flex items-center justify-center border-2 border-highlight shadow-2xl"
          aria-label={label}
          onClick={() => socials && setIsOpen(!isOpen)} // Only toggle if socials exist
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
        </motion.button>

        {/* Banner Animation */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full w-20 sm:w-28 h-screen -z-10 overflow-visible">
          {animation}
        </div>
      </div>
    </div>
  );
}