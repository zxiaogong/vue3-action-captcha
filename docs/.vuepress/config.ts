import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
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
        // children: [
        //   // SidebarItem
        //   {
        //     text: 'github',
        //     link: 'https://github.com',
        //     children: [],
        //   },
        //   // 字符串 - 页面文件路径
        //   '/foo/bar.md',
        // ],
      },
      {
        text: '快速上手',
        link: '/redemFiles/getting-started.md',
      },
    ],
  }),
})