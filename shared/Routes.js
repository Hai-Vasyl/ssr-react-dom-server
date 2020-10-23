import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import App from "./App"
import Users from "./pages/Users"

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        exact: true,
        path: "/",
      },
      {
        component: About,
        path: "/about",
      },
      {
        component: Users,
        path: "/users",
      },
      {
        component: NotFound,
      },
    ],
  },
]
