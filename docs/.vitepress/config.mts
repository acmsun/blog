import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/share.mjs'
import { zhConfig } from './config/zh.mjs'
import { enConfig } from './config/en.mjs'
import { jaConfig } from './config/ja.mjs'

export default defineConfig({
  ...sharedConfig,

  rewrites: { // 替换路径
    'zh/:rest*': ':rest*'
  },

  locales: { // 多语言
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      ...enConfig
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      ...jaConfig
    }
  }
})