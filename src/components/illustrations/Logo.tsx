'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'monogram';
}

/**
 * Shreya Gupta & Co. brand mark.
 * - "monogram" renders an intertwined "SG" mark (works at 32x32).
 * - "full" renders the monogram alongside "Shreya Gupta & Co." wordmark.
 */
const Logo: React.FC<LogoProps> = ({ className, variant = 'monogram' }) => {
  if (variant === 'monogram') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Shreya Gupta and Co. monogram"
        role="img"
      >
        {/* Outer circle frame */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#1a365d"
          strokeWidth="2"
          fill="none"
        />
        {/* Gold accent — inner ring */}
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="#c97b3a"
          strokeWidth="0.75"
          fill="none"
        />
        {/* Letter S — elegant serif style */}
        <path
          d="M26 22c-4 0-7 2.5-7 6 0 3 2.2 4.5 5.5 5.5 3.5 1.1 5.5 2 5.5 4.5 0 2.8-2.5 4.5-6 4.5-2.5 0-4.8-1-6-2.5"
          stroke="#1a365d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Letter G — elegant serif style, overlapping the S */}
        <path
          d="M46 26c-1.5-2.5-4.5-4-8-4-5.5 0-9.5 4-9.5 10s4 10 9.5 10c3.5 0 6-1.5 7.5-3.5V34h-7"
          stroke="#1a365d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Gold decorative dot — bottom accent */}
        <circle cx="32" cy="56" r="1.5" fill="#c97b3a" />
      </svg>
    );
  }

  // Full variant: monogram + wordmark
  return (
    <svg
      viewBox="0 0 280 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shreya Gupta and Co. logo"
      role="img"
    >
      {/* Monogram mark */}
      <g>
        {/* Outer circle frame */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#1a365d"
          strokeWidth="2"
          fill="none"
        />
        {/* Gold accent — inner ring */}
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="#c97b3a"
          strokeWidth="0.75"
          fill="none"
        />
        {/* Letter S */}
        <path
          d="M26 22c-4 0-7 2.5-7 6 0 3 2.2 4.5 5.5 5.5 3.5 1.1 5.5 2 5.5 4.5 0 2.8-2.5 4.5-6 4.5-2.5 0-4.8-1-6-2.5"
          stroke="#1a365d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Letter G */}
        <path
          d="M46 26c-1.5-2.5-4.5-4-8-4-5.5 0-9.5 4-9.5 10s4 10 9.5 10c3.5 0 6-1.5 7.5-3.5V34h-7"
          stroke="#1a365d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Gold decorative dot */}
        <circle cx="32" cy="56" r="1.5" fill="#c97b3a" />
      </g>

      {/* Wordmark text */}
      <g fill="#1a365d">
        {/* "Shreya Gupta" — primary name */}
        <text
          x="76"
          y="30"
          fontFamily="'Playfair Display', 'Georgia', serif"
          fontSize="16"
          fontWeight="700"
          letterSpacing="0.5"
        >
          Shreya Gupta
        </text>
        {/* "& Co." — secondary */}
        <text
          x="76"
          y="48"
          fontFamily="'Playfair Display', 'Georgia', serif"
          fontSize="11"
          fontWeight="400"
          letterSpacing="2"
          fill="#718096"
        >
          &amp; CO.
        </text>
        {/* Gold underline accent */}
        <rect x="76" y="53" width="40" height="1" fill="#c97b3a" rx="0.5" />
      </g>
    </svg>
  );
};

export default Logo;
