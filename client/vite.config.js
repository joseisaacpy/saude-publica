import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    allowedHosts: ["all", "f9f7-187-19-169-200.ngrok-free.app"],
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
