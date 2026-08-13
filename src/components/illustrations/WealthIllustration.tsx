'use client';

import React from 'react';

interface WealthIllustrationProps {
  className?: string;
}

/**
 * WealthIllustration — A tree with coin/leaf shapes (money tree concept),
 * a piggy bank, and an upward arrow.
 * Suggests wealth accumulation, protection, and growth over time.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const WealthIllustration: React.FC<WealthIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Money Tree trunk ─────────────────────────────────────────────── */}
      <line x1="100" y1="130" x2="100" y2="80" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" />
      {/* Branches */}
      <path d="M100 105 Q88 98, 78 102" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M100 105 Q112 98, 122 102" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M100 90 Q85 82, 72 87" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M100 90 Q115 82, 128 87" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M100 80 Q92 72, 85 74" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M100 80 Q108 72, 115 74" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* ─── Coin/leaf shapes on branches ─────────────────────────────────── */}
      {/* Coins (circles with inner detail) */}
      <circle cx="72" cy="87" r="7" stroke="#c97b3a" strokeWidth="1.3" fill="none" />
      <circle cx="72" cy="87" r="4" stroke="#c97b3a" strokeWidth="0.7" fill="none" opacity="0.5" />

      <circle cx="128" cy="87" r="7" stroke="#c97b3a" strokeWidth="1.3" fill="none" />
      <circle cx="128" cy="87" r="4" stroke="#c97b3a" strokeWidth="0.7" fill="none" opacity="0.5" />

      <circle cx="78" cy="102" r="6" stroke="#c97b3a" strokeWidth="1.3" fill="none" />
      <circle cx="78" cy="102" r="3.5" stroke="#c97b3a" strokeWidth="0.7" fill="none" opacity="0.5" />

      <circle cx="122" cy="102" r="6" stroke="#c97b3a" strokeWidth="1.3" fill="none" />
      <circle cx="122" cy="102" r="3.5" stroke="#c97b3a" strokeWidth="0.7" fill="none" opacity="0.5" />

      <circle cx="85" cy="74" r="5.5" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <circle cx="85" cy="74" r="3" stroke="#c97b3a" strokeWidth="0.7" fill="none" opacity="0.5" />

      <circle cx="115" cy="74" r="5.5" stroke="#c97b3a" strokeWidth="1.2" fill="none" />
      <circle cx="115" cy="74" r="3" stroke="#c97b3a" strokeWidth="0.7" fill="none" opacity="0.5" />

      {/* Top coin (crown of tree) */}
      <circle cx="100" cy="65" r="8" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="65" r="5" stroke="#c97b3a" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* ─── Pot / base for tree ───────────────────────────────────────────── */}
      <path d="M88 130 L86 145 Q86 148, 90 148 L110 148 Q114 148, 114 145 L112 130 Z" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      <line x1="87" y1="133" x2="113" y2="133" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* ─── Piggy bank (bottom left) ─────────────────────────────────────── */}
      {/* Body */}
      <ellipse cx="42" cy="155" rx="18" ry="14" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      {/* Snout */}
      <ellipse cx="26" cy="153" rx="4" ry="3" stroke="#1a365d" strokeWidth="1.2" fill="none" />
      {/* Eye */}
      <circle cx="35" cy="149" r="1.5" fill="#1a365d" opacity="0.6" />
      {/* Ear */}
      <path d="M38 141 Q40 137, 44 139" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <line x1="33" y1="168" x2="33" y2="174" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="168" x2="40" y2="174" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="48" y1="168" x2="48" y2="174" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="54" y1="167" x2="54" y2="173" stroke="#1a365d" strokeWidth="1.3" strokeLinecap="round" />
      {/* Coin slot */}
      <line x1="39" y1="141" x2="46" y2="141" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />

      {/* ─── Upward arrow (right side — growth) ────────────────────────────── */}
      <line x1="160" y1="165" x2="160" y2="120" stroke="#c97b3a" strokeWidth="2" strokeLinecap="round" />
      <polyline
        points="150,132 160,120 170,132"
        stroke="#c97b3a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small tick marks along arrow */}
      <line x1="156" y1="155" x2="164" y2="155" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <line x1="156" y1="145" x2="164" y2="145" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <line x1="156" y1="135" x2="164" y2="135" stroke="#718096" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="75" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="170" cy="60" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="172" cy="180" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="25" cy="130" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="145" cy="100" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M20 35 Q22 30, 28 30"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M178 180 Q181 183, 183 188"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default WealthIllustration;
