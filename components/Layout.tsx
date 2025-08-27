"use client"
import React from "react";
import { FiMail } from "react-icons/fi";
import { GiLaurelCrown } from "react-icons/gi";
import { SideButton } from "./SideButton";
import Embers from "../Animations/Embers";
import Link from "next/link";
import LoadingNavbar from "./LoadingNavbar"; // Import the new component

export default function Layout({ children }: { children: React.ReactNode }) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const newPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-text">
      
      {/* Sticky top corner buttons*/}
      <Link href="#Hero" scroll={false} onClick={(e) => handleScrollTo(e, 'Hero')}>
        <SideButton 
          position="left" 
          icon={<GiLaurelCrown className="text-[28px] sm:text-[40px]" />} 
          label="Home"
          animation={<Embers count={50}/>}
        />
      </Link>

      <Link href="#Socials" scroll={false} onClick={(e) => handleScrollTo(e, 'Socials')}>
        <SideButton 
          position="right" 
          icon={<FiMail className="text-[28px] sm:text-[40px]" />} 
          label="Socials" 
          animation={<Embers count={50}/>}
        />
      </Link>

      {/* Main content */}
      <main className="min-h-screen">{children}</main>
      
      {/* Floating Bottom Navbar, now its own component */}
      <LoadingNavbar />

      {/* Footer */}
      <footer className="bg-accent text-text py-6">
        <div className="container mx-auto text-center mt-11 font-body">
          © {new Date().getFullYear()} Mark Thunbo - Wizard, Meme-lord, Lord Commander of Legio Squirrelio. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}