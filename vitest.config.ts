import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@/stores": path.resolve(__dirname, "src/stores"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/types": path.resolve(__dirname, "src/types")
    }
  },
  test: {
    environment: "jsdom",
    pool: "threads",
    setupFiles: ["./vitest.setup.ts"],
    css: {
      modules: {
        classNameStrategy: "non-scoped"
      }
    }
  }
});
