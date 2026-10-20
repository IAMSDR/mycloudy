import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 6969,
    strictPort: true,
    allowedHosts: ['me.iamsdr.in'],
    proxy: {
      '/api': {
        target: 'http://localhost:6970',
        changeOrigin: true,
      },
    },
  },
})
