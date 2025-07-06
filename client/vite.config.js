import { defineConfig } from "vite";
import { resolve } from "path";

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
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        form: resolve(process.cwd(), "form-page.html"),
        notfound: resolve(process.cwd(), "404.html"),
        admin: resolve(process.cwd(), "painel-admin.html"),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
