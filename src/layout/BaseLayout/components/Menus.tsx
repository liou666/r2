import React from 'react'
import { Menu } from 'antd'

export default function Menus() {
  return (
    <div>
      {' '}
      <Menu
        theme='dark' defaultSelectedKeys={['1']} mode='inline'
        items={[]}
      />
    </div>
  )
}
