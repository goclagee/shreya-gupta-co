'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { WavyLines } from '@/components/illustrations/DecorativeElements';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative WavyLines background for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <WavyLines className="w-full h-full opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by businesses and individuals across India for comprehensive financial solutions."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="bg-surface rounded-xl shadow-sm border border-border p-6 md:p-8"
              variants={staggerItem}
            >
              {/* Decorative quotation mark */}
              <span
                className="block text-5xl leading-none font-heading text-secondary select-none mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="font-body italic text-text-primary text-sm md:text-base leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Client details */}
              <div>
                <p className="font-body font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="font-body text-text-secondary text-sm">
                  {testimonial.designation}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Testimonials };
