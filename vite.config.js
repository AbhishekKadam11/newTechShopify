import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    shopify({
      sourceCodeDir: "src",
      entrypointsDir: 'src/entrypoints',
      snippetFile: "vite.liquid",
    }),
    vue()
  ],
  build: {
    emptyOutDir: false,
  },
});