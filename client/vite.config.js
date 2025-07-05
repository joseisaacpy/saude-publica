import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: [
      "all",
      "b6dc-2804-29b8-519d-edd6-f8e6-d871-fec9-c760.ngrok-free.app",
    ],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    cssCodeSplit: false, // Mantém todo CSS em um arquivo
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
