import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@utils': path.resolve(__dirname, './scripts/utils'),
      '@components': path.resolve(__dirname, './scripts/components'),
    },
    extensions: ['.vue', '.js', '.json']
  },
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