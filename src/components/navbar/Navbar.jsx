import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import MyContext from '../../context/data/myContext'
import logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartCount } = useContext(MyContext);
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
          className={({ isActive }) =>
            `cart-link icon-link ${isActive ? "active-link" : "normal-link"}`
          } 
          onClick={closeMenu}
          aria-label="Cart"
          title="Cart"
        >
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
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
              className={({ isActive }) => `icon-link ${isActive ? "active-link" : "normal-link"}`} 
              onClick={closeMenu}
              aria-label="Log In"
              title="Log In"
            >
              <FaSignInAlt />
            </NavLink>
            <NavLink 
              to="/register" 
              className={({ isActive }) => `icon-link ${isActive ? "active-link" : "normal-link"}`} 
              onClick={closeMenu}
              aria-label="Register"
              title="Register"
            >
              <FaUserPlus />
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
