import React from "react"
import { hydrate } from "react-dom"
import "./styles/index.scss"
import { renderRoutes } from "react-router-config"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "../shared/Routes"
import store from "../shared/redux/store"
import { Provider } from "react-redux"

hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.getElementById("root")
)
