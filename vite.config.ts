import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "ImageEditor",
      fileName: (format) => `image-editor.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "vueDemi",
        },
      },
    },
  },
});
