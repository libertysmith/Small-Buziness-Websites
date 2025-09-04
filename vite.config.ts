import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// IMPORTANT for GitHub Pages project sites: replace <REPO> with the actual repo name.
export default defineConfig({
  plugins: [react()],
  base: '/<REPO>/' // TODO: set to the repo name (e.g., /dfw-websites/)
})
