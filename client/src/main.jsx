import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page.jsx';
import Services from './Page2/Services.jsx';
import Galery from './Page3/Galery.jsx';
import PostIvent from './Page4/PostIvent.jsx';
import Admin from './pages/Admin.jsx';
import Auth from './pages/Auth.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/galery",
    element: <Galery />,
  },
  {
    path: "/post",
    element: <PostIvent />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const auth = createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
