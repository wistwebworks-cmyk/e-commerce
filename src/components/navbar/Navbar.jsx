import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <div>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>About</Link>
        <Link to="/shop" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Shop</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</Link>
      </div>
      <div>
        <Link to="/cart" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Cart</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
