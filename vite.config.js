import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://api.adviceslip.com", // Target server
        changeOrigin: true, // Required for cross-origin requests
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes "/api" from the URL
      },
    },
  },
});
