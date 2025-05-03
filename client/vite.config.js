import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // Ensure Vite outputs to the 'dist' directory
  },
  server: {
    historyApiFallback: true, // Important for client-side routing
  },
});
