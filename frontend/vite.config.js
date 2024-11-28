import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // Asegura que use la raíz del proyecto
  plugins: [react()],
  build: {
    outDir: 'dist', // Directorio de salida
    rollupOptions: {
      input: './index.html', // Archivo de entrada
    },
  },
});
