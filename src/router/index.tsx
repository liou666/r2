import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const Loading = () => (<p> Loading...</p>)

const IndexScreen = lazy(() => import('@/pages/index'))
const Page404Screen = lazy(() => import('@/pages/[...all]'))
const Name = lazy(() => import('@/pages/hi/[name]'))
const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <IndexScreen />,
    },
    {
      path: '/hi/:id',
      element: <Name />,
    },
    {
      path: '*',
      element: <Page404Screen />,
    },

  ]
  const element = useRoutes(routes)
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  )
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  )
}

