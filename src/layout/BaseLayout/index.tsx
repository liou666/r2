import React, { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { useRecoilValue } from 'recoil'
import { menus } from '@/store'
const { Header, Content, Footer, Sider } = Layout
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
  const m = useRecoilValue(menus)
  console.log(m)
  return (
    <Layout className='min-h-[100vh]'>
      <Sider
        collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}
      >
        123
        <div id='universallayout-left' className={classnames({ narrow: collapsed, fiexd: true })}>
          <div className='universallayout-left-sider'>
            <div className='universallayout-left-logo'>
              <Link to='/' className='logo-url'>
                {collapsed ? 123 : <h3 className='logo-title'>AdminAntdReact</h3>}
              </Link>
            </div>
            <div className='universallayout-left-menu'>
              <Menu
                theme='dark'
                inlineCollapsed={collapsed}
                items={items}
                mode='inline'
              />
            </div>
          </div>
        </div>
      </Sider>
      <Layout>
        <Content className='mx-4'>
          {children}
        </Content>
        <Footer className='text-center'>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
