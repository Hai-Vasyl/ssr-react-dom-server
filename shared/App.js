import React from "react"
import { renderRoutes } from "react-router-config"
import Navbar from "../shared/components/Navbar"

const App = ({ route }) => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div>App component!</div>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
}

App.defaultProps = {
  route: null,
}

export default { component: App }
