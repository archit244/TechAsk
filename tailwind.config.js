/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── Brand colours ───────────────────────────────────────────
      colors: {
        brand: {
          deep:  '#0b3b6e',
          mid:   '#0ea5e9',
          light: '#38bdf8',
          pale:  '#e0f4ff',
        },
        blue: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fd',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },

      // ── Typography ───────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },

      // ── Shadows ──────────────────────────────────────────────────
      boxShadow: {
        xs:         '0 1px 4px rgba(11,59,110,0.06)',
        sm:         '0 2px 10px rgba(11,59,110,0.10)',
        md:         '0 6px 24px rgba(11,59,110,0.14)',
        lg:         '0 12px 40px rgba(11,59,110,0.18)',
        xl:         '0 20px 64px rgba(11,59,110,0.22)',
        card:       '0 2px 12px rgba(0,0,0,0.05), 0 1px 4px rgba(11,59,110,0.08)',
        btn:        '0 4px 16px rgba(14,165,233,0.40)',
        'btn-hover':'0 8px 28px rgba(14,165,233,0.55)',
        glass:      '0 4px 6px rgba(0,0,0,0.02), 0 16px 48px rgba(11,59,110,0.08), inset 0 1px 0 rgba(255,255,255,1)',
        'glass-hover': '0 4px 6px rgba(0,0,0,0.02), 0 32px 70px rgba(11,59,110,0.13), 0 0 0 1px rgba(14,165,233,0.18), 0 0 60px rgba(14,165,233,0.06), inset 0 1px 0 rgba(255,255,255,1)',
      },

      // ── Border radius ─────────────────────────────────────────────
      borderRadius: {
        sm:   '10px',
        DEFAULT: '16px',
        lg:   '24px',
        xl:   '32px',
        '2xl':'48px',
        '3xl':'68px',
        full: '9999px',
      },

      // ── Animations ────────────────────────────────────────────────
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        'play-pulse': {
          '0%, 100%': { boxShadow: '0 8px 32px rgba(14,165,233,0.45), 0 0 0 0 rgba(14,165,233,0.3)' },
          '50%':       { boxShadow: '0 8px 32px rgba(14,165,233,0.55), 0 0 0 14px rgba(14,165,233,0)' },
        },
        'border-beam-spin': {
          to: { rotate: '360deg' },
        },
        // ── Backlight: pulsing ambient halo outside the card ──────
        'backlight-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%':       { opacity: '0.85', transform: 'scale(1.04)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:          'marquee 38s linear infinite',
        'play-pulse':     'play-pulse 2.5s ease-in-out infinite',
        'beam-spin':      'border-beam-spin var(--beam-duration, 7s) linear var(--beam-delay, 0s) infinite',
        'backlight':      'backlight-pulse 3s ease-in-out infinite',
        'backlight-slow': 'backlight-pulse 4.5s ease-in-out infinite',
        slideDown:        'slideDown 0.24s cubic-bezier(0.25,0.46,0.45,0.94)',
      },

      // ── Background gradients (as arbitrary values in components) ─
      backgroundImage: {
        'grad-btn':    'linear-gradient(135deg, #0b3b6e 0%, #0ea5e9 60%, #38bdf8 100%)',
        'grad-accent': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
      },
    },
  },
  plugins: [],
}
