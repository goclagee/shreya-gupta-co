'use client';

import React from 'react';

interface IBCIllustrationProps {
  className?: string;
}

/**
 * IBCIllustration — A gavel/mallet with scales of justice, a broken circle being
 * reassembled, and legal documents. Suggests insolvency resolution and legal proceedings.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const IBCIllustration: React.FC<IBCIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Gavel / Mallet ──────────────────────────────────────────────── */}
      {/* Gavel head */}
      <rect
        x="55"
        y="38"
        width="40"
        height="16"
        rx="4"
        stroke="#1a365d"
        strokeWidth="2"
        fill="none"
      />
      {/* Gavel handle */}
      <line
        x1="75"
        y1="54"
        x2="75"
        y2="80"
        stroke="#1a365d"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Strike base */}
      <ellipse
        cx="75"
        cy="83"
        rx="14"
        ry="4"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />

      {/* ─── Scales of Justice ───────────────────────────────────────────── */}
      {/* Central post */}
      <line
        x1="145"
        y1="50"
        x2="145"
        y2="100"
        stroke="#1a365d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Balance beam */}
      <line
        x1="125"
        y1="55"
        x2="165"
        y2="60"
        stroke="#1a365d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Top fulcrum */}
      <circle cx="145" cy="50" r="3" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      {/* Left pan */}
      <path
        d="M120 70 Q125 78, 130 70"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left pan chains */}
      <line x1="125" y1="55" x2="120" y2="70" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="125" y1="55" x2="130" y2="70" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Right pan */}
      <path
        d="M160 75 Q165 83, 170 75"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right pan chains */}
      <line x1="165" y1="60" x2="160" y2="75" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="165" y1="60" x2="170" y2="75" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Base of scales */}
      <rect x="139" y="100" width="12" height="4" rx="2" stroke="#1a365d" strokeWidth="1.2" fill="none" />

      {/* ─── Broken / Cracked Circle Being Reassembled ───────────────────── */}
      <path
        d="M70 130 A25 25 0 0 1 95 110"
        stroke="#1a365d"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M98 113 A25 25 0 0 1 105 140"
        stroke="#1a365d"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M103 143 A25 25 0 0 1 73 150"
        stroke="#c97b3a"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 148 A25 25 0 0 1 67 132"
        stroke="#c97b3a"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="3 2"
      />
      {/* Arrow suggesting reassembly */}
      <path
        d="M60 125 L66 130 L60 135"
        stroke="#c97b3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ─── Legal Document ──────────────────────────────────────────────── */}
      <rect
        x="130"
        y="120"
        width="35"
        height="45"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Document lines */}
      <line x1="137" y1="130" x2="158" y2="130" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="137" y1="138" x2="155" y2="138" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="137" y1="146" x2="158" y2="146" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="137" y1="154" x2="150" y2="154" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Seal / stamp on document */}
      <circle cx="152" cy="155" r="5" stroke="#c97b3a" strokeWidth="1.2" fill="none" opacity="0.7" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="40" cy="50" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="175" cy="42" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="38" cy="160" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="180" cy="170" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="50" cy="105" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M30 35 Q32 30, 38 30"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M170 175 Q173 178, 175 183"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default IBCIllustration;
