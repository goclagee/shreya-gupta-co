'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cardHover, getStaggerDelay } from '@/lib/animations';

// ─── Illustration Imports ─────────────────────────────────────────────────────

import AuditIllustration from '@/components/illustrations/AuditIllustration';
import TaxIllustration from '@/components/illustrations/TaxIllustration';
import CompanyRegIllustration from '@/components/illustrations/CompanyRegIllustration';
import AccountingIllustration from '@/components/illustrations/AccountingIllustration';
import FinancialAdvisoryIllustration from '@/components/illustrations/FinancialAdvisoryIllustration';
import MandAIllustration from '@/components/illustrations/MandAIllustration';
import DueDiligenceIllustration from '@/components/illustrations/DueDiligenceIllustration';
import ValuationIllustration from '@/components/illustrations/ValuationIllustration';
import TransferPricingIllustration from '@/components/illustrations/TransferPricingIllustration';
import FEMAIllustration from '@/components/illustrations/FEMAIllustration';
import StartupIllustration from '@/components/illustrations/StartupIllustration';
import NRITaxIllustration from '@/components/illustrations/NRITaxIllustration';
import IBCIllustration from '@/components/illustrations/IBCIllustration';
import ROCIllustration from '@/components/illustrations/ROCIllustration';
import PayrollIllustration from '@/components/illustrations/PayrollIllustration';
import VirtualCFOIllustration from '@/components/illustrations/VirtualCFOIllustration';
import WealthIllustration from '@/components/illustrations/WealthIllustration';

// ─── Illustration Map ─────────────────────────────────────────────────────────

const illustrationMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AuditIllustration,
  TaxIllustration,
  CompanyRegIllustration,
  AccountingIllustration,
  FinancialAdvisoryIllustration,
  MandAIllustration,
  DueDiligenceIllustration,
  ValuationIllustration,
  TransferPricingIllustration,
  FEMAIllustration,
  StartupIllustration,
  NRITaxIllustration,
  IBCIllustration,
  ROCIllustration,
  PayrollIllustration,
  VirtualCFOIllustration,
  WealthIllustration,
};

// ─── Props Interface ──────────────────────────────────────────────────────────

interface ServiceCardProps {
  title: string;
  description: string;
  illustrationKey: string;
  category: string;
  index: number;
}

// ─── Fallback Illustration ────────────────────────────────────────────────────

const FallbackIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`flex items-center justify-center bg-accent-light rounded-lg ${className ?? ''}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 opacity-40"
    >
      <circle cx="100" cy="100" r="50" stroke="#c97b3a" strokeWidth="2" />
      <path d="M80 100 L95 115 L120 85" stroke="#1a365d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// ─── ServiceCard Component ────────────────────────────────────────────────────

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  illustrationKey,
  category,
  index,
}) => {
  const Illustration = illustrationMap[illustrationKey] ?? null;
  const delay = getStaggerDelay(index);

  return (
    <motion.div
      className="relative bg-surface border border-border rounded-xl shadow-sm overflow-hidden p-5 flex flex-col"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      animate="rest"
      transition={{ delay }}
    >
      {/* Category badge */}
      <span className="absolute top-3 right-3 text-[10px] font-body font-medium uppercase tracking-wider text-secondary bg-accent-light px-2 py-0.5 rounded-full">
        {category}
      </span>

      {/* Illustration */}
      <motion.div
        className="w-full h-40 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {Illustration ? (
          <Illustration className="w-full h-full" />
        ) : (
          <FallbackIllustration className="w-full h-full" />
        )}
      </motion.div>

      {/* Title */}
      <h3 className="font-heading text-primary text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
