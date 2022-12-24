import type { I18nKey } from '../react-i18next'

// window.localStorage 存储key
export const localeKey = 'i18nextLng'

// 默认语言
export const defaultLang: I18nKey = 'zh-CN'

/**
 * 验证语言命名规则 zh-CN
 * @returns boolen
 */
export const localeNameExp = (lang: string): boolean => {
  const localeExp = /^([a-z]{2})-?([A-Z]{2})?$/
  return localeExp.test(lang)
}

/**
 * 设置 html lang 属性值
 * @param lang 语言的 I18nKey
 */
export const setHtmlLang = (lang: I18nKey) => {
  /**
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  const htmlSelector = document.querySelector('html')
  if (htmlSelector)
    htmlSelector.setAttribute('lang', lang)
}

/**
 * 获取当前选择的语言
 * @returns string
 */
export const getLocale = (): I18nKey => {
  const lang = typeof window.localStorage !== 'undefined' ? window.localStorage.getItem(localeKey) : ''
  const isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string'
  const browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('-') : ''
  return (lang || browserLang || defaultLang) as I18nKey
}

