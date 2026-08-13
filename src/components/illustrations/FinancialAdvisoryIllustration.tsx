'use client';

import React from 'react';

interface FinancialAdvisoryIllustrationProps {
  className?: string;
}

/**
 * FinancialAdvisoryIllustration — A compass/lighthouse with a rising arrow/path and coin elements.
 * Suggests guidance, strategic direction, and financial growth.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const FinancialAdvisoryIllustration: React.FC<FinancialAdvisoryIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Compass outer ring ───────────────────────────────────────────── */}
      <circle
        cx="90"
        cy="100"
        r="42"
        stroke="#1a365d"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner ring */}
      <circle
        cx="90"
        cy="100"
        r="35"
        stroke="#1a365d"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* ─── Compass cardinal tick marks ──────────────────────────────────── */}
      {/* North */}
      <line x1="90" y1="58" x2="90" y2="63" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      {/* South */}
      <line x1="90" y1="137" x2="90" y2="142" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      {/* East */}
      <line x1="127" y1="100" x2="132" y2="100" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      {/* West */}
      <line x1="48" y1="100" x2="53" y2="100" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />

      {/* ─── Compass needle ───────────────────────────────────────────────── */}
      {/* North needle (gold — pointing to growth) */}
      <path
        d="M90 100 L86 92 L90 68 L94 92 Z"
        stroke="#c97b3a"
        strokeWidth="1.2"
        fill="none"
      />
      {/* South needle (navy) */}
      <path
        d="M90 100 L86 108 L90 132 L94 108 Z"
        stroke="#1a365d"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      {/* Center pivot */}
      <circle cx="90" cy="100" r="3" stroke="#c97b3a" strokeWidth="1.5" fill="none" />

      {/* ─── Rising arrow / growth path (top-right area) ──────────────────── */}
      <path
        d="M130 155 Q140 130, 145 115 Q150 100, 155 80 Q158 70, 165 55"
        stroke="#c97b3a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head */}
      <path
        d="M162 62 L165 55 L170 60"
        stroke="#c97b3a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small step markers along the path */}
      <circle cx="137" cy="138" r="2" stroke="#1a365d" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="147" cy="108" r="2" stroke="#1a365d" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="157" cy="75" r="2" stroke="#1a365d" strokeWidth="1" fill="none" opacity="0.5" />

      {/* ─── Coin elements (bottom-right) ─────────────────────────────────── */}
      {/* Coin 1 */}
      <circle cx="150" cy="165" r="12" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      <circle cx="150" cy="165" r="8" stroke="#1a365d" strokeWidth="0.8" fill="none" opacity="0.4" />
      <text x="147" y="169" fontSize="9" fontFamily="serif" fill="#c97b3a" opacity="0.8">₹</text>
      {/* Coin 2 (stacked behind) */}
      <ellipse cx="153" cy="162" rx="12" ry="4" stroke="#718096" strokeWidth="1" fill="none" opacity="0.4" />

      {/* ─── Small star / sparkle near arrow peak ─────────────────────────── */}
      <path
        d="M172 48 L173 44 L174 48 L178 49 L174 50 L173 54 L172 50 L168 49 Z"
        stroke="#c97b3a"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="38" cy="55" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="170" cy="130" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="45" cy="160" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="120" cy="42" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="55" cy="170" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M28 38 Q30 33, 36 32"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M172 178 Q175 182, 176 187"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default FinancialAdvisoryIllustration;
