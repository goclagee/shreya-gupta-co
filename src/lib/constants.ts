// ─── TypeScript Interfaces ─────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  illustrationKey: string;
}

export type ServiceCategory =
  | "Audit & Assurance"
  | "Taxation"
  | "Corporate Advisory"
  | "Compliance"
  | "Startup & Business Services";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface Testimonial {
  name: string;
  designation: string;
  company: string;
  quote: string;
}

export interface TrustIndicator {
  value: number;
  label: string;
  suffix: string;
}

export interface ContactInfo {
  firmName: string;
  address: string;
  phone: string;
  email: string;
  officeHours: string;
}

// ─── Services Data ─────────────────────────────────────────────────────────────

export const services: Service[] = [
  // Audit & Assurance
  {
    id: "audit-and-assurance",
    title: "Audit & Assurance",
    description:
      "Comprehensive statutory and internal audit services that ensure regulatory compliance, strengthen financial controls, and provide stakeholders with confidence in your financial reporting.",
    category: "Audit & Assurance",
    illustrationKey: "AuditIllustration",
  },

  // Taxation
  {
    id: "tax-planning-and-compliance",
    title: "Tax Planning & Compliance",
    description:
      "Strategic direct and indirect tax planning to optimise your tax position while ensuring full compliance with Income Tax, GST, and other applicable regulations.",
    category: "Taxation",
    illustrationKey: "TaxIllustration",
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing",
    description:
      "Expert transfer pricing documentation, benchmarking analysis, and compliance services for multinational enterprises operating across jurisdictions.",
    category: "Taxation",
    illustrationKey: "TransferPricingIllustration",
  },
  {
    id: "nri-taxation",
    title: "NRI Taxation",
    description:
      "Specialised tax advisory for Non-Resident Indians covering DTAA benefits, repatriation planning, property transactions, and cross-border income management.",
    category: "Taxation",
    illustrationKey: "NRITaxIllustration",
  },

  // Corporate Advisory
  {
    id: "mergers-and-acquisitions",
    title: "Mergers & Acquisitions",
    description:
      "End-to-end M&A advisory including deal structuring, valuation, regulatory approvals, and post-merger integration support for seamless corporate transactions.",
    category: "Corporate Advisory",
    illustrationKey: "MandAIllustration",
  },
  {
    id: "due-diligence",
    title: "Due Diligence",
    description:
      "Thorough financial, tax, and legal due diligence to identify risks, uncover hidden liabilities, and empower informed investment decisions.",
    category: "Corporate Advisory",
    illustrationKey: "DueDiligenceIllustration",
  },
  {
    id: "business-valuation",
    title: "Business Valuation",
    description:
      "Independent and defensible business valuations using globally accepted methodologies for transactions, disputes, regulatory filings, and strategic planning.",
    category: "Corporate Advisory",
    illustrationKey: "ValuationIllustration",
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    description:
      "Strategic financial guidance including capital structuring, fundraising support, financial modelling, and growth strategy to accelerate your business objectives.",
    category: "Corporate Advisory",
    illustrationKey: "FinancialAdvisoryIllustration",
  },
  {
    id: "virtual-cfo-services",
    title: "Virtual CFO Services",
    description:
      "Experienced CFO-level financial leadership on a flexible engagement model — ideal for startups and growing businesses that need strategic oversight without full-time costs.",
    category: "Corporate Advisory",
    illustrationKey: "VirtualCFOIllustration",
  },

  // Compliance
  {
    id: "company-registration-and-incorporation",
    title: "Company Registration & Incorporation",
    description:
      "Hassle-free company incorporation services including entity selection advice, documentation, MCA filings, and post-incorporation compliance setup.",
    category: "Compliance",
    illustrationKey: "CompanyRegIllustration",
  },
  {
    id: "roc-compliance",
    title: "ROC Compliance",
    description:
      "Timely and accurate filing of annual returns, board resolutions, and statutory documents with the Registrar of Companies to keep your entity in good standing.",
    category: "Compliance",
    illustrationKey: "ROCIllustration",
  },
  {
    id: "fema-and-rbi-compliance",
    title: "FEMA & RBI Compliance",
    description:
      "Navigating complex foreign exchange regulations including FDI reporting, ECB compliance, ODI filings, and liaising with RBI for approvals and compounding applications.",
    category: "Compliance",
    illustrationKey: "FEMAIllustration",
  },
  {
    id: "insolvency-and-bankruptcy",
    title: "Insolvency & Bankruptcy (IBC)",
    description:
      "Professional support through the insolvency resolution process including CIRP advisory, creditor representation, and resolution plan formulation under the IBC framework.",
    category: "Compliance",
    illustrationKey: "IBCIllustration",
  },

  // Startup & Business Services
  {
    id: "startup-advisory",
    title: "Startup Advisory",
    description:
      "Complete startup ecosystem support including DPIIT registration, seed funding guidance, pitch deck review, angel tax exemption, and regulatory compliance for early-stage ventures.",
    category: "Startup & Business Services",
    illustrationKey: "StartupIllustration",
  },
  {
    id: "accounting-and-bookkeeping",
    title: "Accounting & Bookkeeping",
    description:
      "Accurate and timely bookkeeping, financial statement preparation, and accounting outsourcing that keeps your books audit-ready and your business decisions data-driven.",
    category: "Startup & Business Services",
    illustrationKey: "AccountingIllustration",
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    description:
      "End-to-end payroll processing including salary structuring, TDS computation, PF/ESI compliance, and payslip generation — so you can focus on growing your team.",
    category: "Startup & Business Services",
    illustrationKey: "PayrollIllustration",
  },
  {
    id: "wealth-management",
    title: "Wealth Management",
    description:
      "Holistic wealth planning combining tax efficiency, investment advisory, estate planning, and asset protection strategies tailored to high-net-worth individuals and families.",
    category: "Startup & Business Services",
    illustrationKey: "WealthIllustration",
  },
];

// ─── Navigation Links ──────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ─── Social Links ──────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", href: "#", label: "Follow us on LinkedIn" },
  { platform: "Twitter", href: "#", label: "Follow us on X (Twitter)" },
  { platform: "Instagram", href: "#", label: "Follow us on Instagram" },
];

// ─── Trust Indicators ──────────────────────────────────────────────────────────

export const trustIndicators: TrustIndicator[] = [
  { value: 8, label: "Years of Experience", suffix: "+" },
  { value: 500, label: "Happy Clients", suffix: "+" },
  { value: 17, label: "Services Offered", suffix: "+" },
  { value: 15, label: "Team Professionals", suffix: "+" },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Mehta",
    designation: "Managing Director",
    company: "Mehta Industries Pvt. Ltd.",
    quote:
      "Shreya Gupta & Co. transformed our approach to tax planning. Their proactive strategies saved us significant amounts while keeping us fully compliant. Truly a trusted partner for our business.",
  },
  {
    name: "Priya Sharma",
    designation: "Founder & CEO",
    company: "NovaTech Solutions",
    quote:
      "From DPIIT registration to our first round of funding, the team guided us at every step. Their startup advisory services gave us the confidence to scale without worrying about compliance.",
  },
  {
    name: "Ankit Verma",
    designation: "CFO",
    company: "Greenfield Exports Ltd.",
    quote:
      "Their FEMA and transfer pricing expertise is unmatched. As a company with cross-border operations, we rely on their guidance to navigate complex regulatory requirements seamlessly.",
  },
  {
    name: "Sunita Agarwal",
    designation: "NRI Investor",
    company: "Independent",
    quote:
      "Managing property and investments in India from abroad was overwhelming until I found Shreya Gupta & Co. Their NRI taxation team made repatriation and DTAA claims straightforward and stress-free.",
  },
  {
    name: "Vikram Singh",
    designation: "Director",
    company: "Singh & Associates LLP",
    quote:
      "We engaged them for a complex due diligence assignment during an acquisition. Their thoroughness and attention to detail uncovered risks we would have otherwise missed. Highly recommended.",
  },
];

// ─── Contact Information ───────────────────────────────────────────────────────

export const contactInfo: ContactInfo = {
  firmName: "Shreya Gupta & Co.",
  address: "B-12, Second Floor, Connaught Place, New Delhi – 110001, India",
  phone: "+91 11 4567 8900",
  email: "contact@shreyaguptaco.com",
  officeHours: "Monday – Saturday: 10:00 AM – 7:00 PM",
};

// ─── Service Categories (for filtering/grouping) ──────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  "Audit & Assurance",
  "Taxation",
  "Corporate Advisory",
  "Compliance",
  "Startup & Business Services",
];
