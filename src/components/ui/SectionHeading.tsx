'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const customEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  const alignmentClasses =
    alignment === 'center' ? 'text-center mx-auto' : 'text-left';

  // If reduced motion is preferred, render without animation
  if (prefersReducedMotion) {
    return (
      <div className={`mb-12 ${alignmentClasses} ${className}`}>
        <h2 className="font-heading text-primary text-3xl md:text-4xl font-bold">
          {title}
        </h2>
        <div
          className={`mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`}
          aria-hidden="true"
        >
          <svg
            width="72"
            height="6"
            viewBox="0 0 72 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4C12 1 24 5 36 3C48 1 60 5 71 3"
              stroke="#c97b3a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {subtitle && (
          <p className="mt-4 text-text-secondary font-body text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className={`mb-12 ${alignmentClasses} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: customEasing }}
    >
      <h2 className="font-heading text-primary text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      {/* Decorative underline — subtle wavy SVG line */}
      <motion.div
        className={`mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`}
        style={{ width: 72, originX: alignment === 'center' ? 0.5 : 0 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: customEasing }}
        aria-hidden="true"
      >
        <svg
          width="72"
          height="6"
          viewBox="0 0 72 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4C12 1 24 5 36 3C48 1 60 5 71 3"
            stroke="#c97b3a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {subtitle && (
        <motion.p
          className="mt-4 text-text-secondary font-body text-base md:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: customEasing }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

export { SectionHeading };
export type { SectionHeadingProps };
