import React from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import cx from 'classnames'
interface ILeftSlideProps extends MenuProps{
  collapsed: boolean
  toggleIcon: React.ReactNode
  toggleClassName?: string
  onCollapse: (e: React.MouseEvent<Element, MouseEvent>) => void
}

export default function LeftSlide({ collapsed, onCollapse, items, toggleIcon, toggleClassName, ...rest }: ILeftSlideProps) {
  return (
    <aside className='h-full w-full'>
      <Menu
        className='h-[calc(100%-30px)] !pb-1 overflow-y-auto shadow-md'
        items={items}
        inlineCollapsed={collapsed}
        {...rest}
      />
      <div onClick={ onCollapse } className={cx('cursor-pointer center absolute bottom-0 left-0 right-0 h-[30px] shadow-lg border border-gray-200 border-l-0 border-r-0 border-b-0 border-t ', toggleClassName)}>
        {toggleIcon}
      </div>
    </aside>
  )
}
