import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },

  esbuild: {
    jsx: "transform",
    jsxDev: false,
    jsxImportSource: "@",
    jsxInject: `import { jsx } from '@/jsx-runtime'`,
    jsxFactory: "jsx.component",
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});