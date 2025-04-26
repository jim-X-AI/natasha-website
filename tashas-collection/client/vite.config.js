import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js' // Ensure this matches the location of your PostCSS config
  },
  server: {
    hmr: {
      overlay: false // Optional: Disables the error overlay if needed
    }
  }
});