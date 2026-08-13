'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import PageTransition from './PageTransition';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Navbar onMenuToggle={handleMenuToggle} />
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
