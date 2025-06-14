import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Accenture Theme Colors
        accenture: {
          // Primary blacks - Accenture's signature color
          black: "#000000",
          "black-light": "#0a0a0a",
          "black-lighter": "#1a1a1a",

          // Brand pink/red colors
          purple: "#e91e63", // Pink/red primary
          "purple-dark": "#c2185b", // Darker pink/red
          "purple-light": "#f06292", // Lighter pink/red
          "purple-bright": "#ff6090", // Bright pink/red

          // Accent colors for variety
          red: "#e2062e",
          blue: "#0041f0",
          violet: "#460073",

          // Professional grays
          gray: {
            50: "#f1f1ef",
            100: "#e5e5e3",
            200: "#d1d1cf",
            300: "#a2a2a0",
            400: "#6b6b69",
            500: "#4b4b49",
            600: "#2b2b2b",
            700: "#202020",
            800: "#1a1a1a",
            900: "#0a0a0a",
          },

          // Text colors
          text: {
            primary: "#000000",
            secondary: "#2b2b2b",
            tertiary: "#4b4b49",
            light: "#a2a2a0",
            inverse: "#ffffff",
          },

          // Background colors
          bg: {
            primary: "#ffffff",
            secondary: "#f1f1ef",
            dark: "#000000",
            darker: "#0a0a0a",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Accenture fonts - Graphik as primary
        sans: ["Graphik", "Inter", "system-ui", "sans-serif"],
        heading: ["GT Sectra Fine", "Palatino", "serif"],
        body: ["Graphik", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Accenture typography scale
        hero: [
          "6.25rem",
          { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "500" },
        ], // 100px
        display: [
          "5rem",
          { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "500" },
        ], // 80px
        "heading-xl": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.075em", fontWeight: "500" },
        ], // 40px
        "heading-lg": [
          "2rem",
          { lineHeight: "1.25", letterSpacing: "-0.04em", fontWeight: "500" },
        ], // 32px
        "heading-md": [
          "1.75rem",
          { lineHeight: "1.3", letterSpacing: "-0.035em", fontWeight: "500" },
        ], // 28px
        "body-xl": [
          "1.25rem",
          { lineHeight: "1.6", letterSpacing: "-0.025em", fontWeight: "500" },
        ], // 20px
        "body-lg": ["1rem", { lineHeight: "1.5", letterSpacing: "-0.005em" }], // 16px
        "body-sm": [
          "0.875rem",
          { lineHeight: "1.5", letterSpacing: "0.0175em", fontWeight: "500" },
        ], // 14px
      },
      spacing: {
        // Accenture spacing system
        "15": "3.75rem", // 60px
        "18": "4.5rem", // 72px
        "20": "5rem", // 80px
        "22": "5.5rem", // 88px
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
      },
      backgroundImage: {
        // Accenture gradients
        "accenture-gradient":
          "linear-gradient(135deg, #000000 0%, #e91e63 100%)",
        "accenture-purple": "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",
        "accenture-dark": "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        "hero-overlay":
          "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(233,30,99,0.6) 100%)",
      },
      boxShadow: {
        // Accenture shadows
        accenture: "0 4px 20px -2px rgba(0, 0, 0, 0.15)",
        "accenture-lg": "0 10px 40px -4px rgba(0, 0, 0, 0.2)",
        "accenture-xl": "0 20px 60px -8px rgba(0, 0, 0, 0.25)",
        purple: "0 8px 32px -4px rgba(166, 0, 255, 0.3)",
        card: "0 2px 12px -1px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 8px 32px -4px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        // Accenture animations
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
