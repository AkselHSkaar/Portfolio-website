import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      gray: {
        900: '#000000',
        800: '#0D0D0D',
        700: '#1D1D1D',
        600: '#333333',
        500: '#4D4D4D',
        400: '#666666',
        300: '#999999',
        200: '#CCCCCC',
        100: '#E6E6E6',
        50: '#F9F9F9',
        0: '#FFFFFF',
      },
      red: {
        500: '#dc2626',
      },
    },
    fontSize: {
      // tiny
      'tiny-thin': [
        '0.875rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.0125rem',
        },
      ],
      'tiny-regular': [
        '0.875rem',
        {
          lineHeight: '105%',
          fontWeight: '400',
          letterSpacing: '-0.0125rem',
        },
      ],
      'tiny-bold': [
        '0.875rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.03125rem',
        },
      ],
      // xsmall
      'xsmall-thin': [
        '1rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.0125rem',
        },
      ],
      'xsmall-regular': [
        '1rem',
        {
          lineHeight: '110%',
          fontWeight: '400',
          letterSpacing: '-0.0125rem',
        },
      ],
      'xsmall-bold': [
        '1rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.03125rem',
        },
      ],
      // small
      'small-thin': [
        '1.125rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.025rem',
        },
      ],
      'small-regular': [
        '1.125rem',
        {
          lineHeight: '110%',
          fontWeight: '400',
          letterSpacing: '-0.025rem',
        },
      ],
      'small-bold': [
        '1.125rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.03125rem',
        },
      ],
      // regular
      'regular-thin': [
        '1.25rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.025rem',
        },
      ],
      'regular-regular': [
        '1.25rem',
        {
          lineHeight: '115%',
          fontWeight: '400',
          letterSpacing: '-0.025rem',
        },
      ],
      'regular-bold': [
        '1.25rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.0375rem',
        },
      ],
      // medium
      'medium-thin': [
        '1.5rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.0375rem',
        },
      ],
      'medium-regular': [
        '1.5rem',
        {
          lineHeight: '115%',
          fontWeight: '400',
          letterSpacing: '-0.03725rem',
        },
      ],
      'medium-bold': [
        '1.5rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.05rem',
        },
      ],
      // large
      'large-thin': [
        '1.625rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.0375rem',
        },
      ],
      'large-regular': [
        '1.625rem',
        {
          lineHeight: '120%',
          fontWeight: '400',
          letterSpacing: '-0.0375rem',
        },
      ],
      'large-bold': [
        '1.625rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.05rem',
        },
      ],
      // xlarge
      'xlarge-thin': [
        '1.75rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.05rem',
        },
      ],
      'xlarge-regular': [
        '1.75rem',
        {
          lineHeight: '120%',
          fontWeight: '400',
          letterSpacing: '-0.05rem',
        },
      ],
      'xlarge-bold': [
        '1.75rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.0625rem',
        },
      ],
      // huge
      'huge-thin': [
        '2rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.0625rem',
        },
      ],
      'huge-regular': [
        '2rem',
        {
          lineHeight: '120%',
          fontWeight: '400',
          letterSpacing: '-0.0625rem',
        },
      ],
      'huge-bold': [
        '2rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.0625rem',
        },
      ],
      // xhuge
      'xhuge-thin': [
        '2.25rem',
        {
          lineHeight: '105%',
          fontWeight: '300',
          letterSpacing: '-0.0625rem',
        },
      ],
      'xhuge-regular': [
        '2.25rem',
        {
          lineHeight: '120%',
          fontWeight: '400',
          letterSpacing: '-0.0625rem',
        },
      ],
      'xhuge-bold': [
        '2.25rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.075rem',
        },
      ],
      // Headers
      h6: [
        '2.5rem',
        {
          lineHeight: '95%',
          fontWeight: '700',
          letterSpacing: '-0.15625rem',
        },
      ],
      h5: [
        '4rem',
        {
          lineHeight: '95%',
          fontWeight: '700',
          letterSpacing: '-0.15625rem',
        },
      ],
      h4: [
        '5.25rem',
        {
          lineHeight: '95%',
          fontWeight: '700',
          letterSpacing: '-0.15625rem',
        },
      ],
      h3: [
        '6.25rem',
        {
          lineHeight: '87%',
          fontWeight: '700',
          letterSpacing: '-0.25rem',
        },
      ],
      h2: [
        '7.25rem',
        {
          lineHeight: '87%',
          fontWeight: '700',
          letterSpacing: '-0.25rem',
        },
      ],
      h1: [
        '8.25rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-0.075rem',
        },
      ],
    },
    spacing: {
      0: '0rem',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '0.75rem',
      5: '1rem',
      6: '1.25rem',
      7: '1.5rem',
      8: '1.75rem',
      9: '2rem',
      10: '2.25rem',
      11: '2.5rem',
      12: '2.75rem',
      13: '3rem',
      14: '3.5rem',
      15: '4rem',
      16: '4.5rem',
      17: '5rem',
      18: '5.5rem',
      19: '6rem',
      20: '6.5rem',
      21: '7rem',
      22: '7.5rem',
      23: '8rem',
      24: '8.5rem',
      25: '9rem',
      26: '9.5rem',
      27: '10rem',
      // Default sections
      'section-xs': '4.5rem',
      'section-md': '5.5rem',
      'section-lg': '7rem',
      'section-xl': '8.5rem',
      'section-2xl': '10rem',
      // Fixed navbar height
      'navbar-sm': '3.188rem',
      'navbar-md': '3.5rem',
      'navbar-lg': '4.938rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      textColor: ({ theme }) => ({
        'primary-light': theme('colors.gray.900'),
        'secondary-light': theme('colors.gray.500'),

        'primary-dark': theme('colors.gray.50'),
        'secondary-dark': theme('colors.gray.300'),
      }),
      backgroundColor: ({ theme }) => ({
        'primary-light': theme('colors.gray.0'),
        'secondary-light': theme('colors.gray.200'),

        'primary-dark': theme('colors.gray.800'),
        'secondary-dark': theme('colors.gray.600'),
      }),
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      opacity: {
        25: '25',
        50: '50',
        75: '75',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
