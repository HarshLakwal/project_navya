"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/Navya_Logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    // Set active link based on current URL
    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md relative">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="cursor-pointer">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="w-40"
                            priority
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center justify-between">
                    <a
                        href="/our-services"
                        className={`font-extrabold transition-colors ${activeLink === '/our-services' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Our Services
                    </a>
                    <a
                        href="/advertising"
                        className={`font-extrabold transition-colors ${activeLink === '/advertising' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Advertising
                    </a>
                    <a
                        href="/contact-us"
                        className={`font-extrabold transition-colors ${activeLink === '/contact-us' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Contact
                    </a>

                </nav>
                <button className="hidden md:flex bg-primary text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all">
                    Get In Touch
                </button>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-8 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-primary transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-8 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-transparent bg-opacity-40 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            ></div>

            {/* Mobile Navigation with Glass Morphism */}
            <nav
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.3)"
                }}
            >
                <div className="flex flex-col h-full">
                    <div className="p-5 border-b border-gray-200 border-opacity-30 flex justify-end">
                        <button
                            className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col p-6 space-y-6 flex-grow">
                        <a
                            href="/our-services"
                            className={`text-xl font-bold transition-colors py-3 px-4 rounded-xl ${activeLink === '/our-services' ? 'bg-white bg-opacity-30 text-tertiary' : 'text-primary hover:bg-white hover:bg-opacity-20'}`}
                            onClick={() => handleLinkClick('/our-services')}
                        >
                            Our Services
                        </a>
                        <a
                            href="/advertising"
                            className={`text-xl font-bold transition-colors py-3 px-4 rounded-xl ${activeLink === '/advertising' ? 'bg-white bg-opacity-30 text-tertiary' : 'text-primary hover:bg-white hover:bg-opacity-20'}`}
                            onClick={() => handleLinkClick('/advertising')}
                        >
                            Advertising
                        </a>
                        <a
                            href="/contact-us"
                            className={`text-xl font-bold transition-colors py-3 px-4 rounded-xl ${activeLink === '/contact-us' ? 'bg-white bg-opacity-30 text-tertiary' : 'text-primary hover:bg-white hover:bg-opacity-20'}`}
                            onClick={() => handleLinkClick('/contact-us')}
                        >
                            Contact
                        </a>
                    </div>

                    <div className="p-6 border-t border-gray-200 border-opacity-30">
                        <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all text-lg">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;