'use client';

import React from 'react';

interface FEMAIllustrationProps {
  className?: string;
}

/**
 * FEMAIllustration — An RBI/government building silhouette with a shield,
 * currency exchange arrows (₹ and $), and a compliance document.
 * Suggests foreign exchange regulation and compliance.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const FEMAIllustration: React.FC<FEMAIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Government Building Silhouette ───────────────────────────────── */}
      {/* Base */}
      <rect
        x="40"
        y="130"
        width="80"
        height="8"
        rx="1"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Columns */}
      <line x1="52" y1="130" x2="52" y2="90" stroke="#1a365d" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="68" y1="130" x2="68" y2="90" stroke="#1a365d" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="84" y1="130" x2="84" y2="90" stroke="#1a365d" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="100" y1="130" x2="100" y2="90" stroke="#1a365d" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="108" y1="130" x2="108" y2="90" stroke="#1a365d" strokeWidth="1.8" strokeLinecap="round" />
      {/* Pediment (triangular top) */}
      <path
        d="M38 90 L80 65 L122 90"
        stroke="#1a365d"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Entablature */}
      <line x1="38" y1="90" x2="122" y2="90" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />

      {/* ─── Shield (on the pediment) ─────────────────────────────────────── */}
      <path
        d="M73 72 L80 68 L87 72 L87 82 Q80 88, 73 82 Z"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Shield checkmark */}
      <path d="M76 78 L79 81 L84 74" stroke="#c97b3a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

      {/* ─── Currency Exchange Arrows (right side) ────────────────────────── */}
      {/* Top arrow (₹ going right) */}
      <path
        d="M130 70 L155 70"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M150 65 L155 70 L150 75"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* ₹ symbol */}
      <text x="133" y="64" fontSize="10" fill="#1a365d" fontFamily="sans-serif" opacity="0.8">₹</text>

      {/* Bottom arrow ($ going left) */}
      <path
        d="M155 95 L130 95"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M135 90 L130 95 L135 100"
        stroke="#c97b3a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* $ symbol */}
      <text x="149" y="108" fontSize="10" fill="#c97b3a" fontFamily="sans-serif" opacity="0.8">$</text>

      {/* ─── Compliance Document (bottom-right) ───────────────────────────── */}
      <rect
        x="135"
        y="115"
        width="35"
        height="45"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Document lines */}
      <line x1="141" y1="126" x2="160" y2="126" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="141" y1="134" x2="164" y2="134" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="141" y1="142" x2="158" y2="142" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Stamp / seal circle */}
      <circle cx="157" cy="152" r="5" stroke="#c97b3a" strokeWidth="1" fill="none" opacity="0.6" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="32" cy="60" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="175" cy="55" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="28" cy="145" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="178" cy="140" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="145" cy="50" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M25 40 Q27 35, 33 35"
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

export default FEMAIllustration;
