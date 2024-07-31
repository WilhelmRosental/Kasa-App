import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ErrorPage from './pages/Error'
import Apartments from './pages/Apartments'

// Définir les types pour les routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'a-propos',
        element: <AboutUs />,
      },
      {
        path: 'logement/:id',
        element: <Apartments />,
      },
    ],
  },
]

const router = createBrowserRouter(routes, {
  basename: '/Kasa-App/',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
