import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
  weight: ['400', '500', '600'],
});
