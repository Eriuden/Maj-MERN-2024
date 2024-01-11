import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT,
    proxy: {
      "/api": {
        target: process.env.API_PORT,
        changeOrigin: true
      }
    }
  }
})
