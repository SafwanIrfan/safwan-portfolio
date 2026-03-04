import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading
                    title="About Me"
                    subtitle="A passionate software engineer focused on building robust and scalable backend systems."
                />

                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="prose prose-lg text-secondary max-w-none"
                        >
                            <p className="mb-6">
                                Hello! I'm <strong>Muhammad Safwan Irfan</strong>, a Full Stack Developer with a strong emphasis on backend development.
                                Based out of Karachi, Pakistan, I specialize in designing fault-tolerant architectures, optimizing performance, and building clean APIs.
                            </p>
                            <p className="mb-6">
                                While I am proficient across the entire stack—utilizing modern frontend frameworks like React—my true passion lies in the server-side logic.
                                I enjoy tackling complex data problems, orchestrating microservices, and ensuring applications run securely and efficiently at scale.
                                My philosophy is that good code should not only work well but be maintainable and readable for the future.
                            </p>
                            <p>
                                When I'm not coding, I'm constantly learning about new cloud technologies, contributing to open-source projects, and staying updated with the fast-evolving tech landscape.
                                In Sha Allah, I plan to continue deepening my expertise in backend engineering to deliver world-class digital products.
                            </p>
                        </motion.div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
