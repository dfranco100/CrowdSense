/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#284878',
        secondary: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

///Users/dfranco/Desktop/Senior_project/CrowdSense/app