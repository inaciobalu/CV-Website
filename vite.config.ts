import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CV-Website/',  // Add this line to set the base path for GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
