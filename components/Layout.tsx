import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { GiTreasureMap, GiAnvilImpact, GiLaurelCrown, GiScrollQuill, GiRomanShield, GiCaesar } from "react-icons/gi";
import { SideButton } from "./SideButton";
import Embers from "../Animations/Embers";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  // State to hold the fill percentage of the navbar (0 to 100)
  const [fillPercentage, setFillPercentage] = useState(0);

  // This effect runs on the client side to add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // The IDs of the sections we want to track for the loading bar, in order.
      // The Hero section is excluded, as the bar starts loading with 'About'.
      const sectionIds = ["Hero", "About", "Journey", "Skills", "Projects", "Game"];
      const sections = sectionIds.map(id => document.getElementById(id));

      // If any section is not found, we can't calculate progress, so we abort.
      if (sections.some(s => s === null)) {
        return;
      }
      
      // We define the total scrollable distance for our loading bar animation.
      // The starting point is the top of the first tracked section ('Hero').
      const startPoint = sections[0]!.offsetTop;

      // The end point is the bottom of the last tracked section ('Game').
      // We add its offsetTop and its client height to get its full length.
      const endPoint = sections[sections.length - 1]!.offsetTop + sections[sections.length - 1]!.clientHeight;

      // Calculate the progress from 0 to 1.
      // We subtract the startPoint to make the 'About' section the beginning of our progress bar's journey.
      const scrollProgress = (window.scrollY - startPoint) / (endPoint - startPoint);

      // Clamp the progress to ensure it stays between 0 and 1.
      // This handles two key scenarios:
      // 1. When you're in the Hero section (scrollY < startPoint), the progress is 0.
      // 2. When you've scrolled past the last section, the progress is 1 (100%).
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Update the state with the new percentage.
      setFillPercentage(clampedProgress * 100);
    };

    // Add the event listener for scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call it once on mount to set the initial state correctly
    handleScroll();

    // Cleanup function to remove the listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures this effect runs only once on mount and unmount

  return (
    <div className="relative min-h-screen bg-background text-text">

      {/* Sticky top corner buttons*/}
      <Link href="#Hero" scroll={true}>
        <SideButton
          position="left"
          icon={<GiLaurelCrown className="text-[28px] sm:text-[40px]" />}
          label="Home"
          animation={<Embers count={50} />}
        />
      </Link>

      <SideButton
        position="right"
        icon={<FiMail className="text-[28px] sm:text-[40px]" />}
        label="Socials"
        animation={<Embers count={50} />}
      />

      {/* Main content */}
      <main className="min-h-screen">{children}</main>

      {/* Floating Bottom Navbar */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg rounded-full shadow-lg border-highlight border-2 overflow-hidden">
        
        {/* The Animated Fill Layer */}
        <div
          className="absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-in-out"
          style={{ width: `${fillPercentage}%` }}
        />

        {/* The list of links. */}
        <ul className="relative z-10 flex justify-around bg-transparent text-highlight px-4 py-2">
          <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
            <Link href="#About" scroll={true} className="flex flex-col items-center">
              <GiCaesar size={20} />
              <span className="text-xs">About</span>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
            <Link href="#Journey" scroll={true} className="flex flex-col items-center">
              <GiTreasureMap size={20} />
              <span className="text-xs">Journey</span>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
            <Link href="#Skills" scroll={true} className="flex flex-col items-center">
              <GiScrollQuill size={20} />
              <span className="text-xs">Skills</span>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
            <Link href="#Projects" scroll={true} className="flex flex-col items-center">
              <GiAnvilImpact size={20} />
              <span className="text-xs">Projects</span>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:scale-110 transition-transform">
            <Link href="#Game" scroll={true} className="flex flex-col items-center">
              <GiRomanShield size={20} />
              <span className="text-xs">RUN!!!</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <footer className="bg-accent text-text py-6">
        <div className="container mx-auto text-center mt-11">
          © {new Date().getFullYear()} Mark Thunbo - Wizard, Meme-lord, Lord Commander of Legio Squirrelio. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}