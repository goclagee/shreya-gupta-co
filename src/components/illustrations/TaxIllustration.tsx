'use client';

import React from 'react';

interface TaxIllustrationProps {
  className?: string;
}

/**
 * TaxIllustration — Calculator with coins/rupee symbol and tax form document.
 * Suggests tax computation, planning, and financial advisory.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const TaxIllustration: React.FC<TaxIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Tax Form Document (background, left) ─────────────────────────── */}
      <rect
        x="30"
        y="50"
        width="65"
        height="90"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {/* Form header */}
      <line x1="40" y1="63" x2="72" y2="63" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Form lines */}
      <line x1="40" y1="76" x2="85" y2="76" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="40" y1="86" x2="85" y2="86" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="40" y1="96" x2="85" y2="96" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="40" y1="106" x2="70" y2="106" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Tax form checkbox indicators */}
      <rect x="78" y="73" width="6" height="6" rx="1" stroke="#c97b3a" strokeWidth="1" fill="none" opacity="0.6" />
      <rect x="78" y="83" width="6" height="6" rx="1" stroke="#c97b3a" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M79 86 L80.5 88 L83.5 84" stroke="#c97b3a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Signature line at bottom */}
      <line x1="40" y1="128" x2="80" y2="128" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M45 126 Q50 120, 55 125 T65 123" stroke="#1a365d" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* ─── Calculator (right, foreground) ───────────────────────────────── */}
      <rect
        x="95"
        y="55"
        width="70"
        height="95"
        rx="5"
        stroke="#1a365d"
        strokeWidth="2"
        fill="none"
      />
      {/* Calculator screen */}
      <rect
        x="103"
        y="63"
        width="54"
        height="22"
        rx="2"
        stroke="#1a365d"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      {/* Display numbers */}
      <text
        x="145"
        y="79"
        fontFamily="monospace"
        fontSize="10"
        fill="#1a365d"
        opacity="0.6"
        textAnchor="end"
      >
        ₹2,45,000
      </text>

      {/* Calculator buttons — grid */}
      {/* Row 1 */}
      <rect x="103" y="92" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="118" y="92" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="133" y="92" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="148" y="92" width="11" height="11" rx="2" stroke="#c97b3a" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* Row 2 */}
      <rect x="103" y="107" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="118" y="107" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="133" y="107" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="148" y="107" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Row 3 */}
      <rect x="103" y="122" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="118" y="122" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="133" y="122" width="11" height="11" rx="2" stroke="#718096" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="148" y="122" width="11" height="11" rx="2" stroke="#c97b3a" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* Equals button — wider */}
      <rect x="103" y="137" width="26" height="11" rx="2" stroke="#c97b3a" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* ─── Coins Stack (bottom-left) ────────────────────────────────────── */}
      {/* Stacked coins with ellipses */}
      <ellipse cx="55" cy="168" rx="16" ry="6" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      <ellipse cx="55" cy="163" rx="16" ry="6" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      <ellipse cx="55" cy="158" rx="16" ry="6" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      {/* Coin side edges */}
      <line x1="39" y1="158" x2="39" y2="168" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="71" y1="158" x2="71" y2="168" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />

      {/* ─── Rupee symbol (floating, top-left accent) ─────────────────────── */}
      <g opacity="0.6">
        <path
          d="M42 30 L52 30 M42 36 L52 36 M44 30 Q50 33, 44 36 L52 48"
          stroke="#c97b3a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ─── Percentage symbol (top-right decorative) ─────────────────────── */}
      <g opacity="0.4">
        <circle cx="155" cy="35" r="4" stroke="#1a365d" strokeWidth="1" fill="none" />
        <circle cx="168" cy="48" r="4" stroke="#1a365d" strokeWidth="1" fill="none" />
        <line x1="167" y1="33" x2="155" y2="50" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="25" cy="80" r="1.5" fill="#c97b3a" opacity="0.35" />
      <circle cx="180" cy="70" r="1.5" fill="#1a365d" opacity="0.25" />
      <circle cx="90" cy="170" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="170" cy="160" r="2" fill="#c97b3a" opacity="0.3" />
      <circle cx="130" cy="175" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle decorative arcs ───────────────────────────────────────── */}
      <path
        d="M20 45 Q23 40, 28 40"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M175 170 Q178 174, 180 180"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default TaxIllustration;
