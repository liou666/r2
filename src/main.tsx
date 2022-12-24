import React from 'react'
import ReactDOM from 'react-dom/client'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/main.css'
import 'antd/dist/reset.css'
import '@/i18n'

import { RecoilRoot } from 'recoil'
import App from '@/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
