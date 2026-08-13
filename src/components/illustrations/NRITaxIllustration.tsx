'use client';

import React from 'react';

interface NRITaxIllustrationProps {
  className?: string;
}

/**
 * NRITaxIllustration — A globe with India highlighted/emphasized, an airplane,
 * and a tax document or rupee symbol connecting across distance.
 * Suggests overseas Indians managing India-based finances.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const NRITaxIllustration: React.FC<NRITaxIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Globe ────────────────────────────────────────────────────────── */}
      <circle
        cx="75"
        cy="100"
        r="38"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Globe latitude lines */}
      <ellipse cx="75" cy="100" rx="38" ry="15" stroke="#718096" strokeWidth="0.8" fill="none" opacity="0.4" />
      <ellipse cx="75" cy="100" rx="38" ry="28" stroke="#718096" strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Globe longitude line (vertical) */}
      <ellipse cx="75" cy="100" rx="15" ry="38" stroke="#718096" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* India outline (simplified triangular shape, emphasized) */}
      <path
        d="M78 85 L85 92 L83 105 L78 110 L73 105 L72 95 Z"
        stroke="#c97b3a"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      {/* India dot marker */}
      <circle cx="78" cy="98" r="2" fill="#c97b3a" opacity="0.6" />

      {/* ─── Airplane (top-right, flying away from globe) ─────────────────── */}
      <path
        d="M120 55 L140 48 L145 50 L132 58 L148 62 L150 65 L130 62 L125 70 L122 69 L124 60 L115 58 Z"
        stroke="#1a365d"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Flight trail (dashed arc from globe to airplane) */}
      <path
        d="M105 78 Q118 65, 118 57"
        stroke="#718096"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="3 3"
        fill="none"
        opacity="0.5"
      />

      {/* ─── Tax Document with ₹ (bottom-right) ──────────────────────────── */}
      <rect
        x="135"
        y="100"
        width="38"
        height="52"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Document header */}
      <line x1="141" y1="112" x2="162" y2="112" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Document lines */}
      <line x1="141" y1="122" x2="167" y2="122" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="141" y1="130" x2="165" y2="130" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="141" y1="138" x2="160" y2="138" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* ₹ symbol on document */}
      <text x="149" y="150" fontSize="11" fill="#c97b3a" fontFamily="sans-serif" opacity="0.8">₹</text>

      {/* ─── Connecting dashed line (globe to document) ───────────────────── */}
      <path
        d="M113 105 Q125 108, 135 110"
        stroke="#c97b3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.6"
      />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="55" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="165" cy="40" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="28" cy="150" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="180" cy="88" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="45" cy="165" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M22 38 Q24 33, 30 33"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M178 168 Q181 171, 183 176"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default NRITaxIllustration;
