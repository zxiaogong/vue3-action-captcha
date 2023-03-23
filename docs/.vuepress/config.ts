import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
// const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  plugins: [
    registerComponentsPlugin({
      componentsDir:path.resolve(__dirname, '/node_modules/vue3-action-captcha'),
    }),
  ],
  base:"/vue3-action-captcha/",
  lang: 'zh-CN',
  title: 'vue3 行为验证码',
  description: 'vue3 行为验证码',
  pagePatterns: ['**/*.md', 'vuepress', '!node_modules'],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '介绍',
        link: '/',
      },
      {
        text: '快速上手',
        link: '/redemFiles/getting-started.md',
      },
      {
        text: '滑动拼图',
        link: '/redemFiles/sliderCaptcha.md',
      },
      {
        text: '推理拼图',
        link: '/redemFiles/dragCaptcha.md',
      },
    ],
    
  }),
  
})