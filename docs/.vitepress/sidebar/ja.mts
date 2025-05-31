import { DefaultTheme } from 'vitepress'

export const jaSidebar: DefaultTheme.Sidebar = {
  '/ja/': [
    {
      text: '使用ガイドライン',
      collapsed: false,
      items: [
        { text: '導入', link: `/ja/guide/` },
        { text: 'クイックスタート', link: `/ja/quick-started/` },
        { text: '参照する', link: `/ja/reference/` }
      ]
    },
    {
      text: 'API',
      collapsed: false,
      items: [
        { text: '導入', link: `/ja/abc/` },
        { text: 'クイックスタート', link: `/ja/bca/` }
      ]
    }
  ]
}