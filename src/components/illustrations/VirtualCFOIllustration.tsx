'use client';

import React from 'react';

interface VirtualCFOIllustrationProps {
  className?: string;
}

/**
 * VirtualCFOIllustration — A person silhouette behind a screen/dashboard with charts,
 * a cloud element suggesting remote/virtual, and a briefcase.
 * Suggests strategic financial leadership on a flexible, virtual basis.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const VirtualCFOIllustration: React.FC<VirtualCFOIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Monitor / Dashboard Screen ───────────────────────────────────── */}
      <rect
        x="50"
        y="55"
        width="100"
        height="70"
        rx="4"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Screen stand */}
      <line x1="100" y1="125" x2="100" y2="138" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="82" y1="138" x2="118" y2="138" stroke="#1a365d" strokeWidth="1.8" strokeLinecap="round" />

      {/* ─── Dashboard chart (bar chart) ──────────────────────────────────── */}
      <rect x="60" y="95" width="6" height="20" rx="1" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <rect x="70" y="88" width="6" height="27" rx="1" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <rect x="80" y="82" width="6" height="33" rx="1" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <rect x="90" y="78" width="6" height="37" rx="1" stroke="#c97b3a" strokeWidth="1.2" fill="none" />

      {/* Dashboard line chart (right side of screen) */}
      <polyline
        points="105,100 112,92 120,96 128,84 136,80 142,75"
        stroke="#1a365d"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Chart axis lines */}
      <line x1="105" y1="105" x2="142" y2="105" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <line x1="105" y1="105" x2="105" y2="72" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Screen header line */}
      <line x1="58" y1="65" x2="90" y2="65" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* ─── Person silhouette (behind the screen, head and shoulders) ──── */}
      {/* Head */}
      <circle cx="100" cy="38" r="10" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      {/* Shoulders */}
      <path
        d="M82 55 Q100 48, 118 55"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ─── Cloud element (virtual/remote) ───────────────────────────────── */}
      <path
        d="M148 48 Q145 40, 152 38 Q155 32, 163 34 Q170 30, 175 36 Q182 35, 182 42 Q185 46, 180 48 Z"
        stroke="#718096"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      {/* Small signal waves from cloud */}
      <path d="M162 50 Q164 53, 162 56" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M166 50 Q169 54, 166 58" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* ─── Briefcase (bottom left) ──────────────────────────────────────── */}
      <rect x="28" y="145" width="30" height="22" rx="3" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      {/* Briefcase handle */}
      <path d="M37 145 L37 140 Q37 137, 40 137 L46 137 Q49 137, 49 140 L49 145" stroke="#1a365d" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Briefcase latch */}
      <rect x="40" y="153" width="6" height="4" rx="1" stroke="#c97b3a" strokeWidth="1" fill="none" />

      {/* ─── Dollar sign accent ────────────────────────────────────────────── */}
      <text x="155" y="118" fontFamily="serif" fontSize="14" stroke="#c97b3a" strokeWidth="0.5" fill="none" opacity="0.6">$</text>

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="60" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="175" cy="145" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="45" cy="180" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="165" cy="165" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="25" cy="110" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M22 30 Q24 25, 30 25"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M175 178 Q178 181, 180 186"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default VirtualCFOIllustration;
