import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CSS/Confirm.css";

const Confirm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/cart");
  };

  const handleConfirm = () => {
    navigate("/thanks");
  };

  return (
    <div className="confirm-container">
      <motion.div
        className="confirm-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="confirm-icon-wrapper"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <span className="confirm-icon">🪴</span>
        </motion.div>

        <h1 className="confirm-title">Ready to Grow Your Garden?</h1>
        <p className="confirm-subtitle">
          You&apos;re just one step away from bringing these plants home. Please
          review your cart and confirm that you want to place this order.
        </p>

        <div className="confirm-summary">
          <div className="confirm-row">
            <span>Items in cart</span>
            <span>Review in cart</span>
          </div>
          <div className="confirm-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="confirm-row confirm-row-note">
            <span>Note</span>
            <span>Live plants are shipped with care-friendly packaging.</span>
          </div>
        </div>

        <div className="confirm-actions">
          <button
            type="button"
            className="confirm-btn confirm-btn-primary"
            onClick={handleConfirm}
          >
            Yes, place my order
          </button>
          <button
            type="button"
            className="confirm-btn confirm-btn-secondary"
            onClick={handleCancel}
          >
            No, take me back to cart
          </button>
        </div>

        <p className="confirm-footer-text">
          By placing this order you agree to our{" "}
          <Link to="/shipping-policy">Shipping Policy</Link> and{" "}
          <Link to="/refund">Refund Policy</Link>.
        </p>
      </motion.div>
    </div>
  );
};

export default Confirm;
