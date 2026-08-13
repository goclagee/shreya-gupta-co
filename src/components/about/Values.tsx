'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getStaggerDelay } from '@/lib/animations';

const coreValues = [
  {
    name: 'Integrity',
    description:
      'We uphold the highest ethical standards in all our professional engagements',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 4L6 10V18C6 27.05 11.95 35.42 20 38C28.05 35.42 34 27.05 34 18V10L20 4Z"
          stroke="#c97b3a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14 20L18 24L26 16"
          stroke="#1a365d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Excellence',
    description:
      'We strive for uncompromising quality in every service we deliver',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 4L24.5 14.5L36 16L28 24L30 36L20 30.5L10 36L12 24L4 16L15.5 14.5L20 4Z"
          stroke="#c97b3a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 12V22M16 18H24"
          stroke="#1a365d"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Client Focus',
    description:
      'We prioritize understanding and addressing our clients\u2019 unique needs',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="14"
          r="6"
          stroke="#c97b3a"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M8 34C8 28.48 13.37 24 20 24C26.63 24 32 28.48 32 34"
          stroke="#c97b3a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 28V32M17 30H23"
          stroke="#1a365d"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Innovation',
    description:
      'We embrace modern approaches to deliver smarter financial solutions',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 6C14.48 6 10 10.48 10 16C10 19.7 12.01 22.92 15 24.74V28C15 29.1 15.9 30 17 30H23C24.1 30 25 29.1 25 28V24.74C27.99 22.92 30 19.7 30 16C30 10.48 25.52 6 20 6Z"
          stroke="#c97b3a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M16 34H24"
          stroke="#c97b3a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 12V18L23 15"
          stroke="#1a365d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section
      className="py-16 md:py-24 bg-accent-light/20"
      aria-label="Our Mission and Values"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Mission & Values" />

        {/* Mission Statement */}
        <ScrollReveal direction="up" delay={0.1}>
          <p className="font-body text-lg md:text-xl text-text-primary text-center max-w-3xl mx-auto leading-relaxed mb-16">
            To deliver exceptional financial expertise with integrity, transparency, and a
            personalized approach — empowering our clients to make informed decisions and
            achieve sustainable growth.
          </p>
        </ScrollReveal>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <ScrollReveal
              key={value.name}
              direction="up"
              delay={getStaggerDelay(index, 0.12)}
            >
              <motion.div
                className="bg-surface rounded-lg p-6 h-full flex flex-col items-center text-center shadow-sm"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="mb-4 p-3 rounded-full bg-accent-light/30">
                  {value.icon}
                </div>
                <h3 className="font-heading text-primary font-semibold text-lg mb-2">
                  {value.name}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
