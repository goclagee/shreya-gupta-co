import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import MapEmbed from '@/components/contact/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact Us | Shreya Gupta & Co. - Chartered Accountants',
  description:
    'Get in touch with Shreya Gupta & Co. for professional CA services. Visit our office in Connaught Place, New Delhi or send us a message.',
  openGraph: {
    title: 'Contact Shreya Gupta & Co.',
    description:
      'Reach out for tax planning, audit, M&A advisory, and all CA services. Based in Connaught Place, New Delhi.',
  },
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a question or need professional assistance? We&apos;d love to hear
            from you. Reach out and our team will respond within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left column - Form (wider) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right column - Info + Map */}
          <div className="lg:col-span-2 space-y-8">
            <ContactInfo />
            <MapEmbed />
          </div>
        </div>
      </div>
    </main>
  );
}
