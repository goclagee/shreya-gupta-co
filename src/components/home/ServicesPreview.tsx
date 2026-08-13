'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { services } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const previewServices = services.slice(0, 6);

export default function ServicesPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="bg-accent-light/30 py-20 md:py-28"
      aria-label="Services preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive financial solutions tailored to your needs"
        />

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {previewServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-surface border border-border rounded-xl p-6 flex flex-col"
              variants={prefersReducedMotion ? undefined : staggerItem}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 1.02,
                      y: -4,
                      boxShadow:
                        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }
              }
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Illustration placeholder */}
              <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                <span className="text-xs font-body text-primary/70 text-center leading-tight">
                  {service.illustrationKey.replace('Illustration', '')}
                </span>
              </div>

              {/* Service title */}
              <h3 className="font-heading text-primary text-lg font-semibold">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="mt-2 font-body text-text-secondary text-sm leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
