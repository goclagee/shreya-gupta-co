import type { Metadata } from 'next';
import ProfileSection from '@/components/about/ProfileSection';
import Values from '@/components/about/Values';
import Timeline from '@/components/about/Timeline';

export const metadata: Metadata = {
  title: 'About Us | Shreya Gupta & Co. - Chartered Accountants',
  description: 'Learn about CA Shreya Gupta, founder of Shreya Gupta & Co. Our mission, values, and journey of delivering excellence in chartered accountancy services since 2017.',
  openGraph: {
    title: 'About Shreya Gupta & Co.',
    description: 'Meet CA Shreya Gupta and learn about our mission to provide trusted financial expertise with integrity and personalized service.',
  },
};

export default function AboutPage() {
  return (
    <>
      <ProfileSection />
      <Values />
      <Timeline />
    </>
  );
}
