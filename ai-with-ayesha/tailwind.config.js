/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '1rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1320px',
			},
		},
		extend: {
			colors: {
				// Primary Lavender/Purple
				primary: {
					50: '#F3E5F5',
					100: '#E1BEE7',
					200: '#D1C4E9',
					300: '#CE93D8',
					400: '#BA68C8',
					500: '#9C27B0',
					600: '#8E24AA',
					700: '#7B1FA2',
					800: '#6A1B9A',
					900: '#4A148C',
					DEFAULT: '#9C27B0',
				},
				// Accent Pink/Purple
				accent: {
					50: '#FCE4EC',
					100: '#F8BBD9',
					200: '#F48FB1',
					300: '#F06292',
					400: '#EC407A',
					500: '#E91E63',
					600: '#D81B60',
					DEFAULT: '#E91E63',
				},
				// Secondary Light Purple
				secondary: {
					50: '#F5F3FF',
					100: '#E8EAF6',
					200: '#D1C4E9',
					300: '#B39DDB',
					400: '#9575CD',
					500: '#7E57C2',
					DEFAULT: '#9575CD',
				},
				// Neutral Grays
				neutral: {
					50: '#F8F9FA',
					100: '#F1F3F5',
					300: '#DEE2E6',
					500: '#868E96',
					700: '#495057',
					900: '#212529',
				},
				// Semantic Colors
				success: '#10B981',
				warning: '#F59E0B',
				error: '#EF4444',
				info: '#BA68C8',
			},
			fontFamily: {
				sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				mono: ['JetBrains Mono', 'Courier New', 'monospace'],
			},
			fontSize: {
				hero: ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
				h1: ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
				h2: ['40px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
				h3: ['32px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '500' }],
				lg: ['20px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
				base: ['16px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
				sm: ['14px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
				xs: ['12px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '300' }],
			},
			spacing: {
				'1': '8px',
				'2': '16px',
				'3': '24px',
				'4': '32px',
				'6': '48px',
				'8': '64px',
				'12': '96px',
				'16': '128px',
			},
			borderRadius: {
				sm: '12px',
				md: '16px',
				lg: '24px',
				xl: '32px',
				full: '9999px',
			},
			boxShadow: {
				glass: '0 8px 32px rgba(156, 39, 176, 0.08), 0 4px 16px rgba(156, 39, 176, 0.05)',
				'glass-hover': '0 12px 40px rgba(156, 39, 176, 0.15), 0 6px 20px rgba(186, 104, 200, 0.12)',
				solid: '0 4px 12px rgba(156, 39, 176, 0.25)',
				glow: '0 0 20px rgba(186, 104, 200, 0.3), 0 0 40px rgba(156, 39, 176, 0.15)',
				'glow-strong': '0 0 30px rgba(186, 104, 200, 0.4), 0 0 60px rgba(156, 39, 176, 0.2)',
				modal: '0 20px 60px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)',
			},
			backdropBlur: {
				light: '8px',
				standard: '20px',
				strong: '40px',
			},
			backdropSaturate: {
				150: '150%',
				180: '180%',
			},
			transitionDuration: {
				fast: '200ms',
				base: '300ms',
				smooth: '400ms',
			},
			transitionTimingFunction: {
				'smooth-ease': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
			},
			backgroundImage: {
				'gradient-main': 'linear-gradient(135deg, #F3E5F5 0%, #E8EAF6 50%, #F5F3FF 100%)',
				'gradient-hero': 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 25%, #D1C4E9 50%, #E8EAF6 75%, #F5F3FF 100%)',
				'gradient-warm': 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 50%, #F3E5F5 100%)',
				'gradient-purple': 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 50%, #CE93D8 100%)',
				'gradient-radial': 'radial-gradient(circle at center, #E1BEE7 0%, #F3E5F5 100%)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
