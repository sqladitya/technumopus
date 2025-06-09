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
        "2xl": "1280px",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Updated Pink brand colors - #ff007f theme
        tech: {
          primary: "#ff007f",
          "primary-dark": "#e01171",
          "primary-light": "#ff3399",
          secondary: "#ff66b3",
          charcoal: "#374151",
          "charcoal-dark": "#1f2937",
          accent: "#ff007f",
          "accent-light": "#ff99cc",
          pink: "#ff007f",
          "pink-light": "#ff99cc",
          "text-dark": "#111827",
          "text-medium": "#6b7280",
          "text-light": "#9ca3af",
          "bg-light": "#fef7f0",
          "bg-dark": "#0f172a",
          orange: "#f97316",
          "orange-hover": "#ea580c",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0f172a 0%, #ff007f 50%, #ff66b3 100%)",
        "tech-gradient": "linear-gradient(to right, #ff007f, #ff66b3)",
        "pink-gradient": "linear-gradient(to right, #ff007f, #ff99cc)",
        "card-gradient": "linear-gradient(145deg, #ffffff 0%, #fef7f0 100%)",
        "mesh-gradient":
          "radial-gradient(circle at 20% 80%, #ff007f 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff66b3 0%, transparent 50%), radial-gradient(circle at 40% 40%, #a855f7 0%, transparent 50%)",
      },
      blur: {
        "4xl": "72px",
        "5xl": "96px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.8",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.4",
            transform: "scale(1.1)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
            filter: "blur(20px)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.1)",
            filter: "blur(15px)",
          },
        },
        drift: {
          "0%": {
            transform: "translateX(0px) translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateX(30px) translateY(-30px) rotate(120deg)",
          },
          "66%": {
            transform: "translateX(-20px) translateY(20px) rotate(240deg)",
          },
          "100%": {
            transform: "translateX(0px) translateY(0px) rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
