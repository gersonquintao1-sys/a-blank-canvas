import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/proposta-luiza/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-luiza",
    rollupOptions: {
      input: path.resolve(__dirname, "index-deploy.html"),
    },
  },
});
