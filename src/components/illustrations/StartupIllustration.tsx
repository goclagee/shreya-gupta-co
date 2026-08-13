'use client';

import React from 'react';

interface StartupIllustrationProps {
  className?: string;
}

/**
 * StartupIllustration — A rocket launching upward with a lightbulb/idea element,
 * some gears, and a small seed/plant growing.
 * Suggests innovation, launch, and early-stage growth.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const StartupIllustration: React.FC<StartupIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Rocket ───────────────────────────────────────────────────────── */}
      {/* Rocket body */}
      <path
        d="M85 130 L85 80 Q85 55, 100 42 Q115 55, 115 80 L115 130 Z"
        stroke="#1a365d"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Rocket nose cone */}
      <path
        d="M92 65 Q100 48, 108 65"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Rocket window */}
      <circle cx="100" cy="90" r="7" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="90" r="4" stroke="#718096" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Rocket fins */}
      <path
        d="M85 120 L72 135 L85 130"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M115 120 L128 135 L115 130"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Rocket exhaust flames */}
      <path
        d="M92 130 Q96 142, 100 148 Q104 142, 108 130"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M95 130 Q98 138, 100 142 Q102 138, 105 130"
        stroke="#c97b3a"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* ─── Lightbulb / Idea (top-right) ─────────────────────────────────── */}
      <path
        d="M145 55 Q145 42, 155 38 Q165 42, 165 55 Q165 60, 160 63 L160 68 L150 68 L150 63 Q145 60, 145 55 Z"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Bulb base lines */}
      <line x1="150" y1="70" x2="160" y2="70" stroke="#c97b3a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="151" y1="72" x2="159" y2="72" stroke="#c97b3a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Light rays */}
      <line x1="155" y1="30" x2="155" y2="34" stroke="#c97b3a" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="140" y1="40" x2="143" y2="42" stroke="#c97b3a" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="170" y1="40" x2="167" y2="42" stroke="#c97b3a" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* ─── Gears (bottom-left) ──────────────────────────────────────────── */}
      {/* Large gear */}
      <circle cx="45" cy="140" r="14" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      <circle cx="45" cy="140" r="5" stroke="#1a365d" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Gear teeth */}
      <line x1="45" y1="124" x2="45" y2="128" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" />
      <line x1="45" y1="152" x2="45" y2="156" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="140" x2="33" y2="140" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" />
      <line x1="57" y1="140" x2="61" y2="140" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" />
      {/* Small gear */}
      <circle cx="62" cy="158" r="8" stroke="#718096" strokeWidth="1.2" fill="none" />
      <circle cx="62" cy="158" r="3" stroke="#718096" strokeWidth="1" fill="none" opacity="0.4" />

      {/* ─── Seed / Plant (bottom-right) ──────────────────────────────────── */}
      {/* Pot */}
      <path
        d="M148 165 L152 175 L166 175 L170 165 Z"
        stroke="#718096"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Stem */}
      <line x1="159" y1="165" x2="159" y2="150" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" />
      {/* Leaves */}
      <path
        d="M159 155 Q165 150, 166 145"
        stroke="#1a365d"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M159 158 Q153 154, 151 149"
        stroke="#1a365d"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="35" cy="50" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="170" cy="90" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="30" cy="110" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="178" cy="160" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="130" cy="35" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M25 30 Q27 25, 33 25"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M175 180 Q178 183, 180 188"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default StartupIllustration;
