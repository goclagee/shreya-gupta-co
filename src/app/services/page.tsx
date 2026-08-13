import { Metadata } from 'next';
import ServiceGrid from '@/components/services/ServiceGrid';

export const metadata: Metadata = {
  title: 'Services | Shreya Gupta & Co. - Chartered Accountants',
  description:
    'Explore our comprehensive range of CA services including audit, tax planning, M&A advisory, company registration, startup advisory, and more.',
  openGraph: {
    title: 'Our Services | Shreya Gupta & Co.',
    description:
      '17+ professional CA services across audit, taxation, corporate advisory, compliance, and startup support.',
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page header */}
      <section className="text-center mb-16">
        <h1 className="font-heading text-4xl sm:text-5xl text-primary font-bold mb-4">
          Our Services
        </h1>
        <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
          Comprehensive financial solutions across five key practice areas
        </p>
      </section>

      {/* Service grid with categories */}
      <ServiceGrid />
    </main>
  );
}
