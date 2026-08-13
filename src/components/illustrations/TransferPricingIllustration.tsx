'use client';

import React from 'react';

interface TransferPricingIllustrationProps {
  className?: string;
}

/**
 * TransferPricingIllustration — Two entities (buildings) connected by arrows with
 * a price tag/document between them, plus a globe element for international context.
 * Suggests pricing between related parties across jurisdictions.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const TransferPricingIllustration: React.FC<TransferPricingIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Left entity (building A) ────────────────────────────────────── */}
      <rect
        x="25"
        y="80"
        width="35"
        height="50"
        rx="2"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Building A windows */}
      <rect x="30" y="86" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="39" y="86" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="48" y="86" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="30" y="96" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="39" y="96" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="48" y="96" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="30" y="106" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="39" y="106" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="48" y="106" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      {/* Door */}
      <rect x="38" y="118" width="9" height="12" rx="1" stroke="#1a365d" strokeWidth="1" fill="none" />
      {/* Label A */}
      <text x="37" y="76" fontSize="8" fill="#1a365d" fontFamily="sans-serif" fontWeight="bold">A</text>

      {/* ─── Right entity (building B) ───────────────────────────────────── */}
      <rect
        x="140"
        y="80"
        width="35"
        height="50"
        rx="2"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Building B windows */}
      <rect x="145" y="86" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="154" y="86" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="163" y="86" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="145" y="96" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="154" y="96" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="163" y="96" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="145" y="106" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="154" y="106" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      <rect x="163" y="106" width="5" height="5" rx="0.5" stroke="#718096" strokeWidth="0.8" fill="none" />
      {/* Door */}
      <rect x="153" y="118" width="9" height="12" rx="1" stroke="#1a365d" strokeWidth="1" fill="none" />
      {/* Label B */}
      <text x="153" y="76" fontSize="8" fill="#1a365d" fontFamily="sans-serif" fontWeight="bold">B</text>

      {/* ─── Arrows connecting entities ──────────────────────────────────── */}
      {/* Top arrow (A → B) */}
      <line x1="62" y1="92" x2="138" y2="92" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M135 89 L138 92 L135 95" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Bottom arrow (B → A) */}
      <line x1="138" y1="108" x2="62" y2="108" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M65 105 L62 108 L65 111" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ─── Price tag / document in center ──────────────────────────────── */}
      <rect
        x="85"
        y="95"
        width="30"
        height="18"
        rx="2"
        stroke="#c97b3a"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Price symbol */}
      <text x="93" y="108" fontSize="9" fill="#c97b3a" fontFamily="serif">₹ $$</text>
      {/* Tag notch */}
      <circle cx="88" cy="100" r="1.5" stroke="#c97b3a" strokeWidth="0.8" fill="none" />

      {/* ─── Globe (international element, top center) ───────────────────── */}
      <circle
        cx="100"
        cy="48"
        r="20"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Globe horizontal lines (latitudes) */}
      <ellipse cx="100" cy="42" rx="18" ry="5" stroke="#718096" strokeWidth="0.7" fill="none" opacity="0.5" />
      <ellipse cx="100" cy="54" rx="18" ry="5" stroke="#718096" strokeWidth="0.7" fill="none" opacity="0.5" />
      {/* Globe vertical line (meridian) */}
      <ellipse cx="100" cy="48" rx="8" ry="19" stroke="#718096" strokeWidth="0.7" fill="none" opacity="0.5" />
      {/* Center vertical meridian */}
      <line x1="100" y1="28" x2="100" y2="68" stroke="#718096" strokeWidth="0.5" opacity="0.3" />
      {/* Equator */}
      <line x1="80" y1="48" x2="120" y2="48" stroke="#718096" strokeWidth="0.5" opacity="0.3" />

      {/* ─── Dashed connection from globe to arrows ──────────────────────── */}
      <line
        x1="100"
        y1="68"
        x2="100"
        y2="85"
        stroke="#c97b3a"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.5"
      />

      {/* ─── Ground line ─────────────────────────────────────────────────── */}
      <line x1="20" y1="132" x2="180" y2="132" stroke="#e2ddd7" strokeWidth="1" strokeLinecap="round" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="42" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="170" cy="38" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="25" cy="155" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="180" cy="145" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="20" cy="100" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M15 30 Q17 25, 23 25"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M180 170 Q183 173, 185 178"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default TransferPricingIllustration;
