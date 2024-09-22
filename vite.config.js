import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl'
import dynamicImport from 'vite-plugin-dynamic-import';

const liquidNoUpdate = () => ({
  name: 'liquid-no-hot-update',
  handleHotUpdate({ file }) {
    return (file.endsWith('.liquid')) ? [] : null;
  },
})

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      'focus-trap-vue$': 'focus-trap-vue/dist/index.esm.js',
      '@utils': path.resolve(__dirname, './src/scripts/utils'),
      '@components': path.resolve(__dirname, './src/components'),
    },
    extensions: ['.vue', '.js', '.json', '.mjs']
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].bundle.min.js',
        chunkFileNames: '[name].[hash].chunk.min.js',
        assetFileNames: '[name].[hash].assset.min[extname]'
      }
    }
  },
  server: {
    https: true,
    strictPort: true,
    open: true,
    proxy: {
      '^/(?!(@(.*)|node_modules|src|styles)/)': {
        target: 'http://127.0.0.1:9292',
        changeOrigin: true,
      },
    }
  },
  plugins: [
    dynamicImport(),
    basicSsl(),
    shopify({
      themeRoot: './',
      sourceCodeDir: "src",
      entrypointsDir: 'src/entrypoints',
      additionalEntrypoints: ['src/entrypoints/*.js',
        'src/scripts/utils/*.js'
      ],
      snippetFile: "vite-tag.liquid",
    }),
    vue(),
    liquidNoUpdate()
  ],


});