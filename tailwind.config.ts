import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Ledger-inspired palette
        paper: {
          DEFAULT: "#F5F6F2",
          dim: "#ECEDE7",
        },
        ink: {
          DEFAULT: "#101828",
          soft: "#1D2939",
          faint: "#475467",
        },
        reconciled: {
          DEFAULT: "#1F7A5C",
          light: "#2E9B76",
          dim: "#E4F2EC",
        },
        gold: {
          DEFAULT: "#C08A2E",
          light: "#D9A94E",
          dim: "#F6ECD8",
        },
        slate: {
          DEFAULT: "#5B7083",
          light: "#8A9AA8",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "ledger-grid":
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "tick": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "tick": "tick 0.4s ease-out forwards",
        "marquee": "marquee 28s linear infinite",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
