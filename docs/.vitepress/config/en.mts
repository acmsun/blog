import { enNav } from '../navbar/index.mjs'
import { enSidebar } from '../sidebar/index.mjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'en-US',
  title: 'WuZi Sun', // 站点名称
  titleTemplate: 'Hello!!!', // 网站标题
  description: 'Only you can control your future.', // 站点描述

  themeConfig: { // 主题设置
    nav: enNav,
    sidebar: enSidebar, // 侧边栏

    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} WuZi Sun`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
    },
    editLink: {
      pattern: 'https://github.com/acmsun/blog/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
  }
}