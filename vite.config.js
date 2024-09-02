import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';

export default defineConfig({
  plugins: [
    shopify({
      sourceCodeDir: "src",
      entrypointsDir: 'src/entrypoints',
      snippetFile: "vite.liquid",
    })
  ],
  build: {
    emptyOutDir: false,
  },
});