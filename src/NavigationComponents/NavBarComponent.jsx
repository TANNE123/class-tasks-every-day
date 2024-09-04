import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { CgProfile } from "react-icons/cg";

const NavBarComponent = () => {
  const style1={textDecoration:"none"}
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item" >
          <NavLink style={style1} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={style1} to="/close">close</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={style1} to="/contact">contact</NavLink>
        </li>
      </ul>
      <div>
      <CgProfile className="icon" />
      </div>
    </div>
  </nav>
  
  )
}

export default NavBarComponent
