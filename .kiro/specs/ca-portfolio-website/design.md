# Design Document

## Overview

This document outlines the technical architecture and implementation plan for the Shreya Gupta & Co. portfolio website. The site will be built as a modern, multi-page application using Next.js (App Router) with Framer Motion for animations, Tailwind CSS for styling, and custom SVG illustrations for the illustrative design language.

## Architecture

### Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14 (App Router) | File-based routing for multi-page structure, SSG for performance, built-in image optimization |
| Styling | Tailwind CSS 3 | Utility-first CSS for rapid development, consistent design tokens, responsive design |
| Animations | Framer Motion | Declarative animation API, scroll-triggered animations, page transitions, gesture support |
| Illustrations | Custom SVG components | Inline SVGs as React components for animation control, scalability, and theming |
| Deployment | Static export (Next.js) | Fast hosting on Vercel/Netlify, no server needed for a portfolio site |
| Form Handling | Client-side validation + Formspree/EmailJS | No backend needed, handles form submissions via third-party service |
| Maps | Google Maps Embed or Leaflet | Office location display on contact page |

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with nav, footer, page transitions
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Persistent navigation bar
│   │   ├── MobileMenu.tsx      # Full-screen mobile menu overlay
│   │   ├── Footer.tsx          # Site footer
│   │   └── PageTransition.tsx  # Page transition wrapper
│   ├── home/
│   │   ├── HeroSection.tsx     # Homepage hero
│   │   ├── ServicesPreview.tsx  # Homepage services preview
│   │   ├── Testimonials.tsx    # Testimonial carousel
│   │   └── TrustIndicators.tsx # Stats counter section
│   ├── services/
│   │   ├── ServiceCard.tsx     # Individual service card
│   │   ├── ServiceCategory.tsx # Service category grouping
│   │   └── ServiceGrid.tsx     # Services grid layout
│   ├── about/
│   │   ├── ProfileSection.tsx  # Shreya's profile with photo
│   │   ├── Timeline.tsx        # Firm milestones timeline
│   │   └── Values.tsx          # Mission and values section
│   ├── contact/
│   │   ├── ContactForm.tsx     # Contact form with validation
│   │   ├── ContactInfo.tsx     # Office details
│   │   └── MapEmbed.tsx        # Embedded map component
│   ├── illustrations/
│   │   ├── HeroIllustration.tsx
│   │   ├── AuditIllustration.tsx
│   │   ├── TaxIllustration.tsx
│   │   ├── CompanyRegIllustration.tsx
│   │   ├── AccountingIllustration.tsx
│   │   ├── FinancialAdvisoryIllustration.tsx
│   │   ├── MandAIllustration.tsx
│   │   ├── DueDiligenceIllustration.tsx
│   │   ├── ValuationIllustration.tsx
│   │   ├── TransferPricingIllustration.tsx
│   │   ├── FEMAIllustration.tsx
│   │   ├── StartupIllustration.tsx
│   │   ├── NRITaxIllustration.tsx
│   │   ├── IBCIllustration.tsx
│   │   ├── ROCIllustration.tsx
│   │   ├── PayrollIllustration.tsx
│   │   ├── VirtualCFOIllustration.tsx
│   │   ├── WealthIllustration.tsx
│   │   └── Logo.tsx            # Firm logo as SVG component
│   └── ui/
│       ├── Button.tsx          # Animated button component
│       ├── ScrollReveal.tsx    # Scroll-triggered reveal wrapper
│       ├── ParallaxLayer.tsx   # Parallax scroll wrapper
│       ├── CountUpNumber.tsx   # Animated counting number
│       └── LoadingScreen.tsx   # Branded loading animation
├── hooks/
│   ├── useScrollReveal.ts     # Intersection observer hook
│   ├── useReducedMotion.ts    # Prefers-reduced-motion detection
│   └── useMouseParallax.ts    # Cursor tracking for parallax
├── lib/
│   ├── constants.ts           # Service data, navigation links, social links
│   ├── animations.ts          # Shared Framer Motion animation variants
│   └── validation.ts          # Form validation utilities
├── styles/
│   └── globals.css            # Tailwind imports, custom fonts, CSS variables
└── public/
    ├── images/
    │   └── shreya-gupta.jpg   # Client photograph
    └── fonts/                  # Custom font files
```

### Design System

#### Color Palette (Light Theme)

```
Primary:        #1a365d (Deep Navy — headings, emphasis)
Secondary:      #c97b3a (Warm Gold — accents, CTAs)
Background:     #faf8f5 (Warm Off-White)
Surface:        #ffffff (White — cards, elevated surfaces)
Text Primary:   #2d3748 (Dark Gray)
Text Secondary: #718096 (Medium Gray)
Border:         #e2ddd7 (Warm Light Gray)
Accent Light:   #f6e8d6 (Light Gold — highlights, badges)
```

#### Typography

```
Headings:       "Playfair Display" (serif) — premium, editorial feel
Body:           "Inter" or "DM Sans" (sans-serif) — clean, readable
Accent/Monogram: "Cormorant Garamond" (serif) — decorative initials
```

#### Animation Principles

- **Entrance duration**: 500-800ms for scroll reveals
- **Page transitions**: 400ms crossfade with subtle slide
- **Hover effects**: 200-300ms ease-out
- **Stagger delay**: 100-150ms between sequential items
- **Easing**: Custom cubic-bezier for organic feel — `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Parallax intensity**: 10-30% of scroll distance for subtle depth

### Key Implementation Decisions

1. **Next.js App Router** — Chosen over Pages Router for native layout nesting, which simplifies persistent navigation and page transitions. Static export ensures zero server costs.

2. **Framer Motion over GSAP** — Framer Motion integrates natively with React's component lifecycle, making it simpler to manage animations declaratively. AnimatePresence handles exit animations for page transitions seamlessly.

3. **Inline SVG illustrations as React components** — Allows individual path animation with Framer Motion, theme color injection via CSS variables, and lazy loading per component. Each service gets a unique illustration component.

4. **Tailwind CSS over CSS Modules** — Faster development, built-in responsive utilities, and consistent spacing scale. The design system colors and fonts are configured in `tailwind.config.ts`.

5. **Static form submission** — Using Formspree or EmailJS for form handling avoids the need for a backend server, keeping the deployment simple and cost-free.

6. **Reduced motion respect** — All animation components check `prefers-reduced-motion` via a custom hook and gracefully degrade to instant transitions.

### Data Flow

```
[Service Data in constants.ts]
        ↓
[ServiceGrid component maps data to ServiceCard components]
        ↓
[Each ServiceCard dynamically imports its illustration component]
        ↓
[ScrollReveal wrapper triggers entrance animation on viewport entry]
        ↓
[Hover state triggers micro-interaction via Framer Motion whileHover]
```

### SEO Strategy

- Each page has its own `metadata` export in the page file (Next.js App Router convention)
- Structured data (JSON-LD) for LocalBusiness schema
- Auto-generated sitemap via `next-sitemap` package
- Open Graph images generated per page
- Clean slug-based URLs: `/`, `/about`, `/services`, `/contact`

### Performance Strategy

- Static Site Generation (SSG) — all pages pre-rendered at build time
- Image optimization via Next.js `<Image>` component with WebP/AVIF format
- SVG illustrations are code-split and lazy-loaded below the fold
- Font loading via `next/font` with font-display: swap
- CSS purging via Tailwind's built-in content configuration
- Animation complexity reduces on mobile via viewport detection

## API and Component Interfaces

### ScrollReveal Component

```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  disabled?: boolean;
}
```

### ServiceCard Component

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  illustration: React.ComponentType<IllustrationProps>;
  category: string;
  index: number; // for stagger delay calculation
}
```

### PageTransition Component

```typescript
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}
// Wraps each page's content with AnimatePresence for enter/exit animations
```

### Contact Form Validation

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: Record<keyof ContactFormData, string | null>;
}
```

## Correctness Properties

1. **Navigation consistency**: Every page must render the Navbar and Footer components. Active page indicator must match the current route path.

2. **Animation accessibility**: When `prefers-reduced-motion` is enabled, all animation durations must resolve to 0ms or be skipped entirely. No content should be hidden due to animation state.

3. **Form validation completeness**: Every required field in ContactFormData must produce a validation error when empty. Email field must reject invalid email patterns. Phone field must accept valid Indian phone number formats.

4. **Responsive breakpoint integrity**: At viewport widths below 768px, no horizontal overflow shall occur. All interactive elements must have minimum touch target size of 44x44px.

5. **Service data completeness**: The services constant array must contain entries for all 17+ services specified in requirements. Each entry must have a title, description, category, and illustration component reference.

6. **Illustration uniqueness**: Each service must map to a distinct illustration component. No two services share the same illustration.

7. **SEO metadata completeness**: Every page route must export metadata with a unique title and description. No page shall have duplicate meta titles.

8. **Page transition timing**: All page transitions must complete within the 300-600ms range specified in requirements. No transition shall block user interaction after completion.
