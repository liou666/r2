import type { IRouter } from '@/@types/router'

const baseLayoutRoutes: IRouter[] = [{
  path: '/',
  auth: 'ipam',
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      component: lazy(() => import('@/pages/Dashboard')),
      meta: {
        breadcrumb: [{
          title: 'dashboard',
          path: '/dashboard',
        }],
      },
    },
    {
      path: 'hi',
      component: lazy(() => import('@/pages/hi/[name]')),
      meta: {
        breadcrumb: [{
          title: 'hi',
          path: '/hi',
        }],
      },
    },
  ],

}, {
  path: '/dhcp',
  auth: 'dhcp',
  children: [
    {
      path: 'project',
      component: lazy(() => import('@/pages/Project')),
    },
  ],
}]

export default baseLayoutRoutes
