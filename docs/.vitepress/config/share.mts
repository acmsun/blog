import { defineConfig } from 'vitepress'
import { zhSearchI18n } from '../search-i18n/index.mjs'

export const sharedConfig = defineConfig({
  base: '/blog/', // 网站部署的路径到blog这个仓库
  lang: 'zh-CN', // 语言
  title: '孙武子', // 站点名称
  titleTemplate: '你好！！！', // 网站标题
  description: '只有你自己可以掌控你的未来。', // 站点描述
  head: [
    ['link', { rel: 'shortcut icon', href: `./ico/16x16/favicon.ico` }],
    // 网页视口
    ['meta', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no'
    }],
    // 关键词和描述
    ['meta', { name: 'keywords', content: '孙武子' }],
    // Algolia 站点验证
    ['meta', { name: 'algolia-site-verification', content: '931748345034A8DB' }]
  ],

  cleanUrls: true, // 开启纯净链接
  lastUpdated: true, // 上次更新
  appearance: true, // 主题模式，默认浅色且开启切换
  metaChunk: true,

  themeConfig: {
    i18nRouting: false,
    logo: './png/64x64/favicon.png', // 导航栏的 Logo

    socialLinks: [ // 社交帐户链接
      { icon: 'github', link: 'https://github.com/acmsun/blog' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8W06R6RHDQ',
        apiKey: '7836c62a18087c30c4e3732bc5fe628c',
        indexName: 'docs',
        locales: {
          root: zhSearchI18n
        }
      }
    }
  }
})