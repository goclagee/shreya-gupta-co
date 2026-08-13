'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // parallax speed factor, default 0.2 (10-30% range). Negative = moves opposite
  className?: string;
  disabled?: boolean;
}

export default function ParallaxLayer({
  children,
  speed = 0.2,
  className,
  disabled = false,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress (0 to 1) to a Y offset based on speed
  // A speed of 0.2 means the layer moves 20% of the scroll distance
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  // If reduced motion is preferred or parallax is disabled, render without transform
  if (prefersReducedMotion || disabled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export { ParallaxLayer };
export type { ParallaxLayerProps };
