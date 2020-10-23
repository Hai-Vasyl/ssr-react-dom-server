import React from "react"
import { renderRoutes } from "react-router-config"
import Navbar from "../shared/components/Navbar"

const App = ({ route }) => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div>App component!</div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default App
