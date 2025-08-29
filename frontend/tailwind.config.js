/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        // add the rest if needed
      },
       outlineColor: {
        ring: "var(--color-ring)", //  adds "outline-ring"
      },
    },
  },
  plugins: [],
};
