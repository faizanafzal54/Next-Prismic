import type { Config } from "tailwindcss";
import fluid, { extract , screens, fontSize, FluidThemeConfig } from 'fluid-tailwind'

export default {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    fluid: (({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')]
    })) satisfies FluidThemeConfig,
    screens , fontSize,
    extend: {
      fontFamily: {
        body : ["var(--font-nunito-sans)"],
        display : ["var(--font-nunito)"],
      },
      colors: {
        "brand-black": "#101010",
        "brand-gray": "#F4F5F5",
        "brand-text": "#FFFFFF",
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
