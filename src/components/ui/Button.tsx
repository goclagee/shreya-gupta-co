'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg',
  secondary:
    'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary/5',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const MotionLink = motion(Link);

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2';

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  const hoverAnimation = disabled
    ? {}
    : { scale: 1.03, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)' };

  const tapAnimation = disabled ? {} : { scale: 0.97 };

  if (href && !disabled) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
