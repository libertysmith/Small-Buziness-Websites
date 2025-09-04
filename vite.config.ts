import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? (process.env.VITE_BASE ?? "/") : "/",
  server: {
    port: 8080
  },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } }
}));
