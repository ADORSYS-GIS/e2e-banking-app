import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate', 
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{ts,css,html,}']
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
    })
  ],
})
