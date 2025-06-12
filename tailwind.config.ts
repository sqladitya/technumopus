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
        // Corporate Consulting Theme Colors
        corporate: {
          // TCS-inspired colors
          black: "#000000",
          "black-light": "#1a1a1a",
          "black-lighter": "#2a2a2a",

          // Accenture-inspired colors
          purple: "#a100ff",
          "purple-dark": "#8b00e6",
          "purple-light": "#b84dff",

          // Wipro-inspired colors
          blue: "#297f94",
          "blue-dark": "#1b6aa8",
          "blue-light": "#2f98b3",
          "blue-accent": "#0065f0",

          // Professional grays
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },

          // Success and accent colors
          green: "#059669",
          orange: "#ea580c",
          red: "#dc2626",

          // Text colors
          text: {
            primary: "#111827",
            secondary: "#4b5563",
            tertiary: "#6b7280",
            light: "#9ca3af",
            inverse: "#ffffff",
          },

          // Background colors
          bg: {
            primary: "#ffffff",
            secondary: "#f9fafb",
            tertiary: "#f3f4f6",
            dark: "#111827",
            darker: "#000000",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Corporate fonts similar to consulting firms
        corporate: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Corporate typography scale
        hero: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-xl": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "heading-lg": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-md": ["1.5rem", { lineHeight: "1.4" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-xl": ["1.25rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        // Corporate spacing system
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
      },
      backgroundImage: {
        // Corporate gradients
        "gradient-corporate":
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)",
        "gradient-purple": "linear-gradient(135deg, #a100ff 0%, #8b00e6 100%)",
        "gradient-blue": "linear-gradient(135deg, #297f94 0%, #1b6aa8 100%)",
        "gradient-dark": "linear-gradient(135deg, #111827 0%, #374151 100%)",
        "gradient-light": "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
        "hero-pattern":
          "radial-gradient(circle at 20% 80%, rgba(161, 0, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(41, 127, 148, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(17, 24, 39, 0.8) 0%, transparent 50%)",
      },
      boxShadow: {
        // Corporate shadows
        corporate: "0 4px 20px -2px rgba(0, 0, 0, 0.1)",
        "corporate-lg": "0 10px 40px -4px rgba(0, 0, 0, 0.15)",
        "corporate-xl": "0 20px 60px -8px rgba(0, 0, 0, 0.25)",
        card: "0 2px 8px -1px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 8px 32px -4px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        // Corporate animations
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "0.4" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
