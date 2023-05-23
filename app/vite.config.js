import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import path from "path";
import { mkdirSync } from "fs";

const outDir = "../web/wwwroot/build";

mkdirSync(outDir, { recursive: true });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      input: ["src/main.tsx"],
      publicDirectory: outDir,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
});
