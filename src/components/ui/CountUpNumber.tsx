'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CountUpNumberProps {
  value: number;        // target number to count to
  suffix?: string;      // e.g. "+" displayed after the number
  duration?: number;    // animation duration in seconds, default 2
  className?: string;   // styling for the number text
}

export default function CountUpNumber({
  value,
  suffix = '',
  duration = 2,
  className,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // If reduced motion is preferred, show the final value immediately
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Only start the animation when in view
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94], // custom easing for natural feel
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion, motionValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

export { CountUpNumber };
export type { CountUpNumberProps };
