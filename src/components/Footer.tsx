export default function Footer() {
  const [, toggle] = useDark()
  const { i18n } = useTranslation()
  const [currentLanguage] = i18n.language.split('-')

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
          i18n.changeLanguage(currentLanguage === 'en' ? 'zh' : 'en')
        }}
      />
    </nav>
  )
}

