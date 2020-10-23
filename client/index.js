import React from "react"
import { render } from "react-dom"
import "./styles/index.scss"
import { renderRoutes } from "react-router-config"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "../shared/Routes"
import store from "./redux/store"
import { Provider } from "react-redux"

render(
  <Provider store={store}>
    <Router>{renderRoutes(Routes)}</Router>
  </Provider>,
  document.getElementById("root")
)
