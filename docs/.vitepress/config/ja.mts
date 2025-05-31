import { jaNav } from '../navbar/index.mjs'
import { jaSidebar } from '../sidebar/index.mjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdatedText: '最終更新日',
    returnToTopLabel: 'トップに戻る',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索',
              },
              modal: {
                displayDetails: '詳細リストを表示',
                resetButtonTitle: 'リワーク検索',
                backButtonTitle: '検索を閉じる',
                noResultsText: '関連する結果は見つかりませんでした',
                footer: {
                  selectText: '選ぶ',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'スイッチ',
                  navigateUpKeyAriaLabel: '上矢印キー',
                  navigateDownKeyAriaLabel: '下矢印キー',
                  closeText: '閉鎖',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    nav: jaNav,
    sidebar: jaSidebar,
    docFooter: {
      prev: '前の', next: '次'
    },
    darkModeSwitchLabel: 'ダークモード',
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} 孫武子`
    },
    outline: {
      level: [1, 6],
      label: '目次'
    },
    outlineTitle: '現在のページのアウトライン',
  }
}