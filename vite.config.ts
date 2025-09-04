import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// IMPORTANT for GitHub Pages project sites: replace <REPO> with the actual repo name.
export default defineConfig({
  plugins: [react()],
  base: '/<REPO>/', // TODO: set to the repo name (e.g., /dfw-websites/)
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
