import React, { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import cx from 'classnames'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { useRecoilValue } from 'recoil'
import Header from './components/Header'
import LeftSlide from './components/LeftSlide'
import MainContent from './components/MainContent'
import BreadcrumbC from './components/Breadcrumb'
import { menus } from '@/store'
const { Content, Footer, Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
]
interface IProps{
  children?: React.ReactNode
}
const BaseLayout: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const headerHeight = 60
  // const m = useRecoilValue(menus)
  return (
    <>
      <Header
        height={headerHeight}
      />
      <section className='flex'>
        <div className={cx(collapsed ? 'w-[80px]' : 'w-[200px]', 'duration-300')} />
        <div
          style={{ height: `calc(100vh - ${headerHeight}px)` }}
          className={cx(collapsed ? 'w-[80px]' : 'w-[200px]', 'fixed left-0 transition-all')}
        >
          <LeftSlide
            toggleIcon={<MenuFoldOutlined />}
            onCollapse={() => { setCollapsed(!collapsed) }}
            mode='inline'
            theme='light'
            collapsed={collapsed}
            items={items}
          />
        </div>
        {/* border-bottom: 1px solid #e8e8e8; */}
        <main className='overflow-x-hidden overflow-y-auto flex-1 '>
          <article className='pl-5 bg-white/90 text-lg font-bold h-14 center-y border border-l-0 border-r-0 border-b border-gray-200 border-t-0'>面包屑</article>
          {/* <BreadcrumbC /> */}
          {/* <div className='h-[100vh] w-[100vw]' /> */}
          <div className='m-4 '>
            {children}
          </div>
        </main>
      </section>
    </>
  )
}

export default BaseLayout
