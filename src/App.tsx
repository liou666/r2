import { ConfigProvider, theme } from 'antd'
import { useRecoilValue } from 'recoil'
// import Footer from '@/components/Footer'
import { Router } from '@/router'
import { antdMessageState, i18nLocaleState } from '@/store'
import { setHtmlLang } from '@/utils/index'

export default function App() {
  const i18nLocale = useRecoilValue(i18nLocaleState)
  const antdMessage = useRecoilValue(antdMessageState)

  useMount(() => {
    setHtmlLang(i18nLocale)
  })

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm,
        // colorPrimary: '#1890ff',
        token: {
          colorPrimary: '#e4d4e4',
        },
      }}
      locale={antdMessage}
    >
      <Router />
      {/* <Footer /> */}
    </ConfigProvider>
  )
}
