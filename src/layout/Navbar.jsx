import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'experience', href: '#experience' },
        { name: 'my work', href: '#projects' },
        { name: 'skills', href: '#skills' },
        { name: 'get in touch', href: '#contact' }
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="text-2xl font-display font-bold text-white tracking-tighter z-50">
                    Safwan<span className="text-gray-500">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-white relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center space-y-10 z-40"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl sm:text-5xl font-display font-bold text-white hover:text-gray-500 lowercase tracking-tighter"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
