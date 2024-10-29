import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://maps.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/fast": {
        target: "https://www.fast2sms.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fast/, ""),
      },
    },
  },
});
