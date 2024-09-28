import React from 'react'
import './SidePannel.css'
import { NavLink } from 'react-router-dom'

const SidePanel = () => {
  return (
    <div className="side-panel">
      <ul>
        <li>
          <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/my-requirements" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            My Requirements
          </NavLink>
        </li>
        <hr />
        <li>
          <a href="#section3">
            Section 3
          </a>
        </li>
        <hr />
        <li>
          <a href="#section4">
            Section 4
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SidePanel
