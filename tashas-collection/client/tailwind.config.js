/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript/TypeScript/JSX files in the src directory
    "./public/index.html"         // Include the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCC200',       // Primary brand color (e.g., yellow)
        secondary: '#00796B',     // Secondary brand color (e.g., teal)
        accent: '#FFB6C1',        // Accent color (e.g., light pink)
        dark: '#292F36',          // Dark color for text or backgrounds
        light: '#F7FFF7',         // Light color for backgrounds or text
        brand: {
          teal: '#00796B',        // Brand-specific teal
          pink: '#FFB6C1',        // Brand-specific pink
          black: '#000000'        // Brand-specific black
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],       // Default sans-serif font
        heading: ['Montserrat', 'sans-serif'], // Font for headings
        serif: ['Playfair Display', 'serif']   // Serif font for special styles
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),    // Add support for form styling
    require('@tailwindcss/typography') // Add support for rich typography
  ]
};