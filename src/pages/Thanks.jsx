import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CSS/Thanks.css";

const Thanks = () => {
  // Generate a placeholder order number (in real app, get from state/context/URL)
  const orderId = `WPL-${Date.now().toString(36).toUpperCase().slice(-8)}`;

  return (
    <div className="thanks-container">
      <motion.div
        className="thanks-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="thanks-icon-wrapper"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg
            className="thanks-checkmark"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26" r="24" stroke="currentColor" strokeWidth="2" />
            <motion.path
              d="M14 26l8 8 16-16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </svg>
        </motion.div>

        <motion.h1
          className="thanks-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Thank You for Your Order
        </motion.h1>

        <motion.p
          className="thanks-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your plants are on their way. We&apos;ve sent a confirmation email with your order details.
        </motion.p>

        <motion.div
          className="thanks-order-id"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="thanks-order-label">Order number</span>
          <span className="thanks-order-value">{orderId}</span>
        </motion.div>

        <motion.div
          className="thanks-next-steps"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3>What happens next?</h3>
          <ul>
            <li>You&apos;ll receive a shipping confirmation once your order is dispatched.</li>
            <li>Most orders arrive within 5–7 business days.</li>
            <li>Need help? Visit our <Link to="/contact">Contact</Link> page.</li>
          </ul>
        </motion.div>

        <motion.div
          className="thanks-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/shop-now">
            <motion.button
              className="thanks-btn thanks-btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue Shopping
            </motion.button>
          </Link>
          <Link to="/">
            <motion.button
              className="thanks-btn thanks-btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Thanks;
