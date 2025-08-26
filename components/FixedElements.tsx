"use client";
import React from "react";
import { FiMail } from "react-icons/fi";
import { GiLaurelCrown } from "react-icons/gi";
import { SideButton } from "./SideButton";
import Embers from "../Animations/Embers";
import Link from "next/link";
import LoadingNavbar from "./LoadingNavbar";

export default function FixedElements() {
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
    <>
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

      <LoadingNavbar />
    </>
  );
}