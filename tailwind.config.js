// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // Indigo-800
        secondary: "#F59E0B", // Amber-500
        accent: "#10B981",    // Green-500 (optional)
      },
    },
  },
  plugins: [],
};
