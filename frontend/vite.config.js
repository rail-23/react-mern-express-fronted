import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Facilita los imports desde `src`
    },
  },
  build: {
    rollupOptions: {
      input: './index.html', // Define explícitamente el archivo de entrada
    },
  },
});
