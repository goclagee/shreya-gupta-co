'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import HeroIllustration from '@/components/illustrations/HeroIllustration';
import ParallaxLayer from '@/components/ui/ParallaxLayer';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { heroStagger, staggerItem } from '@/lib/animations';

export default function HeroSection() {
  const parallax = useMouseParallax({ intensity: 0.15 });

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
      aria-label="Hero section"
    >
      {/* Background parallax illustration */}
      <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          style={{
            x: parallax.x,
            y: parallax.y,
          }}
          className="absolute inset-0 flex items-center justify-center opacity-20 md:opacity-30"
        >
          <HeroIllustration className="w-full h-full max-w-4xl" />
        </motion.div>
      </ParallaxLayer>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          {/* Left side — Text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={staggerItem}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary font-bold"
            >
              Shreya Gupta &amp; Co.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="mt-2 font-body text-sm sm:text-base text-text-secondary uppercase tracking-widest"
            >
              Chartered Accountants
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-tight font-bold"
            >
              Trusted Financial Excellence for Growing Businesses
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-4 sm:mt-6 font-body text-base sm:text-lg text-text-secondary max-w-xl mx-auto md:mx-0"
            >
              From strategic tax planning to comprehensive audit services, we partner with
              businesses at every stage to build financial clarity and sustainable growth.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side — Photo and illustration */}
          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
          >
            {/* Decorative illustration behind photo */}
            <motion.div
              style={{
                x: parallax.x * 0.5,
                y: parallax.y * 0.5,
              }}
              className="absolute -inset-8 sm:-inset-12 pointer-events-none"
            >
              <HeroIllustration className="w-full h-full opacity-40" />
            </motion.div>

            {/* Photo with decorative frame */}
            <div className="relative z-10">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-4 border-surface shadow-2xl ring-1 ring-border">
                <Image
                  src="/images/shreya-gupta.jpg"
                  alt="Shreya Gupta, Chartered Accountant"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 384px"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-secondary rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
