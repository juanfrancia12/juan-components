import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.tsx',
      name: 'JuanComponents',
      formats: ['es', 'umd'],
      fileName: 'juan-components',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types'],
    },
  },
})
