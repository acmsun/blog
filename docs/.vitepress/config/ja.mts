import { jaNav } from '../navbar/index.mjs'
import { jaSidebar } from '../sidebar/index.mjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'ja-JP',
  title: '孫武子',
  titleTemplate: 'こんにちは！！！',
  description: 'あなたの未来をコントロールできるのはあなただけです。',

  themeConfig: {
    nav: jaNav,
    sidebar: jaSidebar,

    outline: {
      level: [1, 6],
      label: '目次'
    },

    footer: {
      message: 'MIT ライセンスのもとで公開されています。',
      copyright: `著作権 © 2025-${ new Date().getFullYear() } 孫武子`
    },
    editLink: {
      pattern: 'https://github.com/acmsun/blog/edit/master/docs/:path',
      text: 'このページを GitHub で編集'
    },
    lastUpdated: {
      text: '最終更新'
    },

    docFooter: {
      prev: '前のページ', next: '次のページ'
    },
    darkModeSwitchLabel: '外観',
    lightModeSwitchTitle: 'ライトモード',
    darkModeSwitchTitle: 'ダークモード',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: '上に戻る',
    langMenuLabel: '言語を変更する'
  }
}