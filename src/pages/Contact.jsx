import React, { useState } from "react";
import "./CSS/Contact.css";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const fadeBlur = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success

  return (
    <div className="contact-page">

      {/* ===== Top Info Section ===== */}
      <motion.div 
        className="contact-info"
        variants={fadeBlur}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="left">
          <h1>How to Reach Out</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius maxime distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat eius, eum dolore.</p>
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
      </motion.div>

      {/* ===== Form Section ===== */}
      <motion.div
        className="form-section"
        variants={fadeBlur}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
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
              <input type="text" placeholder=" " />
              <label>Phone</label>
            </div>
          </div>

          <div className="input-group full">
            <textarea rows="4" required placeholder=" "></textarea>
            <label>Message</label>
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* ===== Social Section ===== */}
      <motion.div
        className="social-section"
        variants={fadeBlur}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Connect With Us
        </motion.h2>

        <div className="social-icons">
          <motion.a href="#" className="icon-btn" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaFacebook />
          </motion.a>
          <motion.a href="#" className="icon-btn" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaInstagram />
          </motion.a>
          <motion.a href="#" className="icon-btn whatsapp" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaWhatsapp />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;