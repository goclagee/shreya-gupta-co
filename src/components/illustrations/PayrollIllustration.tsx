'use client';

import React from 'react';

interface PayrollIllustrationProps {
  className?: string;
}

/**
 * PayrollIllustration — A payslip/document with salary figures, a calendar, and
 * people/team figures. Suggests employee compensation management and payroll processing.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const PayrollIllustration: React.FC<PayrollIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Payslip / Document ───────────────────────────────────────────── */}
      <rect
        x="35"
        y="40"
        width="70"
        height="95"
        rx="4"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Payslip header */}
      <line x1="45" y1="55" x2="85" y2="55" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Divider */}
      <line x1="42" y1="63" x2="98" y2="63" stroke="#e2ddd7" strokeWidth="1" strokeLinecap="round" />
      {/* Salary rows — labels */}
      <line x1="45" y1="73" x2="68" y2="73" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="45" y1="83" x2="63" y2="83" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="45" y1="93" x2="70" y2="93" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="45" y1="103" x2="60" y2="103" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Salary rows — amounts (right-aligned) */}
      <line x1="80" y1="73" x2="98" y2="73" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <line x1="83" y1="83" x2="98" y2="83" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <line x1="82" y1="93" x2="98" y2="93" stroke="#c97b3a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      {/* Total line */}
      <line x1="42" y1="110" x2="98" y2="110" stroke="#1a365d" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="72" y1="118" x2="98" y2="118" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      {/* Rupee symbol */}
      <text x="74" y="105" fontSize="10" fill="#c97b3a" opacity="0.7" fontFamily="serif">₹</text>

      {/* ─── Calendar ─────────────────────────────────────────────────────── */}
      <rect
        x="120"
        y="40"
        width="50"
        height="50"
        rx="4"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Calendar header bar */}
      <line x1="120" y1="52" x2="170" y2="52" stroke="#1a365d" strokeWidth="1.5" strokeLinecap="round" />
      {/* Calendar hooks */}
      <line x1="132" y1="37" x2="132" y2="43" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="158" y1="37" x2="158" y2="43" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Day grid dots */}
      <circle cx="130" cy="60" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="138" cy="60" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="146" cy="60" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="154" cy="60" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="162" cy="60" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="130" cy="68" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="138" cy="68" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="146" cy="68" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="154" cy="68" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="162" cy="68" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="130" cy="76" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="138" cy="76" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="146" cy="76" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="154" cy="76" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="162" cy="76" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="130" cy="84" r="1.5" fill="#718096" opacity="0.4" />
      <circle cx="138" cy="84" r="1.5" fill="#718096" opacity="0.4" />
      {/* Highlighted date (payday) */}
      <circle cx="154" cy="76" r="4" stroke="#c97b3a" strokeWidth="1.5" fill="none" />

      {/* ─── People / Team Figures ────────────────────────────────────────── */}
      {/* Person 1 (left) */}
      <circle cx="130" cy="115" r="6" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      <path
        d="M122 135 Q122 125, 130 123 Q138 125, 138 135"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Person 2 (center) */}
      <circle cx="150" cy="112" r="7" stroke="#1a365d" strokeWidth="1.8" fill="none" />
      <path
        d="M140 135 Q140 123, 150 121 Q160 123, 160 135"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Person 3 (right) */}
      <circle cx="170" cy="115" r="6" stroke="#1a365d" strokeWidth="1.5" fill="none" />
      <path
        d="M162 135 Q162 125, 170 123 Q178 125, 178 135"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ─── Connecting element — coins / money ───────────────────────────── */}
      <circle cx="60" cy="150" r="8" stroke="#c97b3a" strokeWidth="1.5" fill="none" />
      <text x="57" y="154" fontSize="9" fill="#c97b3a" fontFamily="serif">₹</text>
      <circle cx="78" cy="155" r="6" stroke="#c97b3a" strokeWidth="1.2" fill="none" opacity="0.6" />
      <circle cx="92" cy="152" r="5" stroke="#c97b3a" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Arrow from payslip to people */}
      <path
        d="M105 100 Q115 100, 120 105"
        stroke="#718096"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="3 2"
        fill="none"
        opacity="0.5"
      />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="28" cy="45" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="185" cy="38" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="30" cy="170" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="180" cy="150" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="115" cy="155" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M25 32 Q27 27, 33 27"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M175 172 Q178 175, 180 180"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default PayrollIllustration;
