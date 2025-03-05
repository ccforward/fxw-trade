import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [ElementPlusResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['src/components', 'src/views'],
      dts: true,
    }),
  ],
  build: {
    base: './',
    outDir: '../public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
      },
      output: {
        dir: '../public',
        entryFileNames: 'assets/[name]/[name].[hash].js',
        chunkFileNames: 'assets/[name]/[name].[hash].js',
        assetFileNames: 'assets/[name]/[name].[hash].[ext]',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 9009,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
