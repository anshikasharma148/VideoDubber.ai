/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F9FA',
        border: '#E1E4E8',
        muted: '#6C757D',
        secondary: '#FFE3E3',
        'secondary-foreground': '#FF4B4B',
        accent: '#FF4B4B',
        'accent-foreground': '#FFFFFF',
        'custom-gradient-start': '#ff4582',
        'custom-gradient-end': '#ff6154',
      },
      height: {
        '64': '64px',
      },
      width: {
        '90': '90px',
        '224': '224px',
      },
    },
  },
  plugins: [],
};
