import { Suspense, createElement, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import BaseLayout from '@/layout/BaseLayout'
import type { IRouter } from '@/@types/router'
import baseRouter from '@/layout/BaseLayout/router'
const Loading = () => (<p> Loading...</p>)

const IndexScreen = lazy(() => import('@/pages/index'))
const Page404Screen = lazy(() => import('@/pages/[...all]'))
const Name = lazy(() => import('@/pages/hi/[name]'))
const Project = lazy(() => import('@/pages/Project'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))

// const createRoute = (r: IRouter[]) => {
//   r.forEach((x) => {
//     if (x.children)
//       createRoute(x.children)
//   })
// }
export const createUseRoutes = (configRoutes: IRouter[], parentPath = '/'): RouteObject[] => {
  const routes: RouteObject[] = []
  for (let index = 0; index < configRoutes.length; index++) {
    const item = configRoutes[index]

    const routesItem: RouteObject = {}

    // path
    routesItem.path = item.path.startsWith('/')
      ? item.path
      : `${parentPath.endsWith('/') ? parentPath : `${parentPath}/`}${item.path}`
    // element
    if (item.component)
      routesItem.element = createElement(item.component)

    // children
    const children: RouteObject[] = []
    if (item.redirect) {
      children.push({
        path: routesItem.path,
        element: createElement(Navigate, { to: item.redirect }),
      })
    }
    if (item.children)
      children.push(...createUseRoutes(item.children, routesItem.path))

    if (children.length > 0)
      routesItem.children = children

    // newItem push
    routes.push(routesItem)
  }

  return routes
}

console.log(createUseRoutes(baseRouter))
export const routes: RouteObject[] = [
  ...createUseRoutes(baseRouter),
  {
    path: '*',
    element: <Page404Screen />,
  },

]

const InnerRouter = () => {
  const element = useRoutes(routes)
  return (
    <BaseLayout>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </BaseLayout>
  )
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  )
}

