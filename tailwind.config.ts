import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#c97b3a",
        background: "#faf8f5",
        surface: "#ffffff",
        "text-primary": "#2d3748",
        "text-secondary": "#718096",
        border: "#e2ddd7",
        "accent-light": "#f6e8d6",
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-accent)', 'serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        slideUp: "slideUp 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        slideDown:
          "slideDown 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        slideLeft:
          "slideLeft 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        slideRight:
          "slideRight 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        scaleIn:
          "scaleIn 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        float: "float 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        organic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transitionDelay: {
        "0": "0ms",
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};
export default config;
