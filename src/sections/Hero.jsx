import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

const AnimatedText = () => {
    const words = ["Full Stack Developer", "Backend Engineer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Swap every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative inline-block h-[1.2em] w-full text-left overflow-hidden align-bottom">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 text-white font-bold"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-extrabold text-white leading-[1.1] tracking-tighter mb-8">
                        <span className="text-gray-500 font-light text-3xl sm:text-4xl md:text-5xl block mb-6 tracking-tight">Hello, I'm Safwan.</span>
                        <AnimatedText />
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-start md:items-start justify-between mt-16 md:mt-32 gap-10 border-t border-white/10 pt-12"
                >
                    <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed font-light">
                        Full Stack Developer with a strong interest in backend development. I build secure APIs and responsive applications while continuously improving my skills in scalable system design.
                    </p>
                    <Button href="#projects" variant="outline" className="shrink-0 bg-transparent hover:bg-white hover:text-black hover:border-transparent">
                        View My Work
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
