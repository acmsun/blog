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

    docFooter: { // 自定义上下页名
      prev: '上一页', next: '下一页'
    },
    darkModeSwitchLabel: '外观', // 深色模式开关标签
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '更改语言'
  }
}