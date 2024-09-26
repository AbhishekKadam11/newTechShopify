import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl'
import dynamicImport from 'vite-plugin-dynamic-import';
import shopifyClean from '@by-association-only/vite-plugin-shopify-clean';

const liquidNoUpdate = () => ({
  name: 'liquid-no-hot-update',
  handleHotUpdate({ file }) {
    return (file.endsWith('.liquid')) ? [] : null;
  },
});

const proxyOptions = {
  target: `http://127.0.0.1:${process.env.WEB_PORT || 9292}`,
  changeOrigin: true,
  secure: true,
  ws: true,
};

export default {
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
    open: '/',
    proxy: {
      '^/(?!(@(.*)|node_modules|src|styles)/)': proxyOptions
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      'focus-trap-vue$': 'focus-trap-vue/dist/index.esm.js',
      '@utils': path.resolve(__dirname, './src/scripts/utils'),
      '@components': path.resolve(__dirname, './src/components'),
    },
    extensions: ['.vue', '.js', '.json', '.mjs']
  },

  plugins: [
    dynamicImport(),
    basicSsl(),
    shopifyClean(),
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

};