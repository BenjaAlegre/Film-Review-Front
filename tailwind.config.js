/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
import { Flowbite } from 'flowbite-react'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    Flowbite,
    formsPlugin
  ],
}

