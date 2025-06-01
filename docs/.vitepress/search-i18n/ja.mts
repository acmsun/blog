import type { DocSearchProps } from 'vitepress/types/docsearch'

export const jaSearchI18n: Partial<DocSearchProps> = {
  placeholder: 'ドキュメントを検索',
  translations: {
    button: {
      buttonText: 'ドキュメントを検索',
      buttonAriaLabel: 'ドキュメントを検索'
    },
    modal: {
      searchBox: {
        resetButtonTitle: 'クエリをクリア',
        resetButtonAriaLabel: 'クエリをクリア',
        cancelButtonText: 'キャンセル',
        cancelButtonAriaLabel: 'キャンセル'
      },
      startScreen: {
        recentSearchesTitle: '検索履歴',
        noRecentSearchesText: '検索履歴はありません',
        saveRecentSearchButtonTitle: '検索履歴に保存',
        removeRecentSearchButtonTitle: '検索履歴から削除',
        favoriteSearchesTitle: 'お気に入り',
        removeFavoriteSearchButtonTitle: 'お気に入りから削除'
      },
      errorScreen: {
        titleText: '結果を取得できません',
        helpText: 'ネットワーク接続を確認してください'
      },
      footer: {
        selectText: '選択',
        navigateText: '切り替え',
        closeText: '閉じる',
        searchByText: '検索プロバイダ'
      },
      noResultsScreen: {
        noResultsText: '関連する結果が見つかりません',
        suggestedQueryText: '次の検索を試すことができます',
        reportMissingResultsText: 'この検索には結果があるはずだと思いますか？',
        reportMissingResultsLinkText: 'クリックしてフィードバック'
      }
    }
  }
}