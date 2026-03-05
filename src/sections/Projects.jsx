import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Custom hook to detect touch devices
const useIsTouchDevice = () => {
    const [isTouch, setIsTouch] = useState(false);
    useEffect(() => {
        const checkTouch = () => {
            setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);
    return isTouch;
};

const ProjectCard = ({ project, index, isTouch }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-20% 0px -20% 0px" });
    const isActive = isTouch && isInView;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 ${isActive ? 'border-white/30 -translate-y-2 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]'}`}
        >
            {/* 3D Tech / Anime Inspired Cover */}
            <div className="h-48 w-full relative overflow-hidden bg-black flex items-center justify-center border-b border-white/5">
                {/* Grid background */}
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}></div>

                {/* Abstract floating shapes (3D feel) */}
                <motion.div
                    className="absolute w-20 h-20 border-[0.5px] border-white/20 rounded-full"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <motion.div
                    className="absolute w-32 h-32 border-[0.5px] border-white/10 rounded-full"
                    animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                {/* Central glowing element */}
                <div className={`relative z-10 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center transition-all duration-700 ease-out ${isActive ? 'rotate-90 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'rotate-45 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:rotate-90 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'}`}>
                    <div className={`w-4 h-4 bg-white/50 rounded-sm transition-transform duration-700 ${isActive ? '-rotate-90' : '-rotate-45 group-hover:-rotate-90'}`}></div>
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80"></div>

                {/* Animated light sweep */}
                <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 ${isActive ? 'animate-[shimmer_1.5s_infinite]' : 'group-hover:animate-[shimmer_1.5s_infinite]'}`}></div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className={`text-2xl font-display font-bold text-white leading-tight tracking-tight transition-colors line-clamp-2 ${isActive ? 'text-gray-300' : 'group-hover:text-gray-300'}`}>
                        {project.name.replace(/-/g, ' ')}
                    </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {project.description || "No description provided."}
                </p>

                {/* Languages/Topics Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto pt-4">
                    {[...(project.languages || []), ...(project.topics || [])].map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-gray-300 text-[10px] tracking-widest uppercase font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer Links */}
                <div className="flex gap-6 items-center mt-auto border-t border-white/5 pt-5">
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 transition-all uppercase text-[10px] font-bold tracking-widest ${isActive ? 'text-white/80' : 'text-white/40 group-hover:text-white/80 hover:text-white'}`}>
                            <FaGithub className="text-sm" /> <span>Source</span>
                        </a>
                    )}
                    {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 transition-all uppercase text-[10px] font-bold tracking-widest ${isActive ? 'text-white/80' : 'text-white/40 group-hover:text-white/80 hover:text-white'}`}>
                            <FaExternalLinkAlt className="text-sm" /> <span>Live</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const topProjects = projects.slice(0, 6);
    const isTouch = useIsTouchDevice();

    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-[#050505] relative relative z-10">
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-32">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9]">
                        Recent <br /><span className="text-gray-500">Work</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topProjects.map((project, index) => (
                        <ProjectCard key={project.id || index} project={project} index={index} isTouch={isTouch} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
