import { useRecoilState } from 'recoil'
import { i18nLocaleState } from '@/store'
export default function Footer() {
  const [, toggle] = useDark()
  const { i18n } = useTranslation()
  const [i18nLocale, setI18nLocale] = useRecoilState(i18nLocaleState)
  return (
    <nav
      inline-flex gap-2
      text-xl mt-6
    >
      <a
        i-carbon:logo-github
        icon-btn
        href='https://github.com/liou666'
        target='_blank'
        title='GitHub'
        rel='noreferrer'
      />
      <i
        icon-btn
        dark:i-carbon-moon i-carbon:sun
        onClick={() => toggle()}
      />
      <i
        i-carbon-language
        icon-btn
        onClick={() => {
          if (i18nLocale === 'en-US') {
            // setLocale('zh-CN')
            setI18nLocale('zh-CN')
          }
          else {
            // setLocale('en-US')
            setI18nLocale('en-US')
          }

          i18n.changeLanguage(i18n.language === 'en-US' ? 'zh-CN' : 'en-US')
        }}
      />
    </nav>
  )
}

