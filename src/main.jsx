import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './feutures/users/links.jsx'
import { Users } from './feutures/users/user.jsx'
import { AddUser } from './feutures/users/addUser.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Users />
      },
      {
        path: "/add",
        element: <AddUser />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      {/* <App /> */}
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
