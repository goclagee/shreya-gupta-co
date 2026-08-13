'use client';

import React from 'react';

interface CompanyRegIllustrationProps {
  className?: string;
}

/**
 * CompanyRegIllustration — Certificate/seal document with a stamp and building silhouette.
 * Suggests official registration, incorporation, and legal formalities.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const CompanyRegIllustration: React.FC<CompanyRegIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Building Silhouette (background, left) ───────────────────────── */}
      <g opacity="0.3">
        {/* Main building */}
        <path
          d="M25 160 L25 80 Q27 75, 32 75 L55 75 Q60 75, 62 80 L62 160"
          stroke="#1a365d"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Building dome/pediment */}
        <path
          d="M30 75 Q43 60, 57 75"
          stroke="#1a365d"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Pillar details */}
        <line x1="33" y1="100" x2="33" y2="155" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" />
        <line x1="43" y1="100" x2="43" y2="155" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" />
        <line x1="53" y1="100" x2="53" y2="155" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" />
        {/* Door */}
        <path
          d="M38 160 L38 140 Q43 135, 48 140 L48 160"
          stroke="#1a365d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Flag on top */}
        <line x1="43" y1="60" x2="43" y2="48" stroke="#1a365d" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M43 48 L53 52 L43 56" stroke="#c97b3a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* ─── Certificate Document (main, center-right) ────────────────────── */}
      <rect
        x="65"
        y="42"
        width="90"
        height="115"
        rx="4"
        stroke="#1a365d"
        strokeWidth="2"
        fill="none"
      />
      {/* Certificate inner border */}
      <rect
        x="72"
        y="49"
        width="76"
        height="101"
        rx="2"
        stroke="#1a365d"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
      {/* Certificate header ornament */}
      <path
        d="M90 58 Q110 52, 130 58"
        stroke="#c97b3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M95 62 Q110 57, 125 62"
        stroke="#c97b3a"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Certificate title lines */}
      <line x1="85" y1="72" x2="135" y2="72" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="92" y1="80" x2="128" y2="80" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Certificate body text lines */}
      <line x1="80" y1="92" x2="140" y2="92" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <line x1="80" y1="100" x2="140" y2="100" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <line x1="80" y1="108" x2="130" y2="108" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <line x1="80" y1="116" x2="125" y2="116" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

      {/* ─── Official Seal / Stamp (bottom-right of certificate) ──────────── */}
      <circle
        cx="132"
        cy="138"
        r="14"
        stroke="#c97b3a"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="132"
        cy="138"
        r="10"
        stroke="#c97b3a"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* Star inside seal */}
      <path
        d="M132 130 L134 135 L139 135 L135 138 L137 143 L132 140 L127 143 L129 138 L125 135 L130 135Z"
        stroke="#c97b3a"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ─── Rubber Stamp (angled, overlapping bottom) ────────────────────── */}
      <g transform="rotate(-15, 75, 155)">
        {/* Stamp handle */}
        <rect
          x="60"
          y="145"
          width="30"
          height="12"
          rx="2"
          stroke="#1a365d"
          strokeWidth="1.8"
          fill="none"
        />
        {/* Stamp base */}
        <rect
          x="57"
          y="157"
          width="36"
          height="6"
          rx="1"
          stroke="#1a365d"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Stamp grip detail */}
        <line x1="68" y1="148" x2="68" y2="154" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="75" y1="148" x2="75" y2="154" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="82" y1="148" x2="82" y2="154" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* ─── "Approved" stamp mark impression ─────────────────────────────── */}
      <rect
        x="78"
        y="125"
        width="30"
        height="14"
        rx="2"
        stroke="#c97b3a"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
        transform="rotate(-8, 93, 132)"
      />

      {/* ─── Ribbon/tassel hanging from certificate (bottom) ──────────────── */}
      <path
        d="M107 157 L103 172 L107 168 L111 172 L107 157"
        stroke="#c97b3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M113 157 L109 172 L113 168 L117 172 L113 157"
        stroke="#1a365d"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="165" cy="45" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="20" cy="40" r="1.5" fill="#1a365d" opacity="0.25" />
      <circle cx="175" cy="120" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="170" cy="170" r="1.5" fill="#c97b3a" opacity="0.35" />
      <circle cx="25" cy="175" r="1.5" fill="#718096" opacity="0.25" />

      {/* ─── Subtle corner accents ────────────────────────────────────────── */}
      <path
        d="M175 35 Q178 32, 183 32"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18 165 Q15 168, 15 173"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default CompanyRegIllustration;
