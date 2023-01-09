import React, { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import cx from 'classnames'
import type { Menu, MenuItemProps, MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import LeftSlide from './components/LeftSlide'

import baseRouter from '@/layout/BaseLayout/router'
import type { IRouter } from '@/@types/router'

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
const createMenuItems = (
  // t: (key: string) => string,
  routes: IRouter[],
  parentPath = '/',
): MenuItem[] => {
  const items: MenuItem[] = []

  for (let index = 0; index < routes.length; index++) {
    const item = routes[index]

    // 验证权限
    // if (!hasPermissionRoles(userRoles, item.meta?.roles))
    //   continue

    const icon = item.meta?.icon || undefined
    const hidden = item.meta?.hidden || false
    if (hidden === true) continue

    // 设置路径
    let path = item.path || ''
    path = item.path.startsWith('/')
      ? item.path
      : `${parentPath.endsWith('/') ? parentPath : `${parentPath}/`}${item.path}`
    const title = item.meta?.title || path || '--'

    if (item.children) {
      items.push({
        key: path,
        label: (
          <>
            {icon && (
              <span className='anticon'>
                {icon}
                {/* <IconSvg name={icon} /> */}
              </span>
            )}
            <span>{title}</span>
          </>
        ),
        children: createMenuItems(item.children, path),
      })
    }
    else {
      items.push({
        key: path,
        label: (
          <Link to={path}>
            {icon && (
              <span className='anticon'>
                {/* <IconSvg name={icon} /> */}
              </span>
            )}
            <span>{title}</span>
          </Link>
        ),
      })
    }
  }

  return items
}
console.log(createMenuItems(baseRouter))

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ]
interface IProps{
  children?: React.ReactNode
}
const BaseLayout: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()
  console.log(pathname)
  const headerHeight = 60
  const items = createMenuItems(baseRouter)
  const defaultOpenKeys = [...pathname.matchAll(/\/\w+/g)]
  console.log(defaultOpenKeys)
  const defaultSelectedKeys = [pathname]
  // const selectedKeys = useMemo(() => {
  //   if (!baseRouter)
  //     return []
  //   return [baseRouter]
  // }, [items])
  // const parentPaths = useMemo(() => {
  //   if (routeItem && routeItem.meta && routeItem.meta.parentPath)
  //     return routeItem.meta.parentPath

  //   return []
  // }, [routeItem])
  // const [openKeys, setOpenKeys] = useState<string[]>(mode === 'inline' ? parentPaths : [])
  // useLayoutEffect(() => {
  //   if (!collapsed && mode === 'inline') setOpenKeys(openKeys)
  //   else setOpenKeys([defaultSelectedKeys])
  // }, [collapsed, parentPaths])
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
            defaultSelectedKeys={[pathname]}
            SelectedKeys={[pathname]}
            defaultOpenKeys={[pathname]}
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
