// vite.config.js (Corrected)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // The react() plugin accepts a 'babel' option
      babel: {
        // The 'plugins' array for Babel is correctly defined and closed here
        plugins: [
          ['babel-plugin-react-compiler'],
        ],
      },
    }),
    
    
    tailwindcss(),
  ],
})