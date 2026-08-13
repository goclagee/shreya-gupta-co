import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import TrustIndicators from '@/components/home/TrustIndicators';
import Testimonials from '@/components/home/Testimonials';

export const metadata: Metadata = {
  title: 'Shreya Gupta & Co. | Chartered Accountants in New Delhi',
  description: 'Shreya Gupta & Co. offers expert Chartered Accountancy services including tax planning, audit & assurance, M&A advisory, company registration, and startup advisory. Based in New Delhi, India.',
  openGraph: {
    title: 'Shreya Gupta & Co. | Chartered Accountants',
    description: 'Expert CA services: Tax Planning, Audit, M&A Advisory, Company Registration & more. Trusted by 500+ clients across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shreya Gupta & Co.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <TrustIndicators />
      <Testimonials />
    </>
  );
}
