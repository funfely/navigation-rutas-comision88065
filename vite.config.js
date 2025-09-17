import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/navigation-rutas-comision88065/', //aca declaro el nombre del repo que estoy publicando en GH pages
})
