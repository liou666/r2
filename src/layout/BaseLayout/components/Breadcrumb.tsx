import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const routes = [
  {
    path: '/',
    breadcrumbName: 'home',
  },
  {
    path: 'first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
]

function itemRender(route: any, params: any, routes: any, paths: any) {
  const last = routes.indexOf(route) === routes.length - 1
  return last
    ? (
      <span>{route.breadcrumbName}</span>
      )
    : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
      )
}
export default function BreadcrumbC() {
  return <Breadcrumb itemRender={itemRender} routes={routes} />
}

