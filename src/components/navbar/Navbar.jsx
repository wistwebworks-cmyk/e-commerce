import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='first-child'>
        <img src={logo} alt="WistPlants Logo" className="logo" />
        <h1 className='text-logo'>
          WistPlants
        </h1>
      
      </div>
      <div>
        <NavLink to="/"   className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
         Plants of Gyatt
         </NavLink>
        <NavLink to="/about"   className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
        Huzz Plants
        </NavLink>
        <NavLink to="/shop"   className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
        Boss Plants 
        </NavLink>
      </div>
      <div>
        <NavLink to="/login"   className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
        Log In
        </NavLink>
        <NavLink to="/cart"   className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
        Cart
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
