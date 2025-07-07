import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    host: true, // permite acesso externo (0.0.0.0)
    port: 5173, // pode definir a porta desejada
    cors: true, // ativa CORS
    origin: "http://localhost:5173", // ou o domínio do ngrok, se necessário
    allowedHosts: [
      "all",
      "localhost",
      "127.0.0.1",
      "6d27b5113ad6.ngrok-free.app",
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
