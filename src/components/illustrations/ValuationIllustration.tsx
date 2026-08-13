'use client';

import React from 'react';

interface ValuationIllustrationProps {
  className?: string;
}

/**
 * ValuationIllustration — A balance scale with a building/asset on one side
 * and coins/money on the other. Suggests weighing value, appraisal, and fair assessment.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const ValuationIllustration: React.FC<ValuationIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Scale stand (vertical pillar) ───────────────────────────────── */}
      <line
        x1="100"
        y1="55"
        x2="100"
        y2="160"
        stroke="#1a365d"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M80 160 Q100 165, 120 160"
        stroke="#1a365d"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="85" y1="162" x2="115" y2="162" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />

      {/* ─── Scale beam (slightly tilted to show weighing) ───────────────── */}
      <line
        x1="45"
        y1="72"
        x2="155"
        y2="62"
        stroke="#1a365d"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Fulcrum triangle */}
      <path
        d="M95 55 L100 48 L105 55"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />

      {/* ─── Left pan (building/asset side — heavier) ────────────────────── */}
      {/* Chains/strings */}
      <line x1="45" y1="72" x2="35" y2="88" stroke="#718096" strokeWidth="1" strokeLinecap="round" />
      <line x1="45" y1="72" x2="55" y2="88" stroke="#718096" strokeWidth="1" strokeLinecap="round" />
      {/* Pan */}
      <path
        d="M30 88 Q45 92, 60 88"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Building on left pan */}
      <rect x="37" y="72" width="16" height="16" rx="1" stroke="#1a365d" strokeWidth="1.2" fill="none" />
      {/* Building windows */}
      <rect x="40" y="75" width="3" height="3" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="46" y="75" width="3" height="3" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="40" y="81" width="3" height="3" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="46" y="81" width="3" height="3" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      {/* Building roof */}
      <path d="M36 72 L45 65 L54 72" stroke="#1a365d" strokeWidth="1.2" fill="none" strokeLinejoin="round" />

      {/* ─── Right pan (coins/money side — lighter) ──────────────────────── */}
      {/* Chains/strings */}
      <line x1="155" y1="62" x2="145" y2="78" stroke="#718096" strokeWidth="1" strokeLinecap="round" />
      <line x1="155" y1="62" x2="165" y2="78" stroke="#718096" strokeWidth="1" strokeLinecap="round" />
      {/* Pan */}
      <path
        d="M140 78 Q155 82, 170 78"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Stack of coins on right pan */}
      <ellipse cx="152" cy="72" rx="6" ry="2" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <ellipse cx="152" cy="69" rx="6" ry="2" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <ellipse cx="152" cy="66" rx="6" ry="2" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      {/* Coin side lines */}
      <line x1="146" y1="66" x2="146" y2="72" stroke="#c97b3a" strokeWidth="1" />
      <line x1="158" y1="66" x2="158" y2="72" stroke="#c97b3a" strokeWidth="1" />

      {/* Single coin with currency symbol */}
      <circle cx="165" cy="68" r="5" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <text x="163" y="71" fontSize="6" fill="#c97b3a" fontFamily="serif">₹</text>

      {/* ─── Value indicator / equals concept (center) ───────────────────── */}
      <circle cx="100" cy="42" r="8" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <text x="97" y="46" fontSize="8" fill="#c97b3a" fontFamily="serif">≈</text>

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="45" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="170" cy="40" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="28" cy="140" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="175" cy="120" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="35" cy="100" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M25 35 Q27 30, 33 30"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M175 170 Q178 173, 180 178"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default ValuationIllustration;
