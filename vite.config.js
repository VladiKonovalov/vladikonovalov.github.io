import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// IMPORTANT: Update the base path to match your GitHub repository name
// If your repo is "Portfolio", use '/Portfolio/'
// If deploying to root (username.github.io), use '/'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Change this to match your repository name or '/' for root deployment
})
