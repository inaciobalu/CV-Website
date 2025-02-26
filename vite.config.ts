import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/CV-Website/", // Ensures assets and paths are correctly generated
});
