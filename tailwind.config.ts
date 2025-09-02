/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // We have defined our colors in globals.css, so we don't need to extend the theme here for colors.
  // This config is still essential for other plugins and PurgeCSS content paths.
  theme: {
    extend: {
      // You can extend other things here later, like fontFamily or spacing.
      // fontFamily: {
      //   sans: ['var(--font-geist-sans)', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
