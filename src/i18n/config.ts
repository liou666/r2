import pageZH from './zh/page.json'
import commonZH from './zh/common.json'
import pageEN from './en/page.json'
import commonEN from './en/common.json'

export const resources = {
  en: {
    page: pageEN,
    common: commonEN,
  },
  zh: {
    page: pageZH,
    common: commonZH,
  },
} as const

export const defaultNS = 'page'
