"use client"
import React from "react";
import { motion } from "framer-motion";

type EmbersProps = {
  count?: number;
  spreadX?: number;
  fallDistance?: number;
  minDuration?: number;
  maxDuration?: number;
  minSize?: number;
  maxSize?: number;
};

export default function Embers({
  count = 12,
  spreadX = 20,
  fallDistance = 1500,
  minDuration = 30,
  maxDuration = 40,
  minSize = 6,
  maxSize = 8,
}: EmbersProps) {
  const items = Array.from({ length: count });

  return (
    <div className="relative w-full h-full pointer-events-none">
      {items.map((_, i) => {
        const startX = (Math.random() * 2 - 1) * spreadX;
        const size = minSize + Math.random() * (maxSize - minSize);
        const duration = minDuration + Math.random() * (maxDuration - minDuration);
        const delay = Math.random() * duration;
        const drift = (Math.random() * 2 - 1) * 8;
        const colors = ["#ff4400", "#ffbb33", "#ff3300"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const background = `radial-gradient(circle, ${color} 0%, ${color}80 50%, ${color}33 100%)`;
        const boxShadow = `
          0 0 ${size * 1.5}px ${color},
          0 0 ${size * 3}px ${color}33,
          0 0 ${size * 5}px ${color}22
        `;
        
        return (
          <motion.span
            key={i}
            className={`absolute rounded-full`}
            style={{
              width: size,
              height: size,
              left: `calc(50% + ${startX}px)`,
              top: 0,
              background,
              boxShadow,
              filter: "blur(0.2px)",
              opacity: 0,
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{
              y: fallDistance,
              x: drift,
              opacity: [0.3, 1, 0.6, 0.2, 0.3],
            }}
            transition={{
              duration,
              ease: "easeOut",
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}
    </div>
  );
}