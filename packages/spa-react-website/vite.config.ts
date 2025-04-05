import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // if comment this line, it'll cause `Failed to resolve import "@shared/pure-css-components/ShareButton" from "src/App.tsx". Does the file exist?`
      '@shared/pure-css-components': path.resolve(__dirname, '../shared-components/pure-css-components'),
    },
  },
})
