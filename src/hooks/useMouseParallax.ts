'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseMouseParallaxOptions {
  intensity?: number; // default 0.1, controls movement amount
  disabled?: boolean; // override to disable
}

interface MouseParallaxValues {
  x: number; // horizontal offset in pixels
  y: number; // vertical offset in pixels
}

function useMouseParallax(options: UseMouseParallaxOptions = {}): MouseParallaxValues {
  const { intensity = 0.1, disabled = false } = options;

  const prefersReducedMotion = useReducedMotion();
  const [offset, setOffset] = useState<MouseParallaxValues>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const isDisabled = disabled || prefersReducedMotion;

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDisabled) return;

      // Calculate position relative to viewport center, normalized to -1..1
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mousePosition.current = {
        x: (event.clientX - centerX) / centerX,
        y: (event.clientY - centerY) / centerY,
      };

      // Use requestAnimationFrame for smooth updates
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          setOffset({
            x: mousePosition.current.x * intensity * 100,
            y: mousePosition.current.y * intensity * 100,
          });
          rafId.current = null;
        });
      }
    },
    [isDisabled, intensity]
  );

  useEffect(() => {
    // Handle SSR — no window available
    if (typeof window === 'undefined') return;

    // If disabled or reduced motion, ensure offset is zeroed and skip listener
    if (isDisabled) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      // Cancel any pending animation frame on cleanup
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [handleMouseMove, isDisabled]);

  return offset;
}

export { useMouseParallax };
export type { UseMouseParallaxOptions, MouseParallaxValues };
export default useMouseParallax;
