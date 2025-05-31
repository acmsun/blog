import { enNav } from '../navbar/index.mjs'
import { enSidebar } from '../sidebar/index.mjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // 主题设置
    nav: enNav,
    sidebar: enSidebar, // 侧边栏
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} ACMSUN`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
    }
  }
}