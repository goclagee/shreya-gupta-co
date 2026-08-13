import type { Variants, Transition } from "framer-motion";

// Custom easing curve for organic feel
const customEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// ─── Transition Presets ───────────────────────────────────────────────────────

export const transitions = {
  fast: {
    duration: 0.2,
    ease: customEasing,
  } satisfies Transition,
  normal: {
    duration: 0.4,
    ease: customEasing,
  } satisfies Transition,
  slow: {
    duration: 0.7,
    ease: customEasing,
  } satisfies Transition,
  page: {
    duration: 0.4,
    ease: customEasing,
  } satisfies Transition,
} as const;

// ─── Fade Variants ────────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: customEasing },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEasing },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEasing },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEasing },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEasing },
  },
};

// ─── Scale Variant ────────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: customEasing },
  },
};

// ─── Slide Up Variant ─────────────────────────────────────────────────────────

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: customEasing },
  },
};

// ─── Stagger Variants ─────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: customEasing,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: customEasing },
  },
};

// ─── Hero Stagger (slower, 200ms between items) ──────────────────────────────

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
      ease: customEasing,
    },
  },
};

// ─── Page Transition ──────────────────────────────────────────────────────────

export const pageTransition: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: customEasing },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.4, ease: customEasing },
  },
};

// ─── Card Hover ───────────────────────────────────────────────────────────────

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2, ease: customEasing },
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2, ease: customEasing },
  },
};

// ─── Helper Function ──────────────────────────────────────────────────────────

/**
 * Returns a stagger delay based on element index.
 * Useful for manually staggering animations without a parent container variant.
 *
 * @param index - The index of the element in the list
 * @param baseDelay - The delay in seconds between each item (default: 0.12)
 * @returns The calculated delay in seconds
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.12): number {
  return index * baseDelay;
}
