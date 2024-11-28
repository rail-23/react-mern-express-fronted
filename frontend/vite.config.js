import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Asegura que las rutas relativas se resuelvan correctamente
    },
  },
  build: {
    outDir: 'dist', // Directorio donde se generará la aplicación
    rollupOptions: {
      input: './index.html', // Asegura que el archivo de entrada sea index.html
    },
  },
});
