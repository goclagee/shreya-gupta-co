'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroIllustrationProps {
  className?: string;
}

/**
 * HeroIllustration — A large decorative SVG for the homepage hero section.
 * Theme: Financial growth, trust, and professional expertise.
 * Features animated paths (draw-on), floating elements, and staggered fades.
 */
const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {/* ─── Background organic decorative curves ─────────────────────────── */}
      <motion.path
        d="M50 420 Q150 380, 200 400 T350 370 Q420 350, 500 380 T580 360"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
      />
      <motion.path
        d="M20 450 Q100 430, 180 445 T380 420 Q480 400, 590 430"
        stroke="#e2ddd7"
        strokeWidth="0.75"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* ─── Abstract cityscape silhouette (background) ───────────────────── */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
      >
        {/* Tall building left */}
        <path
          d="M80 340 L80 220 Q82 215, 90 215 L110 215 Q118 215, 120 220 L120 340"
          stroke="#1a365d"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.25"
        />
        {/* Building windows */}
        <rect x="88" y="230" width="4" height="6" rx="1" fill="#1a365d" opacity="0.15" />
        <rect x="98" y="230" width="4" height="6" rx="1" fill="#1a365d" opacity="0.15" />
        <rect x="108" y="230" width="4" height="6" rx="1" fill="#1a365d" opacity="0.15" />
        <rect x="88" y="250" width="4" height="6" rx="1" fill="#1a365d" opacity="0.15" />
        <rect x="98" y="250" width="4" height="6" rx="1" fill="#1a365d" opacity="0.15" />
        <rect x="108" y="250" width="4" height="6" rx="1" fill="#1a365d" opacity="0.15" />

        {/* Medium building */}
        <path
          d="M130 340 L130 260 Q133 255, 140 255 L165 255 Q172 255, 175 260 L175 340"
          stroke="#1a365d"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.2"
        />
        <rect x="138" y="270" width="4" height="5" rx="1" fill="#1a365d" opacity="0.12" />
        <rect x="150" y="270" width="4" height="5" rx="1" fill="#1a365d" opacity="0.12" />
        <rect x="162" y="270" width="4" height="5" rx="1" fill="#1a365d" opacity="0.12" />

        {/* Short building */}
        <path
          d="M185 340 L185 290 Q187 286, 193 286 L215 286 Q221 286, 223 290 L223 340"
          stroke="#1a365d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.18"
        />

        {/* Tall tower right-side */}
        <path
          d="M440 340 L440 200 Q442 195, 448 195 L462 195 Q468 195, 470 200 L470 340"
          stroke="#1a365d"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.22"
        />
        <rect x="448" y="210" width="3" height="5" rx="0.5" fill="#1a365d" opacity="0.12" />
        <rect x="456" y="210" width="3" height="5" rx="0.5" fill="#1a365d" opacity="0.12" />
        <rect x="448" y="228" width="3" height="5" rx="0.5" fill="#1a365d" opacity="0.12" />
        <rect x="456" y="228" width="3" height="5" rx="0.5" fill="#1a365d" opacity="0.12" />

        {/* Short block far right */}
        <path
          d="M490 340 L490 295 Q492 291, 498 291 L525 291 Q531 291, 533 295 L533 340"
          stroke="#1a365d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.18"
        />
      </motion.g>

      {/* ─── Upward trending graph line (growth theme) ────────────────────── */}
      <motion.path
        d="M60 380 C90 375, 110 370, 140 360 S190 340, 220 320 S270 290, 310 260 S360 230, 400 200 S440 170, 470 140 S510 110, 545 85"
        stroke="#c97b3a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
      />
      {/* Graph line glow / shadow */}
      <motion.path
        d="M60 380 C90 375, 110 370, 140 360 S190 340, 220 320 S270 290, 310 260 S360 230, 400 200 S440 170, 470 140 S510 110, 545 85"
        stroke="#c97b3a"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
      />
      {/* Graph baseline */}
      <motion.path
        d="M55 390 L555 390"
        stroke="#1a365d"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
      />
      {/* Small tick marks on baseline */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <line x1="120" y1="388" x2="120" y2="392" stroke="#1a365d" strokeWidth="1" />
        <line x1="200" y1="388" x2="200" y2="392" stroke="#1a365d" strokeWidth="1" />
        <line x1="300" y1="388" x2="300" y2="392" stroke="#1a365d" strokeWidth="1" />
        <line x1="400" y1="388" x2="400" y2="392" stroke="#1a365d" strokeWidth="1" />
        <line x1="500" y1="388" x2="500" y2="392" stroke="#1a365d" strokeWidth="1" />
      </motion.g>

      {/* ─── Data points along the graph (staggered fade) ─────────────────── */}
      <motion.circle
        cx="140" cy="360" r="4"
        fill="#c97b3a"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
      <motion.circle
        cx="220" cy="320" r="4"
        fill="#c97b3a"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      />
      <motion.circle
        cx="310" cy="260" r="4.5"
        fill="#c97b3a"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      />
      <motion.circle
        cx="400" cy="200" r="4.5"
        fill="#c97b3a"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.8 }}
      />
      <motion.circle
        cx="545" cy="85" r="5.5"
        fill="#c97b3a"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
      />

      {/* ─── Shield / trust element (center-right area) ───────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.0 }}
      >
        {/* Shield outline */}
        <motion.path
          d="M480 280 L480 250 Q480 235, 495 230 Q510 225, 520 230 Q535 235, 535 250 L535 280 Q535 310, 507 325 Q480 310, 480 280Z"
          stroke="#1a365d"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.0 }}
        />
        {/* Inner shield accent */}
        <motion.path
          d="M490 275 L490 255 Q490 245, 500 242 Q507 240, 515 242 Q525 245, 525 255 L525 275 Q525 295, 507 305 Q490 295, 490 275Z"
          stroke="#c97b3a"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.4 }}
        />
        {/* Checkmark inside shield */}
        <motion.path
          d="M498 268 L505 276 L518 258"
          stroke="#c97b3a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 2.0 }}
        />
      </motion.g>

      {/* ─── Floating geometric shapes (depth & visual interest) ──────────── */}
      {/* Floating diamond — top left */}
      <motion.g
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.5, y: [5, -5, 5] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.5 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <path
          d="M120 100 L130 90 L140 100 L130 110Z"
          stroke="#1a365d"
          strokeWidth="1"
          fill="none"
        />
      </motion.g>

      {/* Floating circle — top center */}
      <motion.circle
        cx="320" cy="60" r="8"
        stroke="#c97b3a"
        strokeWidth="1"
        fill="none"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 0.4, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.8 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Floating triangle — top right */}
      <motion.g
        initial={{ opacity: 0, y: -3 }}
        animate={{ opacity: 0.4, y: [-3, 6, -3] }}
        transition={{
          opacity: { duration: 0.6, delay: 2.0 },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <path
          d="M530 50 L540 35 L550 50Z"
          stroke="#1a365d"
          strokeWidth="1"
          fill="none"
        />
      </motion.g>

      {/* Small floating square — left mid */}
      <motion.rect
        x="45" y="200" width="12" height="12" rx="2"
        stroke="#c97b3a"
        strokeWidth="0.8"
        fill="none"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 0.35, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.6 },
          y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Floating hexagon — right mid */}
      <motion.g
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 0.35, y: [2, -5, 2] }}
        transition={{
          opacity: { duration: 0.6, delay: 2.2 },
          y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <path
          d="M565 180 L572 173 L582 173 L589 180 L582 187 L572 187Z"
          stroke="#1a365d"
          strokeWidth="0.8"
          fill="none"
        />
      </motion.g>

      {/* ─── Decorative dots scattered throughout ─────────────────────────── */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <circle cx="180" cy="140" r="2" fill="#c97b3a" opacity="0.3" />
        <circle cx="250" cy="100" r="1.5" fill="#1a365d" opacity="0.2" />
        <circle cx="400" cy="80" r="2" fill="#c97b3a" opacity="0.25" />
        <circle cx="460" cy="120" r="1.5" fill="#1a365d" opacity="0.2" />
        <circle cx="70" cy="300" r="1.5" fill="#c97b3a" opacity="0.3" />
        <circle cx="560" cy="320" r="2" fill="#1a365d" opacity="0.2" />
        <circle cx="350" cy="430" r="1.5" fill="#c97b3a" opacity="0.25" />
        <circle cx="150" cy="450" r="2" fill="#1a365d" opacity="0.15" />
      </motion.g>

      {/* ─── Organic flowing lines (hand-drawn feel) ──────────────────────── */}
      <motion.path
        d="M240 180 Q260 170, 280 175 T330 165 Q350 160, 370 168"
        stroke="#1a365d"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.path
        d="M350 420 Q380 410, 420 415 T490 405"
        stroke="#c97b3a"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
        opacity="0.25"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.8 }}
      />

      {/* ─── Upward arrow tip at end of graph (growth symbol) ─────────────── */}
      <motion.path
        d="M535 95 L545 80 L555 95"
        stroke="#c97b3a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
      />
    </svg>
  );
};

export default HeroIllustration;
