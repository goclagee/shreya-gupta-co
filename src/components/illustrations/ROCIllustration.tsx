'use client';

import React from 'react';

interface ROCIllustrationProps {
  className?: string;
}

/**
 * ROCIllustration — A filing cabinet/folder stack with a government seal,
 * clock showing timeliness, and a form with checkmarks.
 * Suggests regulatory filings and compliance deadlines.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const ROCIllustration: React.FC<ROCIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Filing Cabinet / Folder Stack ────────────────────────────────── */}
      {/* Bottom folder */}
      <rect
        x="35"
        y="95"
        width="60"
        height="50"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Middle folder (offset) */}
      <rect
        x="38"
        y="85"
        width="56"
        height="12"
        rx="2"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Top folder tab */}
      <path
        d="M42 85 L42 78 Q42 76, 44 76 L60 76 Q62 76, 63 78 L63 85"
        stroke="#c97b3a"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Folder label lines */}
      <line x1="45" y1="108" x2="70" y2="108" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="45" y1="116" x2="85" y2="116" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="45" y1="124" x2="80" y2="124" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="45" y1="132" x2="65" y2="132" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Cabinet drawer handle */}
      <rect x="57" y="136" width="16" height="4" rx="2" stroke="#1a365d" strokeWidth="1" fill="none" opacity="0.5" />

      {/* ─── Government Seal ──────────────────────────────────────────────── */}
      {/* Outer ring */}
      <circle cx="145" cy="60" r="20" stroke="#1a365d" strokeWidth="1.8" fill="none" />
      {/* Inner ring */}
      <circle cx="145" cy="60" r="14" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      {/* Star/emblem inside seal */}
      <path
        d="M145 48 L147 54 L153 54 L148 58 L150 64 L145 60 L140 64 L142 58 L137 54 L143 54 Z"
        stroke="#1a365d"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Seal notches */}
      <circle cx="145" cy="60" r="22" stroke="#e2ddd7" strokeWidth="1" fill="none" strokeDasharray="3 4" />

      {/* ─── Clock (Timeliness) ───────────────────────────────────────────── */}
      {/* Clock face */}
      <circle cx="150" cy="130" r="22" stroke="#1a365d" strokeWidth="1.8" fill="none" />
      {/* Hour markers */}
      <line x1="150" y1="110" x2="150" y2="113" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="150" y1="147" x2="150" y2="150" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="130" y1="130" x2="133" y2="130" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="167" y1="130" x2="170" y2="130" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hour hand */}
      <line x1="150" y1="130" x2="150" y2="118" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="150" y1="130" x2="161" y2="124" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="150" cy="130" r="2" stroke="#c97b3a" strokeWidth="1.5" fill="none" />

      {/* ─── Form with Checkmarks ─────────────────────────────────────────── */}
      <rect
        x="35"
        y="150"
        width="55"
        height="30"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Checkbox rows */}
      <rect x="40" y="155" width="6" height="6" rx="1" stroke="#718096" strokeWidth="1" fill="none" />
      <path d="M41 158 L43 160 L46 156" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="50" y1="158" x2="75" y2="158" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      <rect x="40" y="165" width="6" height="6" rx="1" stroke="#718096" strokeWidth="1" fill="none" />
      <path d="M41 168 L43 170 L46 166" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="50" y1="168" x2="80" y2="168" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      <rect x="40" y="175" width="6" height="6" rx="1" stroke="#718096" strokeWidth="1" fill="none" />
      <line x1="50" y1="178" x2="70" y2="178" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="70" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="180" cy="45" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="28" cy="150" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="178" cy="165" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="110" cy="95" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M25 38 Q27 33, 33 33"
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

export default ROCIllustration;
