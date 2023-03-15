/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import Delete from "rollup-plugin-delete"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    outDir: "dist/lib",
    lib: {
      entry: path.resolve(__dirname, 'src/components/index'),
      name: 'captcha',
      fileName: (format) => `captcha.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      },
      plugins:[
        //删除指定的图标文件
        Delete({
          targets:['dist/*.{ico,txt}'],
          hook:'generateBundle'
        })
      ]
    }
  },
  test: {
    environment: 'happy-dom'
  }
})
