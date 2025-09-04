import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Small-Buziness-Websites/", // project site base
  server: {
    port: 8080,
  },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } }
});
