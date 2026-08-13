'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const customEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const bioStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: customEasing,
    },
  },
};

const bioItem = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEasing },
  },
};

/** Animated decorative corner bracket for the profile photo frame */
function DecorativeFrame({ delay = 0.8 }: { delay?: number }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <>
        <div className="absolute -top-4 -left-4 w-10 h-10 border-t-3 border-l-3 border-secondary rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-10 h-10 border-t-3 border-r-3 border-secondary rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b-3 border-l-3 border-secondary rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-3 border-r-3 border-secondary rounded-br-lg" />
      </>
    );
  }

  return (
    <>
      {/* Top-left corner */}
      <motion.div
        className="absolute -top-4 -left-4 w-10 h-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <motion.path
            d="M2 38 V6 C2 3.79 3.79 2 6 2 H38"
            stroke="#c97b3a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1, duration: 0.6, ease: customEasing }}
          />
        </svg>
      </motion.div>

      {/* Top-right corner */}
      <motion.div
        className="absolute -top-4 -right-4 w-10 h-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.1, duration: 0.3 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <motion.path
            d="M38 38 V6 C38 3.79 36.21 2 34 2 H2"
            stroke="#c97b3a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2, duration: 0.6, ease: customEasing }}
          />
        </svg>
      </motion.div>

      {/* Bottom-left corner */}
      <motion.div
        className="absolute -bottom-4 -left-4 w-10 h-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.3 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <motion.path
            d="M2 2 V34 C2 36.21 3.79 38 6 38 H38"
            stroke="#c97b3a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 0.6, ease: customEasing }}
          />
        </svg>
      </motion.div>

      {/* Bottom-right corner */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-10 h-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.3 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <motion.path
            d="M38 2 V34 C38 36.21 36.21 38 34 38 H2"
            stroke="#c97b3a"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.4, duration: 0.6, ease: customEasing }}
          />
        </svg>
      </motion.div>
    </>
  );
}

export default function ProfileSection() {
  return (
    <section className="pt-32 pb-20" aria-label="About Shreya Gupta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — Photo with decorative frame */}
          <ScrollReveal direction="left" className="flex-shrink-0">
            <div className="relative">
              {/* Photo container with subtle rotation */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[26rem] rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-organic">
                <Image
                  src="/images/shreya-gupta.jpg"
                  alt="CA Shreya Gupta, Founder and Managing Partner of Shreya Gupta & Co."
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  priority
                />
              </div>

              {/* Animated decorative gold corner brackets */}
              <DecorativeFrame delay={0.8} />
            </div>
          </ScrollReveal>

          {/* Right column — Bio text */}
          <motion.div
            className="flex-1"
            variants={bioStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              variants={bioItem}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary font-bold"
            >
              CA Shreya Gupta
            </motion.h1>

            <motion.p
              variants={bioItem}
              className="mt-2 font-body text-base sm:text-lg text-secondary font-medium"
            >
              Founder &amp; Managing Partner
            </motion.p>

            <motion.p
              variants={bioItem}
              className="mt-6 font-body text-base sm:text-lg text-text-secondary leading-relaxed"
            >
              Shreya Gupta is a qualified Chartered Accountant and a proud member of the
              Institute of Chartered Accountants of India (ICAI). With a deep commitment to
              financial excellence, she brings a unique combination of technical expertise and
              strategic thinking to every engagement.
            </motion.p>

            <motion.p
              variants={bioItem}
              className="mt-4 font-body text-base sm:text-lg text-text-secondary leading-relaxed"
            >
              She founded Shreya Gupta &amp; Co. with a vision to provide personalized, high-quality
              financial services that empower businesses to thrive. Her approach is rooted in
              building lasting relationships, understanding each client&apos;s unique needs, and
              delivering solutions that drive real results.
            </motion.p>

            <motion.p
              variants={bioItem}
              className="mt-4 font-body text-base sm:text-lg text-text-secondary leading-relaxed"
            >
              Passionate about helping businesses grow through sound financial strategy, Shreya
              specializes in M&amp;A advisory, tax optimization, and startup ecosystem support.
              Whether it&apos;s guiding a startup through its first funding round or advising an
              established firm on a strategic acquisition, she brings clarity, precision, and
              unwavering dedication to every project.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
