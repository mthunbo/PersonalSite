'use client';

import React, { useState, useEffect } from 'react';
import { button } from './button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'project' | 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
};

export const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <button className={button({ variant, size, className })} {...props}>
            {children}
        </button>
    );
};
