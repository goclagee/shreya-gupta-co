import React from 'react';

/**
 * DecorativeElements — Background SVG components used for visual depth.
 * All components use muted colors (opacity 0.1-0.3) from the design system.
 * These are purely decorative and hidden from assistive technology.
 */

interface DecorativeProps {
  className?: string;
}

/**
 * FloatingDots — A collection of decorative dots/circles at various sizes
 * scattered randomly. Used as background scatter on sections.
 */
export const FloatingDots: React.FC<DecorativeProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Navy dots — various sizes */}
      <circle cx="45" cy="30" r="3" fill="#1a365d" opacity="0.15" />
      <circle cx="120" cy="65" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="310" cy="40" r="4" fill="#1a365d" opacity="0.1" />
      <circle cx="370" cy="110" r="2.5" fill="#1a365d" opacity="0.18" />
      <circle cx="80" cy="180" r="3.5" fill="#1a365d" opacity="0.12" />
      <circle cx="250" cy="200" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="180" cy="260" r="4" fill="#1a365d" opacity="0.1" />
      <circle cx="340" cy="250" r="3" fill="#1a365d" opacity="0.15" />
      <circle cx="30" cy="130" r="2.5" fill="#1a365d" opacity="0.12" />
      <circle cx="200" cy="120" r="2" fill="#1a365d" opacity="0.18" />

      {/* Gold dots — various sizes */}
      <circle cx="90" cy="50" r="2.5" fill="#c97b3a" opacity="0.2" />
      <circle cx="220" cy="30" r="3" fill="#c97b3a" opacity="0.15" />
      <circle cx="350" cy="70" r="2" fill="#c97b3a" opacity="0.25" />
      <circle cx="160" cy="140" r="4" fill="#c97b3a" opacity="0.1" />
      <circle cx="60" cy="240" r="2.5" fill="#c97b3a" opacity="0.18" />
      <circle cx="290" cy="160" r="3" fill="#c97b3a" opacity="0.12" />
      <circle cx="380" cy="200" r="5" fill="#c97b3a" opacity="0.1" />
      <circle cx="130" cy="210" r="2" fill="#c97b3a" opacity="0.2" />
      <circle cx="270" cy="270" r="6" fill="#c97b3a" opacity="0.08" />
      <circle cx="20" cy="280" r="3.5" fill="#c97b3a" opacity="0.12" />

      {/* Extra small accent dots */}
      <circle cx="150" cy="80" r="1.5" fill="#1a365d" opacity="0.25" />
      <circle cx="300" cy="130" r="1.5" fill="#c97b3a" opacity="0.3" />
      <circle cx="50" cy="100" r="1.5" fill="#c97b3a" opacity="0.2" />
      <circle cx="390" cy="160" r="1.5" fill="#1a365d" opacity="0.22" />
    </svg>
  );
};

/**
 * WavyLines — Gentle wavy/flowing horizontal lines (2-3 curves).
 * Placed behind sections for visual rhythm. Organic, hand-drawn feel.
 */
export const WavyLines: React.FC<DecorativeProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* First wave — top, navy */}
      <path
        d="M-20 60 Q60 30, 140 60 T300 55 Q380 45, 460 65 T620 50"
        stroke="#1a365d"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
      />
      {/* Second wave — middle, gold */}
      <path
        d="M-10 100 Q80 75, 160 100 T340 95 Q420 80, 510 105 T630 90"
        stroke="#c97b3a"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
      />
      {/* Third wave — bottom, navy lighter */}
      <path
        d="M-30 145 Q70 125, 150 145 T320 140 Q410 128, 490 148 T640 135"
        stroke="#1a365d"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.1"
      />
    </svg>
  );
};

/**
 * FinancialMotifs — Small abstract financial symbols scattered decoratively.
 * Includes tiny graph curves, small coin outlines, mini rupee symbols,
 * and small chart shapes — all very subtle (opacity 0.1-0.3).
 */
export const FinancialMotifs: React.FC<DecorativeProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mini upward graph curve — top left */}
      <path
        d="M40 90 Q55 85, 65 75 T90 55"
        stroke="#1a365d"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <circle cx="90" cy="55" r="1.5" fill="#1a365d" opacity="0.2" />

      {/* Small coin outline — top right */}
      <circle cx="420" cy="70" r="12" stroke="#c97b3a" strokeWidth="0.8" fill="none" opacity="0.15" />
      <circle cx="420" cy="70" r="8" stroke="#c97b3a" strokeWidth="0.5" fill="none" opacity="0.1" />

      {/* Mini rupee symbol — center left */}
      <g opacity="0.2">
        <path
          d="M70 200 L82 200 M70 206 L82 206 M74 200 Q80 203, 78 210 L72 218"
          stroke="#1a365d"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Small bar chart — center */}
      <g opacity="0.15">
        <rect x="240" y="185" width="5" height="18" rx="1" fill="#1a365d" />
        <rect x="248" y="178" width="5" height="25" rx="1" fill="#1a365d" />
        <rect x="256" y="172" width="5" height="31" rx="1" fill="#1a365d" />
        <rect x="264" y="182" width="5" height="21" rx="1" fill="#1a365d" />
      </g>

      {/* Mini pie chart outline — bottom left */}
      <g opacity="0.18">
        <circle cx="100" cy="330" r="14" stroke="#c97b3a" strokeWidth="0.8" fill="none" />
        <path
          d="M100 330 L100 316 M100 330 L112 338"
          stroke="#c97b3a"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Upward trending arrow — right side */}
      <g opacity="0.15">
        <path
          d="M400 300 L415 285 L430 290 L445 270"
          stroke="#1a365d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M439 270 L445 270 L445 276"
          stroke="#1a365d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Small coin stack — top center */}
      <g opacity="0.12">
        <ellipse cx="250" cy="60" rx="10" ry="4" stroke="#c97b3a" strokeWidth="0.7" fill="none" />
        <ellipse cx="250" cy="55" rx="10" ry="4" stroke="#c97b3a" strokeWidth="0.7" fill="none" />
        <ellipse cx="250" cy="50" rx="10" ry="4" stroke="#c97b3a" strokeWidth="0.7" fill="none" />
      </g>

      {/* Mini rupee symbol — bottom right */}
      <g opacity="0.18">
        <path
          d="M430 350 L442 350 M430 356 L442 356 M434 350 Q440 353, 438 360 L432 368"
          stroke="#c97b3a"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Small line chart wiggle — bottom center */}
      <path
        d="M200 360 Q215 350, 230 355 T260 345 Q275 340, 290 348"
        stroke="#1a365d"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
      />

      {/* Dotted ascending path — left */}
      <circle cx="150" cy="150" r="1" fill="#c97b3a" opacity="0.25" />
      <circle cx="158" cy="143" r="1" fill="#c97b3a" opacity="0.25" />
      <circle cx="166" cy="136" r="1" fill="#c97b3a" opacity="0.25" />
      <circle cx="174" cy="130" r="1" fill="#c97b3a" opacity="0.25" />

      {/* Small percentage symbol — right */}
      <g opacity="0.15">
        <circle cx="380" cy="180" r="3" stroke="#1a365d" strokeWidth="0.7" fill="none" />
        <circle cx="392" cy="192" r="3" stroke="#1a365d" strokeWidth="0.7" fill="none" />
        <line x1="392" y1="178" x2="380" y2="194" stroke="#1a365d" strokeWidth="0.7" />
      </g>
    </svg>
  );
};

/**
 * CornerAccent — A decorative corner element (quarter-circle arc with decorative dots).
 * Position in section corners via CSS transform (e.g., rotate for different corners).
 */
export const CornerAccent: React.FC<DecorativeProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Quarter-circle arc — main element */}
      <path
        d="M0 120 Q0 50, 50 20 T120 0"
        stroke="#1a365d"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
      />
      {/* Inner arc */}
      <path
        d="M0 90 Q0 45, 40 25 T95 0"
        stroke="#c97b3a"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
      />
      {/* Outermost arc */}
      <path
        d="M10 120 Q10 60, 60 30 T120 15"
        stroke="#1a365d"
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.1"
      />

      {/* Decorative dots along the curve */}
      <circle cx="15" cy="95" r="2.5" fill="#c97b3a" opacity="0.2" />
      <circle cx="25" cy="70" r="2" fill="#1a365d" opacity="0.18" />
      <circle cx="40" cy="48" r="3" fill="#c97b3a" opacity="0.15" />
      <circle cx="60" cy="32" r="2" fill="#1a365d" opacity="0.2" />
      <circle cx="82" cy="20" r="2.5" fill="#c97b3a" opacity="0.18" />
      <circle cx="105" cy="10" r="2" fill="#1a365d" opacity="0.15" />

      {/* Accent dot cluster near corner */}
      <circle cx="5" cy="110" r="1.5" fill="#1a365d" opacity="0.25" />
      <circle cx="12" cy="115" r="1" fill="#c97b3a" opacity="0.3" />
      <circle cx="8" cy="105" r="1" fill="#c97b3a" opacity="0.2" />
    </svg>
  );
};
