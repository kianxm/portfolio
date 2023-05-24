/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "xl-center": "0 2px 16px 1px rgba(0, 0, 0, 0.2)",
      },
    },
    fontFamily: {
      signature: ["Poppins"],
    },
  },
  plugins: [],
};
