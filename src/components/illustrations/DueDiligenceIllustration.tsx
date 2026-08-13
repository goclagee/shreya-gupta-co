'use client';

import React from 'react';

interface DueDiligenceIllustrationProps {
  className?: string;
}

/**
 * DueDiligenceIllustration — A stack of documents with a magnifying glass and
 * checkmarks/X marks, plus a clipboard with a checklist.
 * Suggests thorough investigation and risk analysis.
 * Static SVG — animations are handled by the ServiceCard parent.
 */
const DueDiligenceIllustration: React.FC<DueDiligenceIllustrationProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ─── Clipboard body ──────────────────────────────────────────────── */}
      <rect
        x="50"
        y="45"
        width="72"
        height="105"
        rx="4"
        stroke="#1a365d"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Clipboard clip */}
      <rect
        x="72"
        y="38"
        width="28"
        height="12"
        rx="3"
        stroke="#1a365d"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="86" cy="44" r="3" stroke="#1a365d" strokeWidth="1.2" fill="none" />

      {/* ─── Stacked documents behind clipboard ──────────────────────────── */}
      <rect
        x="55"
        y="50"
        width="68"
        height="95"
        rx="2"
        stroke="#718096"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
      <rect
        x="58"
        y="53"
        width="64"
        height="90"
        rx="2"
        stroke="#718096"
        strokeWidth="0.6"
        fill="none"
        opacity="0.2"
      />

      {/* ─── Checklist items ─────────────────────────────────────────────── */}
      {/* Item 1 — checkmark */}
      <rect x="60" y="62" width="8" height="8" rx="1.5" stroke="#1a365d" strokeWidth="1" fill="none" />
      <path d="M62 66 L64 68 L69 63" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="74" y1="66" x2="108" y2="66" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Item 2 — checkmark */}
      <rect x="60" y="78" width="8" height="8" rx="1.5" stroke="#1a365d" strokeWidth="1" fill="none" />
      <path d="M62 82 L64 84 L69 79" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="74" y1="82" x2="112" y2="82" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Item 3 — X mark (risk found) */}
      <rect x="60" y="94" width="8" height="8" rx="1.5" stroke="#1a365d" strokeWidth="1" fill="none" />
      <path d="M62 96 L66 100 M66 96 L62 100" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="74" y1="98" x2="105" y2="98" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Item 4 — checkmark */}
      <rect x="60" y="110" width="8" height="8" rx="1.5" stroke="#1a365d" strokeWidth="1" fill="none" />
      <path d="M62 114 L64 116 L69 111" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="74" y1="114" x2="100" y2="114" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Item 5 — X mark (risk found) */}
      <rect x="60" y="126" width="8" height="8" rx="1.5" stroke="#1a365d" strokeWidth="1" fill="none" />
      <path d="M62 128 L66 132 M66 128 L62 132" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="74" y1="130" x2="110" y2="130" stroke="#718096" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* ─── Magnifying glass (overlapping, bottom-right) ────────────────── */}
      <circle
        cx="140"
        cy="135"
        r="22"
        stroke="#1a365d"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner lens reflection */}
      <path
        d="M128 125 Q132 120, 138 120"
        stroke="#1a365d"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Handle */}
      <line
        x1="156"
        y1="151"
        x2="170"
        y2="165"
        stroke="#1a365d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Handle grip */}
      <line
        x1="163"
        y1="158"
        x2="172"
        y2="167"
        stroke="#c97b3a"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* ─── Small warning/risk indicator (top-right) ────────────────────── */}
      <path
        d="M148 45 L155 58 L141 58 Z"
        stroke="#c97b3a"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="148" y1="50" x2="148" y2="54" stroke="#c97b3a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="148" cy="56" r="0.8" fill="#c97b3a" />

      {/* ─── Decorative dots ──────────────────────────────────────────────── */}
      <circle cx="38" cy="50" r="1.5" fill="#c97b3a" opacity="0.4" />
      <circle cx="165" cy="42" r="1.5" fill="#1a365d" opacity="0.3" />
      <circle cx="35" cy="160" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="178" cy="100" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="42" cy="110" r="1" fill="#718096" opacity="0.3" />

      {/* ─── Subtle corner accent lines ───────────────────────────────────── */}
      <path
        d="M28 38 Q30 33, 36 33"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M172 178 Q175 181, 177 186"
        stroke="#e2ddd7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default DueDiligenceIllustration;
