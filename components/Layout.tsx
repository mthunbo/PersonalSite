import React from "react";
import { FiMail } from "react-icons/fi";
import { GiTreasureMap, GiAnvilImpact, GiLaurelCrown, GiScrollQuill, GiRomanShield, GiCaesar } from "react-icons/gi";
import { SideButton } from "./SideButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      
      {/* Sticky top corner buttons*/}
      <SideButton position="left" icon={<GiLaurelCrown className="text-[28px] sm:text-[40px]" />} label="Home" />
      <SideButton position="right" icon={<FiMail className="text-[28px] sm:text-[40px]" />} label="Socials" />


      {/* Main content */}
      <main className="min-h-screen">{children}</main>

      {/* Floating Bottom Navbar */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex gap-8 bg-accent text-highlight px-12 py-2 rounded-full shadow-lg backdrop-blur-md bg-opacity-90 ">
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 hover:animate-pulse hover:scale-110 transition">
            <GiCaesar size={20} />
            <span className="text-xs">About</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 hover:animate-pulse hover:scale-110 transition">
            <GiTreasureMap size={20} />
            <span className="text-xs">Journey</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 hover:animate-pulse hover:scale-110 transition">
            <GiScrollQuill size={20} />
            <span className="text-xs">Skills</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 hover:animate-pulse hover:scale-110 transition">
            <GiAnvilImpact size={20} />
            <span className="text-xs">Projects</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 hover:animate-pulse hover:scale-110 transition">
            <GiRomanShield size={20} />
            <span className="text-xs">RUN!!!</span>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <footer className="bg-accent text-text py-6">
        <div className="container mx-auto text-center mt-11">
          © {new Date().getFullYear()} Mark Thunbo -  Wizard, Meme-lord, Lord Commander of Legio Squirrelio. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
