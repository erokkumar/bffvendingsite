import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BFFVending/', // Your exact repo name
  build: {
    outDir: 'dist',
  }
})