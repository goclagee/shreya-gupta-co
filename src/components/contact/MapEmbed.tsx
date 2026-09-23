'use client';

import React, { useState } from 'react';

export default function MapEmbed() {
  const [hasError, setHasError] = useState(false);

  const mapSrc =
    'https://www.google.com/maps?q=Sunny%20Enclave%2C%20Sector%20125%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140301&output=embed';

  if (hasError) {
    return (
      <div className="w-full h-64 md:h-80 rounded-xl bg-surface border border-border flex items-center justify-center">
        <div className="text-center px-4">
          <svg
            className="w-10 h-10 text-text-secondary mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-text-secondary text-sm">
            Shreya Gupta & Co., Booth No. 35, Sector-125 New, Sunny Enclave, Sahibzada Ajit Singh Nagar, Punjab 140301
          </p>
          <p className="text-text-secondary text-xs mt-1">
            Map could not be loaded
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location - Shreya Gupta & Co., Sahibzada Ajit Singh Nagar"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
