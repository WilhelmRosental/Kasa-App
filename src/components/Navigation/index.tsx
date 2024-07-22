import './index.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <nav className="nav-container">
      <ul className="navMain">
        <li className="navMain__element">
          <NavLink to="/" className="fontSize-subtitle">
            Accueil
          </NavLink>
        </li>
        <li className="navMain__element">
          <NavLink to="/a-propos" className="fontSize-subtitle">
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
