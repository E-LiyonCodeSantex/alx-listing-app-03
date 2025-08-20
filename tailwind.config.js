/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                emeraldTint: '#34987C',
                emeraldTintHover: '#2c826e',
            },
            screens: {
                'xs': '400px', // ← Custom screen for 400px
            },
        }
    },
    plugins: [],
};