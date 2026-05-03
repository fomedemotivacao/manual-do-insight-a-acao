import { defineConfig } from '@tanstack/start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    preset: 'vercel',
  },
  vite: {
    plugins: [
      tsConfigPaths(),
      react(),
      tailwindcss(),
    ],
  },
})
