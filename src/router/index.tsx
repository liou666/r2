import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import BaseLayout from '@/layout/BaseLayout'
const Loading = () => (<p> Loading...</p>)

const IndexScreen = lazy(() => import('@/pages/index'))
const Page404Screen = lazy(() => import('@/pages/[...all]'))
const Name = lazy(() => import('@/pages/hi/[name]'))
const Project = lazy(() => import('@/pages/Project'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <IndexScreen />,
    children: [
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/hi/:id',
        element: <Name />,
      },
    ],
  },
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

