/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0B08',
        char: '#14160F',
        char2: '#191C12',
        lime: '#C6F135',
        gold: '#E9C46A',
        ash: '#9AA08F',
        smoke: '#E7E3D6',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        voice: ['Fraunces', 'serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '1240px' },
      keyframes: {
        starUp: { from: { transform: 'translateY(0)' }, to: { transform: 'translateY(-2000px)' } },
        scrollX: { to: { transform: 'translateX(-50%)' } },
        cue: { '0%,100%': { transform: 'scaleY(.4)', opacity: '.4' }, '50%': { transform: 'scaleY(1)', opacity: '1' } },
        pulse2: { '0%': { boxShadow: '0 0 0 0 rgba(198,241,53,.4)' }, '70%': { boxShadow: '0 0 0 26px rgba(198,241,53,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(198,241,53,0)' } },
        spinMark: { '0%,100%': { transform: 'rotate(0) scale(1)' }, '50%': { transform: 'rotate(180deg) scale(1.08)' } },
      },
      animation: {
        starUp: 'starUp linear infinite',
        scrollX: 'scrollX 34s linear infinite',
        cue: 'cue 1.8s ease-in-out infinite',
        pulse2: 'pulse2 2.6s infinite',
        spinMark: 'spinMark 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
