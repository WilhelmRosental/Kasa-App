import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/projets/11-kasa/', //Indique la racine du fichier
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/main.scss';`,
      },
    },
  },
  // build: {
  //   assetsDir: 'projets/11-kasa',
  // },
})
