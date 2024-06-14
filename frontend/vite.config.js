import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-chat-app-api-gamma.vercel.app/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

// localhost:5050 is replaced with deploy url
//ref for proxi: https://medium.com/@pavitramodi.it/bridging-react-and-node-with-vites-proxy-configuration-7281bbe23169