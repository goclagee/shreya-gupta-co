'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, socialLinks } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const customEasing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const overlayVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: customEasing },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: customEasing },
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: { opacity: 0 },
};

const navItemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: customEasing },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.2 },
  },
};

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.4 },
  },
  exit: { opacity: 0 },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col bg-background"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Header: Firm Name + Close Button */}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-heading text-xl font-bold text-primary">
              Shreya Gupta &amp; Co.
            </span>

            {/* Close Button (X icon) — 44x44px touch target */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-md text-primary"
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links — centered, large text, staggered entrance */}
          <motion.nav
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`font-heading text-3xl font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-secondary'
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* Social Links — bottom */}
          <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex items-center justify-center gap-6 px-6 pb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-secondary"
              >
                {social.platform}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
