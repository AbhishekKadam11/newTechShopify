import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import http from "https";

const proxyOptions = {
  target: `http://127.0.0.1:${process.env.BACKEND_PORT || 9292}`,
  changeOrigin: false,
  secure: true,
  ws: false
}
const host = process.env.HOST ? process.env.HOST.replace(/https?:\/\//, '') : 'localhost'

let hmrConfig
if (host === 'localhost') {
  hmrConfig = {
    protocol: 'ws',
    host: 'localhost',
    port: 5173,
    clientPort: 5173
  }
} else {
  hmrConfig = {
    protocol: 'wss',
    host: host,
    port: process.env.FRONTEND_PORT,
    clientPort: 443
  }
}

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@utils': path.resolve(__dirname, './scripts/utils'),
      '@components': path.resolve(__dirname, './scripts/components'),
    },
    extensions: ['.vue', '.js', '.json']
  },
  build: {
    emptyOutDir: false,
  },
  server: {
    // host: 'localhost',
    // port: process.env.FRONTEND_PORT || 9292,
    // hmr: hmrConfig,
    https: false,
    strictPort: true,
    open: true,
    proxy: {
      '^/(?!(@(.*)|node_modules|src|styles)/)': {
        target: 'http://127.0.0.1:9292',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/frontend\/entrypoints\/*/, ''),
        // secure: false,
        // agent: new http.Agent()
      },
    }
  },
  plugins: [
    shopify({
      themeRoot: './',
      sourceCodeDir: "src",
      entrypointsDir: 'src/entrypoints',
      additionalEntrypoints: ['src/entrypoints/*.js'],
      snippetFile: "vite-tag.liquid",
    }),
    vue({
      template:{
        compilerOptions:{
       
        }
      }
    })
  ],
  
  
});