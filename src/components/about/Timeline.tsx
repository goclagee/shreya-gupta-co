'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Milestone {
  year: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: '2020',
    description:
      'Shreya Gupta cleared CA Final exams with distinction, becoming a member of ICAI.',
  },
  {
    year: '2021',
    description:
      'Founded Shreya Gupta & Co. with a focus on tax advisory and audit services.',
  },
  {
    year: '2023',
    description:
      'Launched a dedicated Startup Advisory vertical, supporting early-stage companies.',
  },
  {
    year: '2025',
    description:
      'Introduced Virtual CFO services and crossed the milestone of 500+ happy clients.',
  },
];

const customEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Our Journey" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              // On desktop: odd items (index 0, 2, 4) go left, even items (index 1, 3, 5) go right
              const direction = isEven ? 'left' : 'right';

              return (
                <div
                  key={milestone.year}
                  className="relative flex items-center"
                >
                  {/* Desktop layout: alternating left/right */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:items-center w-full">
                    {/* Left content */}
                    <div className={isEven ? '' : 'order-1'}>
                      {isEven && (
                        <ScrollReveal
                          direction="left"
                          delay={index * 0.12}
                        >
                          <TimelineCard
                            milestone={milestone}
                            alignment="right"
                          />
                        </ScrollReveal>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="flex justify-center order-2 md:order-none">
                      <TimelineDot
                        year={milestone.year}
                        delay={index * 0.12}
                        prefersReducedMotion={prefersReducedMotion}
                      />
                    </div>

                    {/* Right content */}
                    <div className={isEven ? 'order-3' : 'order-3'}>
                      {!isEven && (
                        <ScrollReveal
                          direction="right"
                          delay={index * 0.12}
                        >
                          <TimelineCard
                            milestone={milestone}
                            alignment="left"
                          />
                        </ScrollReveal>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout: all cards on right side */}
                  <div className="flex md:hidden items-center gap-4 w-full">
                    <TimelineDot
                      year={milestone.year}
                      delay={index * 0.12}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                    <ScrollReveal
                      direction="right"
                      delay={index * 0.12}
                      className="flex-1"
                    >
                      <TimelineCard milestone={milestone} alignment="left" />
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineDot({
  year,
  delay,
  prefersReducedMotion,
}: {
  year: string;
  delay: number;
  prefersReducedMotion: boolean;
}) {
  if (prefersReducedMotion) {
    return (
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-secondary border-4 border-background flex items-center justify-center shadow-md">
          <span className="text-[10px] font-bold text-white">{year}</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative z-10 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay,
        ease: customEasing,
      }}
    >
      <motion.div
        className="w-10 h-10 rounded-full bg-secondary border-4 border-background flex items-center justify-center shadow-md"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(201, 123, 58, 0.4)',
            '0 0 0 8px rgba(201, 123, 58, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <span className="text-[10px] font-bold text-white">{year}</span>
      </motion.div>
    </motion.div>
  );
}

function TimelineCard({
  milestone,
  alignment,
}: {
  milestone: Milestone;
  alignment: 'left' | 'right';
}) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg shadow-sm p-5 ${
        alignment === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <span className="inline-block text-sm font-semibold text-secondary mb-1">
        {milestone.year}
      </span>
      <p className="text-text-primary font-body text-sm md:text-base leading-relaxed">
        {milestone.description}
      </p>
    </div>
  );
}

export { Timeline };
