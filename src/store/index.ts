import { atom, selector } from 'recoil'

import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'

import type { Locale } from 'antd/es/locale/'
import type { I18nKey } from '../react-i18next'

import { routes } from '@/router'
import { getLocale } from '@/utils'
// antd 语言包
export const antdMessages: { [key in I18nKey]: Locale } = {
  'zh-CN': zhCN,
  // 'zh-TW': zhTW,
  'en-US': enUS,
}
export const i18nLocaleState = atom<I18nKey>({
  key: 'i18nLocaleState',
  default: getLocale() || 'zh-CN',
})

export const antdMessageState = selector({
  key: 'antdMessageState',
  get: ({ get }) => antdMessages[get(i18nLocaleState)] || antdMessages['zh-CN'],
})
console.log(routes)
export const menus = atom({
  key: 'menus',
  default: routes || [],
})
