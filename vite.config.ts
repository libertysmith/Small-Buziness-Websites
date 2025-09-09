import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Use env at build time; falls back to root for local dev
  base: process.env.VITE_BASE ?? '/',
  server: {
    port: 8080
  },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } }
});
