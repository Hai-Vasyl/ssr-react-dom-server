import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import App from "./App"
import Users from "./pages/Users"
import User from "./pages/User"

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        exact: true,
        path: "/",
      },
      {
        ...About,
        path: "/about",
      },
      {
        ...Users,
        exact: true,
        path: "/users",
      },
      {
        ...User,
        path: "/users/:userId",
      },
      {
        path: "*",
        ...NotFound,
      },
    ],
  },
]
