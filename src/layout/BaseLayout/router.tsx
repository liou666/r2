import type { IRouter } from '@/@types/router'

const baseLayoutRoutes: IRouter[] = [{
  path: '/ipam',
  auth: 'ipam',
  children: [
    {
      path: 'dashboard',
      component: lazy(() => import('@/pages/Dashboard')),
    },
    {
      path: 'hi',
      component: lazy(() => import('@/pages/hi/[name]')),
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
