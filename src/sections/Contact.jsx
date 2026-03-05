import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-40 px-6 md:px-12 bg-background border-t border-accent">
            <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter leading-[1] mb-12">
                        Want to <br />
                        <span className="text-muted">connect?</span>
                    </h2>

                    <p className="text-xl md:text-3xl text-muted max-w-3xl leading-relaxed mb-16 font-light">
                        Have a project in mind or looking for a developer to bring your ideas to life?
                        Let’s connect and build scalable, high-quality applications together.
                    </p>

                    <a href="mailto:mohdsafwan2k5@gmail.com" className="inline-block text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white border-b-2 border-white pb-2 md:pb-4 hover:text-muted hover:border-muted transition-colors tracking-tight break-all">
                        mohdsafwan2k5@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
