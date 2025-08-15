import React from "react";
import { FiMail } from "react-icons/fi";
import { GiTreasureMap, GiAnvilImpact, GiLaurelCrown, GiScrollQuill, GiRomanShield, GiCaesar } from "react-icons/gi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Sticky Top-Left Home Button */}
      <button
        className="fixed top-12 left-12 w-20 h-20 rounded-full bg-accent text-highlight flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="Home">
        <GiLaurelCrown size={40} />
      </button>

      {/* Sticky Top-Right Socials Button */}
      <button
        className="fixed top-12 right-12 w-20 h-20 rounded-full bg-accent text-highlight flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="Socials">
        <FiMail size={40} />
      </button>

      {/* Main content */}
      <main className="min-h-screen">{children}</main>

      {/* Floating Bottom Navbar */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex gap-8 bg-accent text-highlight px-12 py-2 rounded-full shadow-lg backdrop-blur-md bg-opacity-90">
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 transition">
            <GiCaesar size={20} />
            <span className="text-xs">About</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 transition">
            <GiTreasureMap size={20} />
            <span className="text-xs">Journey</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 transition">
            <GiAnvilImpact size={20} />
            <span className="text-xs">Skills</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 transition">
            <GiScrollQuill size={20} />
            <span className="text-xs">Projects</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-yellow-300 transition">
            <GiRomanShield size={20} />
            <span className="text-xs">RUN!!!</span>
          </li>
        </ul>
      </nav>

      {/* Footer (optional) */}
      <footer className="bg-accent text-text py-6">
        <div className="container mx-auto text-center mt-11">
          © {new Date().getFullYear()} Mark Thunbo. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
