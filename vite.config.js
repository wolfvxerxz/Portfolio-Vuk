import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import the path module

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Example alias setup using path.resolve
    },
  },
});
