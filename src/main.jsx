import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './component/Home.jsx'
import AddCoffee from './component/AddCoffee.jsx'
import UpdateCoffee from './component/UpdateCoffee.jsx'
import CoffeeDetails from './component/CoffeeDetails.jsx'
import Register from './component/Register.jsx'
import Login from './component/Login.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Users from './component/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: '/addCoffee',
        Component: AddCoffee,
      },
      {
        path: '/coffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: '/updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: '/users',
        loader: () => fetch('http://localhost:3000/users'),
        Component: Users,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
