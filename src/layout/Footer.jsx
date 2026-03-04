import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-background py-12 px-6 md:px-12 border-t border-accent">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted text-sm font-light">
                    &copy; {new Date().getFullYear()} Muhammad Safwan.
                </p>
                <div className="flex gap-8">
                    <a href="https://github.com/SafwanIrfan" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-safwan-856b0b289/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
