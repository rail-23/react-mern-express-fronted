import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Asegura que la raíz sea la carpeta actual
  build: {
    rollupOptions: {
      input: './index.html', // Define explícitamente el archivo de entrada
    },
  },
});

