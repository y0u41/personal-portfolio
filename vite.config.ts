import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 相对 base：部署到任意子路径（GitHub Pages / 子目录）时资源都不会 404
  base: './',
  plugins: [react(), tailwindcss()],
})
