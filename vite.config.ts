import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
    build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), 
      name: "hero-slider", 
      fileName: (format) => `hero-slider.${format}.js`
    }, 
    rollupOptions: {
      external: ["vue"], 
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue(), vueJsx(),  dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json'
    }),],
})
