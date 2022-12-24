import { resources, defaultNS } from '@/i18n/config'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources['en-US']
  }
}

export interface I18nVal {
  [key: string]: string;
}

export type I18n = {
  [key in I18nKey]?: I18nVal;
};

export type I18nKey = 'zh-CN' | 'en-US';
