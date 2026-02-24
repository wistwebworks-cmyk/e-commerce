import React from "react";
import "./CSS/Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp} from "react-icons/fa";
import { useState } from "react";


const Contact = () => {

      const [status, setStatus] = useState("idle");
      // idle | loading | success 
  return (
    <div className="contact-page">

      {/* ===== Top Info Section ===== */}
      <div className="contact-info">

        <div className="left">
          <h1>How to Reach Out</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius maxime distinctio. Optio aspernatur veritatis corrupti quod nam earum. Sed provident veniam totam, 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat eius, eum dolore, doloremque iusto quibusdam voluptatibus rerum harum reprehenderit placeat 
          </p>
        </div>

        <div className="right">
          <div>
            <h4>Call us</h4>
            <p>+880 0000 0000</p>
          </div>

          <div>
            <h4>Email us</h4>
            <p>wistwebworks@gmail.com</p>
          </div>

          <div>
            <h4>Dhaka, Bangladesh</h4>
            <p>Gym day, Everyday</p>
          </div>
        </div>

      </div>


      {/* ===== Form Section ===== */}
      <div className="form-section">

        <form className="contact-form">

          <div className="row">
            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>First name *</label>
            </div>

            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>Last name *</label>
              
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <input type="email" required placeholder=" " />
              <label>Email *</label>
              
            </div>

            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>Phone</label>
              
            </div>
          </div>

          <div className="input-group full">
            <textarea required placeholder=" " rows="4"></textarea>
            <label>Message</label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            Submit
          </motion.button>

        </form>
      </div>


      {/* ===== NEW Social Section ===== */}
      <div className="social-section">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          >
            Connect With Us
          </motion.h2>
        
        <div className="social-icons">

          <motion.a
            href="#"
            target="_blank"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: .9 }}
            className="icon-btn"
            >
              <FaFacebook />
            </motion.a>

          <motion.a
          href="#"
            target="_blank"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: .9 }}
            className="icon-btn"
            >
              <FaInstagram />
            </motion.a>

          <motion.a
          href="#"
            target="_blank"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: .9 }}
            className="icon-btn whatsapp"
            >
              <FaWhatsapp />
            </motion.a>
        </div>

        
      </div>

    </div>
  );
};

export default Contact;