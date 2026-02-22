import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar-container'>
      <div className='navbar-brand'>
        <img src={logo} alt="WistPlants Logo" className="logo" />
        <h1 className='text-logo'>
          WistPlants
        </h1>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "normal-link"} onClick={() => setIsOpen(false)}>
         Home
         </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "normal-link"} onClick={() => setIsOpen(false)}>
        About
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : "normal-link"} onClick={() => setIsOpen(false)}>
        Shop
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : "normal-link"} onClick={() => setIsOpen(false)}>
        Log In
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : "normal-link"} onClick={() => setIsOpen(false)}>
        Cart
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "normal-link"} onClick={() => setIsOpen(false)}>
        Contact
        </NavLink>
        

      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
