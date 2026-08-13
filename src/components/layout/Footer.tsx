'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { contactInfo, navLinks, socialLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Firm Name & Description */}
          <motion.div variants={staggerItem} className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-heading text-2xl font-bold text-white">
              Shreya Gupta &amp; Co.
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/70">
              Chartered Accountants providing comprehensive financial solutions
              with integrity, precision, and a client-first approach.
            </p>
            <p className="mt-2 font-body text-xs text-white/50">
              Member, ICAI
            </p>
          </motion.div>

          {/* Column 2: Contact Information */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading text-base font-semibold text-white">
              Contact Us
            </h3>
            <address className="mt-4 space-y-3 font-body text-sm not-italic text-white/70">
              <p>{contactInfo.address}</p>
              <p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="transition-colors duration-200 hover:text-secondary"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors duration-200 hover:text-secondary"
                >
                  {contactInfo.email}
                </a>
              </p>
            </address>
          </motion.div>

          {/* Column 3: Navigation Links */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading text-base font-semibold text-white">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/70 transition-colors duration-200 hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 4: Social Links */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading text-base font-semibold text-white">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="font-body text-sm text-white/70 transition-colors duration-200 hover:text-secondary"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-body text-xs text-white/50">
              &copy; 2024 Shreya Gupta &amp; Co. All rights reserved.
            </p>
            <p className="font-body text-xs text-white/50">
              Member, ICAI
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
