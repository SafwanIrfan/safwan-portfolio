import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">
                        Skills & <span className="text-muted">Technologies</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-accent pt-12">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-3xl font-display font-bold text-white mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 border border-white/10 rounded-full text-muted text-sm tracking-wide bg-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
