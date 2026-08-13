'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  disabled?: boolean;
  className?: string;
}

const customEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function getInitialOffset(direction: 'up' | 'down' | 'left' | 'right') {
  switch (direction) {
    case 'up':
      return { y: 30, x: 0 };
    case 'down':
      return { y: -30, x: 0 };
    case 'left':
      return { x: -30, y: 0 };
    case 'right':
      return { x: 30, y: 0 };
  }
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  disabled = false,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // If reduced motion is preferred or animation is disabled, render without animation
  if (prefersReducedMotion || disabled) {
    return <div className={className}>{children}</div>;
  }

  const offset = getInitialOffset(direction);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: customEasing,
      }}
    >
      {children}
    </motion.div>
  );
}

export { ScrollReveal };
export type { ScrollRevealProps };
