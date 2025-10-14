"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../public/Navya_Logo.png";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow-md relative"
        >
            <motion.div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.div variants={itemVariants} className="flex items-center">
                    <a href="/" className="cursor-pointer">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="w-40"
                            priority
                        />
                    </a>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav variants={itemVariants} className="hidden md:flex space-x-8 items-center justify-between">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/our-services"
                        className={`font-extrabold transition-colors ${activeLink === '/our-services' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Our Services
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/advertising"
                        className={`font-extrabold transition-colors ${activeLink === '/advertising' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Advertising
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/gallery"
                        className={`font-extrabold transition-colors ${activeLink === '/gallery' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Gallery
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact-us"
                        className={`font-extrabold transition-colors ${activeLink === '/contact-us' ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}
                    >
                        Contact
                    </motion.a>
                </motion.nav>

                <Link href={"/contact-us"}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex bg-primary text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                    >
                        Get In Touch
                    </motion.button>

                </Link>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-8 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-primary transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-8 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
                </motion.button>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-transparent bg-opacity-40 z-40 transition-opacity duration-300 md:hidden"
                        onClick={toggleMenu}
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Navigation with Glass Morphism */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 md:hidden"
                        style={{
                            background: "rgba(255, 255, 255, 0.25)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            borderLeft: "1px solid rgba(255, 255, 255, 0.3)"
                        }}
                    >
                        <motion.div className="flex flex-col h-full">
                            <div className="p-5 border-b border-gray-200 border-opacity-30 flex justify-end">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                                    onClick={toggleMenu}
                                    aria-label="Close menu"
                                >
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </div>

                            <div className="flex flex-col p-6 space-y-6 flex-grow">
                                {['/our-services', '/advertising', '/gallery', '/contact-us'].map((path) => (
                                    <motion.a
                                        key={path}
                                        href={path}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`text-xl font-bold transition-colors py-3 px-4 rounded-xl ${activeLink === path ? 'bg-white bg-opacity-30 text-tertiary' : 'text-primary hover:bg-white hover:bg-opacity-20'}`}
                                        onClick={() => handleLinkClick(path)}
                                    >
                                        {path === '/our-services' && 'Our Services'}
                                        {path === '/advertising' && 'Advertising'}
                                        {path === '/gallery' && 'Gallery'}
                                        {path === '/contact-us' && 'Contact'}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="p-6 border-t border-gray-200 border-opacity-30">
                                <Link href={"/contact-us"}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all text-lg"
                                    >
                                        Get In Touch
                                    </motion.button>
                                </Link>

                            </div>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;