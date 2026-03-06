import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
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
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink 
          to="/shop-now" 
          className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
          onClick={closeMenu}
        >
          Shop Now
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
          onClick={closeMenu}
        >
          Cart
        </NavLink>
        
        {user ? (
          <div className="user-menu">
            <span className="user-name">{user.displayName || user.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Log Out
            </button>
          </div>
        ) : (
          <>
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
              onClick={closeMenu}
            >
              Log In
            </NavLink>
            <NavLink 
              to="/register" 
              className={({ isActive }) => isActive ? "active-link" : "normal-link"} 
              onClick={closeMenu}
            >
              Register
            </NavLink>
          </>
        )}
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
