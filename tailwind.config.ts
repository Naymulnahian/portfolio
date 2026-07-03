import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#06080D",
        surface: {
          DEFAULT: "#0D1219",
          hover: "#121926",
          border: "rgba(255,255,255,0.08)",
        },
        foreground: "#F1F4F9",
        muted: "#8991A6",
        accent: {
          DEFAULT: "#4C7FFF",
          soft: "#7DA2FF",
          glow: "#7DD3FC",
        },
        signal: "#34D399",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 50% at 50% 0%, rgba(76,127,255,0.14) 0%, rgba(6,8,13,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(76,127,255,0.15), 0 8px 40px -12px rgba(76,127,255,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
