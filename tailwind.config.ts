import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2fb",
          100: "#d9e4f8",
          200: "#b6c9f1",
          300: "#8ba9e6",
          400: "#5b7fda",
          500: "#265396",
          600: "#13294b",
          700: "#0f203b",
          800: "#0b172b",
          900: "#081120"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(38, 83, 150, 0.35)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
