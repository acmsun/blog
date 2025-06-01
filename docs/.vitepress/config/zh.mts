import { zhNav } from '../navbar/index.mjs'
import { zhSidebar } from '../sidebar/index.mjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'zh-CN',
  title: '孙武子', // 站点名称
  titleTemplate: '你好！！！', // 网站标题
  description: '只有你自己可以掌控你的未来。', // 站点描述

  themeConfig: { // 主题设置
    nav: zhNav, // 导航菜单项的配置
    sidebar: zhSidebar, // 侧边栏菜单项的配置

    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: '本页目录'
    },

    footer: { // 页脚配置
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2025-${ new Date().getFullYear() } 孙武子`
    },
    editLink: {
      pattern: 'https://github.com/acmsun/blog/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '上次更新时间'
    },

    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示


    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    darkModeSwitchLabel: '深浅模式' // 手机端深浅模式文字修改


  }
}