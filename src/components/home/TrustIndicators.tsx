'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { trustIndicators } from '@/lib/constants';
import CountUpNumber from '@/components/ui/CountUpNumber';
import ScrollReveal from '@/components/ui/ScrollReveal';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const indicatorItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function TrustIndicators() {
  return (
    <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
      {/* Decorative dots pattern - top right */}
      <div
        className="absolute top-6 right-8 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {Array.from({ length: 16 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 4) * 20 + 10}
              cy={Math.floor(i / 4) * 20 + 10}
              r="2.5"
              fill="white"
            />
          ))}
        </svg>
      </div>

      {/* Decorative line element - bottom left */}
      <div
        className="absolute bottom-8 left-8 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="120" height="2" viewBox="0 0 120 2" fill="none">
          <line x1="0" y1="1" x2="120" y2="1" stroke="white" strokeWidth="2" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.label}
                className="text-center"
                variants={indicatorItem}
              >
                <div className="text-4xl md:text-5xl font-heading text-white font-bold mb-2">
                  <CountUpNumber
                    value={indicator.value}
                    suffix={indicator.suffix}
                    duration={2}
                  />
                </div>
                <p className="font-body text-text-secondary text-sm md:text-base text-white/70">
                  {indicator.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export { TrustIndicators };
