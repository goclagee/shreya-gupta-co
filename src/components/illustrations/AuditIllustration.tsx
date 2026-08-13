'use client';

import React from 'react';

interface AuditIllustrationProps {
  className?: string;
}

/**
 * AuditIllustration — Magnifying glass over a document/ledger with checkmark indicators.
 * Suggests inspection, verification, and audit assurance.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const AuditIllustration: React.FC<AuditIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Document / Ledger ────────────────────────────────────────────── */}
      <rect
        x="45"
        y="40"
        width="80"
        height="110"
        rx="4"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Document header line */}
      <line
        x1="55"
        y1="55"
        x2="95"
        y2="55"
        stroke="#1a365d"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Ledger rows */}
      <line x1="55" y1="70" x2="115" y2="70" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="55" y1="82" x2="115" y2="82" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="55" y1="94" x2="115" y2="94" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="55" y1="106" x2="100" y2="106" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="55" y1="118" x2="90" y2="118" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="55" y1="130" x2="80" y2="130" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Checkmarks beside rows */}
      <path d="M108 68 L111 72 L117 65" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M108 80 L111 84 L117 77" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M108 92 L111 96 L117 89" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ─── Magnifying glass (overlapping document, bottom-right) ─────────── */}
      {/* Glass circle */}
      <circle
        cx="130"
        cy="130"
        r="28"
        stroke="#1a365d"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Inner lens reflection arc */}
      <path
        d="M115 118 Q120 112, 128 112"
        stroke="#1a365d"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Handle */}
      <line
        x1="150"
        y1="150"
        x2="168"
        y2="168"
        stroke="#1a365d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Handle grip detail */}
      <line
        x1="160"
        y1="160"
        x2="170"
        y2="170"
        stroke="#c97b3a"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* ─── Small verification badge (top-right corner) ──────────────────── */}
      <circle cx="140" cy="50" r="12" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      <path d="M134 50 L138 54 L147 45" stroke="#c97b3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="38" cy="45" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="160" cy="38" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="35" cy="155" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="175" cy="95" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="42" cy="100" r="1" fill="#718096" opacity="0.3" />

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

export default AuditIllustration;
