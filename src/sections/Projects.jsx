import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const topProjects = projects.slice(0, 6);

    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-[#050505] relative relative z-10">
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-32">

                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9]">
                        Recent <br /><span className="text-gray-500">Work</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {topProjects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: (index % 2) * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col group"
                        >
                            <div className="border-b border-white/10 pb-8 mb-8 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white capitalize tracking-tight group-hover:text-gray-300 transition-colors">
                                        {project.name.replace(/-/g, ' ')}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light min-h-[80px]">
                                    {project.description}
                                </p>

                                {project.topics?.slice(0, 5).map(topic => (
                                    <span key={topic} className="px-3 py-1 bg-white/5 rounded-md text-gray-300 text-xs tracking-widest uppercase font-medium">
                                        {topic}
                                    </span>
                                ))}
                                {project.languages?.map(lang => (
                                    <span key={lang} className="px-3 py-1 border border-white/10 bg-white/5 rounded-md text-gray-300 text-xs tracking-widest uppercase font-medium">
                                        {lang}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-8 items-center mt-auto border-t border-white/10 pt-6">
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-all uppercase text-xs font-bold tracking-widest group-hover:translate-x-1">
                                        <span>View Code</span> <FaGithub className="text-sm" />
                                    </a>
                                )}
                                {project.homepage && (
                                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-all uppercase text-xs font-bold tracking-widest group-hover:translate-x-1">
                                        <span>Live Demo</span> <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
