'use client';
import React, { useState, useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import { GiLaurelCrown } from 'react-icons/gi';
import { SideButton } from './SideButton';
import Embers from '../Animations/Embers';
import Link from 'next/link';
import LoadingNavbar from './LoadingNavbar';
import Modal from './Modal';
import { FaFacebook, FaLinkedin, FaDiscord, FaGithub } from 'react-icons/fa';
import Input from './Input';
import ContactModal from './ContactModal';

export default function Layout({ children }: { children: React.ReactNode }) {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const newPosition = element.offsetTop - offset;

            window.scrollTo({
                top: newPosition,
                behavior: 'smooth',
            });
        }
    };

    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub size={20} />, url: 'https://github.com/mthunbo' },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={20} />,
            url: 'https://www.linkedin.com/in/mark-thunbo-85b91022a/',
        },
        {
            name: 'Discord',
            icon: <FaDiscord size={20} />,
            url: 'https://discordapp.com/users/463807227745271818',
        },
        {
            name: 'Facebook',
            icon: <FaFacebook size={20} />,
            url: 'https://www.facebook.com/mark.thunbo',
        },
    ];
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const openContactModal = () => {
        if (socialsButtonRef.current) {
            const rect = socialsButtonRef.current.getBoundingClientRect();
            setOriginPoint({
                top: rect.top + rect.height / 2,
                left: rect.left + rect.width / 2,
            });
        }
        setContactModalOpen(true);
    };
    const closeContactModal = () => setContactModalOpen(false);
    const socialsButtonRef = useRef<HTMLDivElement>(null);
    const [originPoint, setOriginPoint] = useState({ top: 0, left: 0 });

    return (
        <div className="relative min-h-screen bg-background text-text">
            {/* Sticky top corner buttons*/}
            <Link href="#Hero" scroll={false} onClick={(e) => handleScrollTo(e, 'Hero')}>
                <SideButton
                    position="left"
                    icon={<GiLaurelCrown className="text-[28px] sm:text-[50px]" />}
                    label="Home"
                    animation={<Embers count={10} />}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 25px #A68A64',
                    }}
                    whileTap={{
                        scale: 0.95,
                        rotate: 360,
                        transition: { duration: 0.5 },
                    }}
                />
            </Link>
            <SideButton
                ref={socialsButtonRef}
                position="right"
                icon={<FiMail className="text-[28px] sm:text-[50px]" />}
                label="Socials"
                animation={<Embers count={10} />}
                socials={socialLinks}
                onClick={openContactModal}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 25px #A68A64',
                }}
                whileTap={{
                    scale: 0.95,
                    rotate: 360,
                    transition: { duration: 0.5 },
                }}
            />

            {/* Main content */}
            <main className="min-h-screen">{children}</main>

            {/* Floating Bottom Navbar */}
            <LoadingNavbar />

            {/* Footer */}
            <footer className="bg-primary text-text py-6">
                <div className="container mx-auto text-center mt-11 font-body">
                    © {new Date().getFullYear()} Mark Thunbo - Wizard, Meme-lord, Lord Commander of
                    Legio Squirrelio. All Rights Reserved.
                </div>
            </footer>

            {/* ContactModal */}
            <Modal
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
                originPoint={originPoint}
            >
                <ContactModal onClose={closeContactModal}></ContactModal>
            </Modal>
        </div>
    );
}
