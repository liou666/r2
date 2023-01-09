import {
  atom,
} from 'recoil'

import type { Role } from '@/@types/login'
import { LoginParams } from '@/@types/login'
import type { Locale, User } from '@/@types/user'

const initialState: User = {
  noticeCount: 0,
  locale: (
    localStorage.getItem('locale')!
      || (navigator.languages && navigator.languages[0])
      || navigator.language || 'en-us') as Locale,
  // newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true,
  logged: false,
  // menuList: [],
  username: localStorage.getItem('username') || '',
  role: (localStorage.getItem('username') || '') as Role,
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
}

export const userState = atom({
  key: 'userState',
  default: initialState,
})

