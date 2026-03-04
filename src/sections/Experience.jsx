import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 bg-background border-t border-accent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row justify-between gap-8">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                        Where I've <br /><span className="text-muted">worked</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-12 border-t border-accent pt-16">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col lg:flex-row gap-8 lg:gap-16 border-b border-white/5 pb-12 hover:border-white/20 transition-colors"
                        >
                            <div className="lg:w-1/3 flex flex-col shrink-0">
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-400 font-medium tracking-wide">
                                    {exp.company}
                                </p>
                                <span className="text-muted font-display tracking-widest text-sm uppercase mb-4 block">
                                    {exp.duration}
                                </span>
                            </div>

                            <div className="lg:w-2/3">
                                <p className="text-muted mt-2 text-lg leading-relaxed font-light">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
