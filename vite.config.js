import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MISSING_EXPORT') return
        warn(warning)
      }
    }
  }
})
