import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E30613",
          dark: "#B0040F",
          light: "#FCE6E8",
        },
        ink: { DEFAULT: "#111827", soft: "#374151", muted: "#6B7280" },
        surface: { DEFAULT: "#FFFFFF", soft: "#F8FAFC", warm: "#FFF7F7" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 16px -4px rgba(17,24,39,0.08), 0 2px 4px -2px rgba(17,24,39,0.06)",
      },
      maxWidth: { container: "1200px" },
    },
  },
  plugins: [],
} satisfies Config;
