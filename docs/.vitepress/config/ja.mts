import { jaNav } from '../navbar/index.mjs'
import { jaSidebar } from '../sidebar/index.mjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'ja-JP',
  title: '孫武子', // 站点名称
  titleTemplate: 'こんにちは！！！', // 网站标题
  description: 'あなたの未来をコントロールできるのはあなただけです。', // 站点描述

  themeConfig: {
    returnToTopLabel: '上に戻る',
    nav: jaNav,
    sidebar: jaSidebar,
    docFooter: {
      prev: '前の', next: '次'
    },
    darkModeSwitchLabel: 'ダークモード',
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${ new Date().getFullYear() } 孫武子`
    },
    outline: {
      level: [1, 6],
      label: '目次'
    }
  }
}