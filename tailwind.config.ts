import type { Config } from 'tailwindcss'
import headlessui from '@headlessui/tailwindcss'


export default {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        heading: ["Big Shoulders Text", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        forms: "var(--forms)",
        "around-forms": "var(--around-forms)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "secondary-surface": "var(--secondary-surface)",
        positive: "var(--positive)",
        tentative: "var(--tentative)",
        destructive: "var(--destructive)",
        "on-surface": "var(--on-surface)",
        "on-primary": "var(--on-primary)",
        "on-secondary": "var(--on-secondary)",
        "on-surface-secondary": "var(--on-surface-secondary)",
        "on-surface-tertiary": "var(--on-surface-tertiary)",
        "on-forms": "var(--on-forms)",
        "surface-gradient": "var(--surface-gradient)",
        purple: "var(--purple)",
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        "mid-blue": "var(--mid-blue)",
        "light-cream": "var(--light-cream)",
        "mid-green": "var(--mid-green)",
        "destructive-secondary": "var(--destructive-secondary)",
        "tertiary-surface": "var(--tertiary-surface)",
      },
     
      backgroundImage: {
        'full-gradient': 'linear-gradient(90deg,#E54DE5 0%,#16DBBE 52.08%,#FFC839 100%)'
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    headlessui
  ],
} satisfies Config;
