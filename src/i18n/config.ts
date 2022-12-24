import pageZH from './zh-CN/page.json'
import commonZH from './zh-CN/common.json'

import pageEN from './en-US/page.json'
import commonEN from './en-US/common.json'

export const resources = {
  'en-US': {
    page: pageEN,
    common: commonEN,
  },
  'zh-CN': {
    page: pageZH,
    common: commonZH,
  },
} as const

export const defaultNS = 'page'
