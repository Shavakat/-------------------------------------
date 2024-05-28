import Admin from "./pages/Admin";
import App from './App'
import Services from './Page2/Services'
import Galery from './Page3/Galery'
import PostIvent from './Page4/PostIvent'
import Auth from "./pages/Auth";

export const authRoutes = [
  {
    path: '/admin',
    Component: <Admin />
  }
]


export const publicRoutes = [
  {
    path: "/",
    Component: <App />,
  },
  {
    path: "/services",
    Component: <Services />,
  },
  {
    path: "/galery",
    Component: <Galery />,
  },
  {
    path: "/post",
    Component: <PostIvent />,
  },
  {
    path: "/auth",
    Component: <Auth />,
  },
  {
    path: "/reg",
    Component: <Auth />,
  },
];
