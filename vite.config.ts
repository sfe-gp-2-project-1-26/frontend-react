import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7239', // Assuming the .NET backend runs here
        changeOrigin: true,
        secure: false,
      },
      '/chat': {
        target: 'http://localhost:8000', // Assuming FastAPI backend runs here
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
