import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Karanveer-Portfolio2', // 👈 this fixes the blank page on deployment
})
