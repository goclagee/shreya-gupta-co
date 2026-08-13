'use client';

import React from 'react';

interface MandAIllustrationProps {
  className?: string;
}

/**
 * MandAIllustration — Two puzzle pieces fitting together with an arrow showing connection.
 * Suggests mergers, unification, synergy, and strategic partnerships.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const MandAIllustration: React.FC<MandAIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Left puzzle piece ────────────────────────────────────────────── */}
      <path
        d="M40 70 L75 70 
           Q75 62, 80 60 Q87 57, 87 65 Q87 73, 80 70 Q75 68, 75 70 
           L75 70 L75 100 
           Q67 100, 65 105 Q62 112, 70 112 Q78 112, 75 105 Q73 100, 75 100 
           L75 130 L40 130 Z"
        stroke="#1a365d"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Detail lines on left piece */}
      <line x1="48" y1="82" x2="65" y2="82" stroke="#718096" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
      <line x1="48" y1="90" x2="60" y2="90" stroke="#718096" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
      <line x1="48" y1="120" x2="62" y2="120" stroke="#718096" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />

      {/* ─── Right puzzle piece ───────────────────────────────────────────── */}
      <path
        d="M125 70 L160 70 L160 130 L125 130 
           L125 100 
           Q117 100, 115 105 Q112 112, 120 112 Q128 112, 125 105 Q123 100, 125 100 
           L125 70 
           Q125 62, 130 60 Q137 57, 137 65 Q137 73, 130 70 Q125 68, 125 70 Z"
        stroke="#1a365d"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Detail lines on right piece */}
      <line x1="135" y1="82" x2="152" y2="82" stroke="#718096" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
      <line x1="135" y1="90" x2="148" y2="90" stroke="#718096" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
      <line x1="135" y1="120" x2="150" y2="120" stroke="#718096" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />

      {/* ─── Connection arrows (center, showing pieces coming together) ──── */}
      {/* Left arrow pointing right */}
      <line x1="82" y1="100" x2="95" y2="100" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M93 97 L96 100 L93 103" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Right arrow pointing left */}
      <line x1="105" y1="100" x2="118" y2="100" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M107 97 L104 100 L107 103" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ─── Synergy spark / connection indicator (top center) ─────────────── */}
      <path
        d="M100 42 L101 38 L102 42 L106 43 L102 44 L101 48 L100 44 L96 43 Z"
        stroke="#c97b3a"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M92 50 L93 47 L94 50 L97 51 L94 52 L93 55 L92 52 L89 51 Z"
        stroke="#c97b3a"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M108 50 L109 47 L110 50 L113 51 L110 52 L109 55 L108 52 L105 51 Z"
        stroke="#c97b3a"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />

      {/* ─── Overlapping circles below (representing merger) ──────────────── */}
      <circle cx="88" cy="160" r="16" stroke="#1a365d" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="112" cy="160" r="16" stroke="#1a365d" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Intersection highlight */}
      <path
        d="M100 148 Q104 155, 104 160 Q104 165, 100 172 Q96 165, 96 160 Q96 155, 100 148 Z"
        stroke="#c97b3a"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="55" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="170" cy="55" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="28" cy="145" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="172" cy="145" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="55" cy="45" r="1" fill="#718096" opacity="0.3" />
      <circle cx="145" cy="180" r="1.5" fill="#718096" opacity="0.25" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M24 35 Q27 30, 33 29"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M176 172 Q179 176, 180 182"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default MandAIllustration;
