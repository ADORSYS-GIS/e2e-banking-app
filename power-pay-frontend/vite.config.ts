import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'PPA',
        short_name: 'PPA',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/public/icon36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: '/public/icon48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/public/icon310x310.png',
            sizes: '310x310',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/public/icon144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});