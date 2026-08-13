'use client';

import React from 'react';

interface AccountingIllustrationProps {
  className?: string;
}

/**
 * AccountingIllustration — An open ledger/book with numbers, a pencil, and a bar chart.
 * Suggests precise record-keeping, data accuracy, and financial documentation.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const AccountingIllustration: React.FC<AccountingIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Open Ledger / Book ───────────────────────────────────────────── */}
      {/* Left page */}
      <path
        d="M40 55 L40 150 Q70 145, 100 150 L100 55 Q70 50, 40 55 Z"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Right page */}
      <path
        d="M100 55 L100 150 Q130 145, 160 150 L160 55 Q130 50, 100 55 Z"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Spine line */}
      <line x1="100" y1="52" x2="100" y2="152" stroke="#1a365d" strokeWidth="1.2" opacity="0.5" />

      {/* ─── Numbers / Text on left page ──────────────────────────────────── */}
      <text x="52" y="72" fontSize="7" fontFamily="monospace" fill="#1a365d" opacity="0.7">1,250</text>
      <text x="52" y="85" fontSize="7" fontFamily="monospace" fill="#1a365d" opacity="0.7">3,480</text>
      <text x="52" y="98" fontSize="7" fontFamily="monospace" fill="#1a365d" opacity="0.7">7,920</text>
      <text x="52" y="111" fontSize="7" fontFamily="monospace" fill="#1a365d" opacity="0.7">2,150</text>
      {/* Ledger lines on left page */}
      <line x1="50" y1="76" x2="92" y2="76" stroke="#718096" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="89" x2="92" y2="89" stroke="#718096" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="102" x2="92" y2="102" stroke="#718096" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="115" x2="92" y2="115" stroke="#718096" strokeWidth="0.5" opacity="0.4" />
      {/* Vertical column separator */}
      <line x1="78" y1="62" x2="78" y2="120" stroke="#718096" strokeWidth="0.5" opacity="0.3" />

      {/* ─── Lines on right page ──────────────────────────────────────────── */}
      <line x1="108" y1="68" x2="148" y2="68" stroke="#718096" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line x1="108" y1="80" x2="150" y2="80" stroke="#718096" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line x1="108" y1="92" x2="145" y2="92" stroke="#718096" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line x1="108" y1="104" x2="142" y2="104" stroke="#718096" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      {/* Total underline */}
      <line x1="108" y1="118" x2="150" y2="118" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <line x1="108" y1="121" x2="150" y2="121" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

      {/* ─── Bar Chart (top-right area) ───────────────────────────────────── */}
      <rect x="130" y="30" width="8" height="18" rx="1" stroke="#1a365d" strokeWidth="1.2" fill="none" />
      <rect x="142" y="24" width="8" height="24" rx="1" stroke="#1a365d" strokeWidth="1.2" fill="none" />
      <rect x="154" y="20" width="8" height="28" rx="1" stroke="#c97b3a" strokeWidth="1.4" fill="none" />
      {/* Chart baseline */}
      <line x1="127" y1="48" x2="165" y2="48" stroke="#1a365d" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* ─── Pencil (bottom-left, angled) ─────────────────────────────────── */}
      {/* Pencil body */}
      <line x1="32" y1="170" x2="70" y2="140" stroke="#c97b3a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pencil tip */}
      <path d="M70 140 L74 137 L72 142 Z" fill="#1a365d" opacity="0.8" />
      {/* Pencil eraser */}
      <line x1="32" y1="170" x2="28" y2="173" stroke="#718096" strokeWidth="3" strokeLinecap="round" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="30" cy="42" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="172" cy="60" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="25" cy="130" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="178" cy="140" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="90" cy="170" r="1" fill="#718096" opacity="0.3" />
      <circle cx="145" cy="165" r="1.5" fill="#1a365d" opacity="0.25" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M25 30 Q28 25, 34 25"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M175 170 Q178 174, 178 180"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default AccountingIllustration;
