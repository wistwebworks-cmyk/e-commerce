import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3 className="footer-logo">WistPlants</h3>
          <h5 className='footer-join'>Join Our Garden</h5>

          <p className="footer-description">Your trusted source for all things plants and gardening.</p>
          </div>

        <div className="footer-section footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/shop" className="footer-link">Shop</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-links">
          <h4 className="footer-title">Customer Service</h4>
          <ul className="footer-list">
            <li><Link to="/shipping" className="footer-link">Shipping Info</Link></li>
            <li><Link to="/refund" className="footer-link">Refund Policy</Link></li>
            <li><Link to="/confirm" className="footer-link">Order Confirmation</Link></li>
            <li><Link to="/cart" className="footer-link">My Cart</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email:</span>
              <a href="mailto:support@eshop.com" className="contact-link">wistwebworks2gmail.com</a>
            </li>
            <li>
              <span className="contact-label">Phone:</span>
              <a href="tel:+1234567890" className="contact-link">0000000000000</a>
            </li>
            <li>
              <span className="contact-label">Address:</span>
              <span className="contact-text"> City, Country</span>
            </li>
          </ul>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">FB</a>
            <a href="#" className="social-link" aria-label="Twitter">TW</a>
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="LinkedIn">LI</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} WistPlants. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
