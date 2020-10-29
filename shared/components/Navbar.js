import React from "react"
import { NavLink } from "react-router-dom"

const links = [
  { to: "/", exact: true, name: "Home" },
  { to: "/users", exact: true, name: "All users" },
  { to: "/about", name: "About" },
  { to: "/users/1", name: "Leanne Graham" },
  { to: "/users/2", name: "Ervin Howell" },
  { to: "/users/3", name: "Chelsey Dietrich" },
]

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav__menu'>
        {links.map((link) => {
          return (
            <NavLink
              className='link'
              activeClassName='link--active'
              key={link.to}
              {...link}
            >
              {link.name}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
