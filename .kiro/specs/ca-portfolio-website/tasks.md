# Implementation Tasks

## Task 1: Project Setup and Configuration

- [x] 1.1 Initialize Next.js 14 project with App Router, TypeScript, and Tailwind CSS
- [x] 1.2 Configure Tailwind with custom color palette (navy, gold, warm off-white), typography scale, and animation utilities
- [x] 1.3 Install and configure Framer Motion
- [x] 1.4 Set up custom fonts (Playfair Display, Inter/DM Sans) using next/font
- [x] 1.5 Create global CSS file with CSS variables, base styles, and Tailwind imports
- [x] 1.6 Create the project directory structure (components, hooks, lib, illustrations folders)
- [x] 1.7 Add client photograph to public/images directory

## Task 2: Design System and Shared Utilities

- [x] 2.1 Create constants.ts with all service data (17+ services with titles, descriptions, categories)
- [x] 2.2 Create animations.ts with shared Framer Motion variants (fadeIn, slideUp, stagger, pageTransition)
- [x] 2.3 Create validation.ts with contact form validation logic (name, email, phone, subject, message)
- [x] 2.4 Create useScrollReveal hook using Intersection Observer API
- [x] 2.5 Create useReducedMotion hook to detect prefers-reduced-motion preference
- [x] 2.6 Create useMouseParallax hook for cursor-tracking parallax effects

## Task 3: Layout Components (Navbar, Footer, Page Transitions)

- [x] 3.1 Build Navbar component with logo, navigation links, active page indicator, and scroll-triggered backdrop blur
- [x] 3.2 Build MobileMenu component as full-screen animated overlay with hamburger toggle
- [x] 3.3 Build Footer component with firm details, social links, secondary navigation, and scroll-reveal animation
- [x] 3.4 Build PageTransition component using Framer Motion AnimatePresence for smooth page transitions
- [x] 3.5 Build LoadingScreen component with branded logo animation
- [x] 3.6 Create root layout.tsx integrating Navbar, Footer, PageTransition, and font configuration

## Task 4: Reusable UI Components

- [x] 4.1 Build ScrollReveal component wrapper with configurable direction, delay, and threshold
- [x] 4.2 Build ParallaxLayer component for background depth effects
- [x] 4.3 Build CountUpNumber component with animated number counting effect triggered on scroll
- [x] 4.4 Build Button component with hover micro-interactions (scale, glow, ripple)
- [x] 4.5 Build SectionHeading component with decorative underline illustration and entrance animation

## Task 5: Logo and Illustration System

- [x] 5.1 Create Logo SVG component for Shreya Gupta & Co. (monogram or wordmark style)
- [x] 5.2 Create HeroIllustration SVG component (financial growth/trust theme with animated paths)
- [x] 5.3 Create service illustrations: AuditIllustration, TaxIllustration, CompanyRegIllustration
- [x] 5.4 Create service illustrations: AccountingIllustration, FinancialAdvisoryIllustration, MandAIllustration
- [x] 5.5 Create service illustrations: DueDiligenceIllustration, ValuationIllustration, TransferPricingIllustration
- [x] 5.6 Create service illustrations: FEMAIllustration, StartupIllustration, NRITaxIllustration
- [x] 5.7 Create service illustrations: IBCIllustration, ROCIllustration, PayrollIllustration
- [x] 5.8 Create service illustrations: VirtualCFOIllustration, WealthIllustration
- [x] 5.9 Create decorative background illustrations (organic shapes, line patterns, financial motifs)

## Task 6: Homepage Implementation

- [x] 6.1 Build HeroSection with tagline, CTA button, client photo, parallax illustration, and staggered entrance animation
- [x] 6.2 Build ServicesPreview section showing top 6 services with scroll-reveal cards and "View All Services" CTA
- [x] 6.3 Build TrustIndicators section with animated count-up numbers (years experience, clients, etc.)
- [x] 6.4 Build Testimonials section with animated carousel or staggered card reveal
- [x] 6.5 Assemble homepage page.tsx with all sections, scroll animations, and mouse parallax on hero
- [x] 6.6 Add homepage SEO metadata (title, description, Open Graph tags)

## Task 7: About Page Implementation

- [x] 7.1 Build ProfileSection with Shreya's photo, animated decorative frame, and professional bio
- [x] 7.2 Build Values section with firm mission, values, and illustrated icons
- [x] 7.3 Build Timeline component showing firm milestones with scroll-triggered sequential animation
- [x] 7.4 Assemble about/page.tsx with all sections and scroll-reveal animations
- [x] 7.5 Add About page SEO metadata

## Task 8: Services Page Implementation

- [x] 8.1 Build ServiceCard component with illustration, hover effects (elevation, color shift, illustration animation)
- [x] 8.2 Build ServiceCategory component to group services under category headings
- [x] 8.3 Build ServiceGrid with responsive layout and staggered scroll-reveal animation
- [x] 8.4 Assemble services/page.tsx with category sections, all 17+ services, and page intro
- [x] 8.5 Add Services page SEO metadata

## Task 9: Contact Page Implementation

- [x] 9.1 Build ContactForm component with animated input labels, inline validation, and success animation
- [x] 9.2 Build ContactInfo component displaying address, phone, email, and office hours
- [x] 9.3 Build MapEmbed component with office location
- [x] 9.4 Integrate form submission with Formspree or EmailJS
- [x] 9.5 Assemble contact/page.tsx with form, info, map, and scroll animations
- [x] 9.6 Add Contact page SEO metadata

## Task 10: Animation Polish and Interactions

- [x] 10.1 Implement page transition animations between all routes (crossfade with slide, 400ms)
- [x] 10.2 Add cursor-following parallax effect to homepage hero section
- [x] 10.3 Add hover micro-interactions to all buttons, links, and cards across the site
- [x] 10.4 Implement staggered entrance animations for service cards, testimonials, and grid items
- [x] 10.5 Add parallax scrolling to decorative background illustrations
- [x] 10.6 Implement reduced-motion fallbacks for all animation components
- [x] 10.7 Add loading screen animation on initial page load

## Task 11: Responsive Design and Mobile Optimization

- [x] 11.1 Test and fix layouts at mobile (320-767px), tablet (768-1023px), and desktop (1024px+) breakpoints
- [x] 11.2 Ensure mobile hamburger menu works correctly with animated open/close transitions
- [x] 11.3 Verify all touch targets are minimum 44x44px on mobile
- [x] 11.4 Reduce animation complexity on mobile viewports for performance (reduce parallax layers, simplify reveals)
- [x] 11.5 Test horizontal overflow prevention on all pages at all breakpoints

## Task 12: SEO, Performance, and Accessibility

- [x] 12.1 Add unique meta titles, descriptions, and Open Graph tags to all pages
- [x] 12.2 Install and configure next-sitemap for sitemap generation
- [x] 12.3 Add JSON-LD structured data (LocalBusiness schema) to the root layout
- [x] 12.4 Implement lazy loading for illustrations and images below the fold
- [x] 12.5 Add semantic HTML landmarks and ARIA labels to all interactive components
- [x] 12.6 Add alt text to all illustrations and images
- [x] 12.7 Run Lighthouse audit and fix issues to achieve 80+ performance and 90+ accessibility scores
- [x] 12.8 Implement graceful fallbacks for failed illustration loads
