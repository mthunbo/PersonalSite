"use client"
import React, {ReactEventHandler, useState} from "react";
import { FiMail } from "react-icons/fi";
import { GiLaurelCrown } from "react-icons/gi";
import { SideButton } from "./SideButton";
import Embers from "../Animations/Embers";
import Link from "next/link";
import LoadingNavbar from "./LoadingNavbar";
import Modal from "./Modal";
import { FaFacebook, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa"

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: message,
    }
    console.log("Form submitted, data: ", formData)
    alert("Message sent!")
    setName('')
    setEmail('')
    setMessage('')
    closeContactModal()
  }

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={20} />, url: 'https://github.com/mthunbo' },
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/mark-thunbo-85b91022a/' },
    { name: 'Discord', icon: <FaDiscord size={20} />, url: 'https://discordapp.com/users/463807227745271818' },
    { name: 'Facebook', icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/mark.thunbo' },
  ];
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

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
      <SideButton 
        position="right" 
        icon={<FiMail className="text-[28px] sm:text-[40px]" />} 
        label="Socials" 
        animation={<Embers count={50}/>}
        socials={socialLinks}
        onClick={openContactModal}
      />

      {/* Main content */}
      <main className="min-h-screen">{children}</main>
      
      {/* Floating Bottom Navbar */}
      <LoadingNavbar />

      {/* Footer */}
      <footer className="bg-primary text-text py-6">
        <div className="container mx-auto text-center mt-11 font-body">
          © {new Date().getFullYear()} Mark Thunbo - Wizard, Meme-lord, Lord Commander of Legio Squirrelio. All Rights Reserved.
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
        <h2 className="text-2xl font-heading text-highlight">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-highlight font-body">
            Name:
            <input type="text" id="name" name="name" placeholder="Name..." value={name} onChange={handleInputChange}/><br/>
          </label>
          <label htmlFor="email" className="text-highlight font-body">
            E-mail:
            <input type="text" id="email" name="email" placeholder="E-mail..." value={email} onChange={handleInputChange}/><br/>
          </label>
          <label htmlFor="message" className="text-highlight font-body">
            Message:
            <textarea id="message" name="message" placeholder="Enter your message here..." value={message} onChange={handleInputChange}/><br/>
          </label>

          <button type="submit" className="mt-6 px-4 py-2 bg-primary rounded-lg text-text font-body">
            Submit
          </button>
        </form>
        
        <button 
          onClick={closeContactModal} 
          className="mt-6 px-4 py-2 bg-primary rounded-lg text-text font-body"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}