import React from 'react';

const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
    const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";
    const variants = {
        primary: "bg-white text-black px-8 py-4 hover:bg-gray-200 text-lg",
        outline: "border border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 text-lg",
        ghost: "text-muted hover:text-white text-lg relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...(href ? { target: href.startsWith('#') ? "_self" : "_blank", rel: "noopener noreferrer" } : {})}
        >
            {children}
        </Component>
    );
};

export default Button;
