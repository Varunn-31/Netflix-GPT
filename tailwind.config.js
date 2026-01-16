/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Netflix-inspired red primary color palette
        primary: {
          50: '#fee2e2',
          100: '#fecaca',
          200: '#fca5a5',
          300: '#f87171',
          400: '#ef4444',
          500: '#E50914', // Netflix red - Main primary
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Custom accent colors - darker reds for variety
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#E50914', // Netflix red - Main accent
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Custom secondary - grays for neutral elements
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Main secondary
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Netflix-style dark theme colors
        dark: {
          bg: '#000000',      // Pure black background (Netflix style)
          surface: '#141414', // Card/surface color (slightly lighter than black)
          border: '#333333',  // Border color
          text: '#ffffff',    // Pure white text
          muted: '#b3b3b3',   // Muted text (lighter gray)
        },
        // Custom success/warning/error
        success: '#10b981',
        warning: '#f59e0b',
        error: '#E50914', // Netflix red for errors
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // Netflix-style body font
        display: ['Bebas Neue', 'Impact', 'Arial Black', 'sans-serif'], // Netflix-style display font
      },
      borderRadius: {
        'sm': '0.25rem',   // Small rounded (Netflix style)
        'md': '0.375rem',  // Medium rounded
        'lg': '0.5rem',    // Large rounded
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'netflix': '0.375rem', // Netflix-style button radius
      },
      boxShadow: {
        'glow': '0 0 20px rgba(229, 9, 20, 0.3)',
        'glow-lg': '0 0 30px rgba(229, 9, 20, 0.4)',
        'accent-glow': '0 0 20px rgba(229, 9, 20, 0.3)',
        'netflix': '0 2px 8px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
