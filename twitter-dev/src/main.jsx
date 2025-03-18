import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feed from './pages/Feed'
import { PostDetail, postLoader } from './pages/PostDetail'
import Main from './layouts/main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Feed />
      },
      {
        path: '/posts/:id',
        element: <PostDetail />,
        loader: postLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)