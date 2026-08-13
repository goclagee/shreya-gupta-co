'use client';

import React, { useState } from 'react';

export default function MapEmbed() {
  const [hasError, setHasError] = useState(false);

  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6743513647985!2d77.21766!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

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
            Connaught Place, New Delhi – 110001
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
        title="Office Location - Connaught Place, New Delhi"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
