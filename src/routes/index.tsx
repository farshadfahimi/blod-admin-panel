import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/Error/404'
import Layout from '../components/Layout'

const HomePage = React.lazy(() => import('../pages/Home'))
const CategoryPage = React.lazy(() => import('../pages/Category'))
const LoginPage = React.lazy(() => import('../pages/Auth/Signin'))
const SignupPage = React.lazy(() => import('../pages/Auth/Signup'))


const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/categories',
        element: <CategoryPage />
      }
    ]
  },
  {
    element: <LoginPage />,
    path: '/signin',
  },
  {
    element: <SignupPage />,
    path: '/signup'
  }
])

export default routes