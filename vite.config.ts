import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ssr from "vike/plugin";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: true,
    }),
  ],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "src/"),
    },
  },
});
