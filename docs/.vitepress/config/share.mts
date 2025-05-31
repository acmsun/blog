import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
  base: '/blog/', // 网站部署的路径到blog这个仓库
  lang: 'zh-CN', // 语言
  title: '孙武子', // 站点名称
  titleTemplate: '你好！！！', // 网站标题
  description: '只有你自己可以掌控你的未来。', // 站点描述
  head: [
    ['link', { rel: "shortcut icon", href: `./ico/64x64/favicon.ico` }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "孙武子" }],
  ],

  cleanUrls: true, // 简洁 URL
  lastUpdated: true, // 上次更新
  appearance: true, // 主题模式，默认浅色且开启切换
  metaChunk: true,

  themeConfig: {
    logo: './ico/64x64/favicon.ico'
  }
})