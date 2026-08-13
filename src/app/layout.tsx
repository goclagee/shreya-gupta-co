import type { Metadata } from 'next';
import { playfairDisplay, inter, cormorantGaramond } from '@/lib/fonts';
import LayoutClient from '@/components/layout/LayoutClient';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shreya Gupta & Co. | Chartered Accountants',
  description:
    'Professional Chartered Accountancy services including audit, tax planning, M&A advisory, and compliance. Based in New Delhi, India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Shreya Gupta & Co.',
              description:
                'Chartered Accountancy firm offering audit, tax, M&A advisory, and compliance services',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'SCO 73, Second Floor, Sector 47-C',
                addressLocality: 'Chandigarh',
                postalCode: '160047',
                addressCountry: 'IN',
              },
              telephone: '+91 172 456 7890',
              email: 'contact@shreyaguptaco.com',
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
