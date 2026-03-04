import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-white rounded-2xl shadow-sm hover:shadow-md border border-accent transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
