import React, { useState } from "react";
import "../Pages/CSS/Shop.css";
import { motion } from "framer-motion";

import A from "../assets/Cavtus Love.avif";
import B from "../assets/saidverria.avif";
import C from "../assets/plant2.avif";
import D from "../assets/plant3.avif";
import E from "../assets/Cavtus Love.avif";
import F from "../assets/logo.png";

const products = [
  {
    id: 1,
    name: "Huzz Cactus",
    price: "9,999.00৳",
    image: A,
    badge: "New",
  },
  {
    id: 2,
    name: "Tasin's Sterra",
    price: "9,999.00৳",
    image: B,
    badge: "New",
  },
  {
    id: 3,
    name: "Tasin's Ear",
    price: "9,999.00৳",
    image: C,
  },
  {
    id: 4,
    name: "Gyatty Cheese Plant",
    oldPrice: "9,999.00৳",
    price: "9,995.00৳",
    image: D,
    badge: "Sale",
  },
  {
    id: 5,
    name: "Saidverria",
    price: "9,999.00৳",
    image: E,
    badge: "New",
  },
  {
    id: 6,
    name: "Epstein Fig",
    oldPrice: "50.00৳",
    price: "46.00৳",
    image: F,
    badge: "Sale",
  },
];

const Shop = () => {
  const [price, setPrice] = useState(9999);
  const [mobileFilter, setMobileFilter] = useState(false);

  return (
    <div className="shop-container">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="shop-title"
      >
        Plants of Gyatt
      </motion.h1>

      <div className="shop-layout">
        {/* Sidebar */}
        <motion.div
          className={`sidebar ${mobileFilter ? "active" : ""}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h4>Browse by</h4>
          <ul>
            <li>All Products</li>
            <li>Huzz Plants</li>
            <li className="active-link">Plants of Gyatt</li>
            <li>Commander's Handbox</li>
            <li>Sale</li>
            <li>Gyattscriptions</li>
          </ul>

          <h4>Filter by</h4>

          <div className="filter-section">
            <div className="price-header">
              <span>Price</span>
              <span>-</span>
            </div>

            <input
              type="range"
              min="46"
              max="9999"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="price-values">
              <span>BDT 46</span>
              <span>BDT {price}</span>
            </div>
          </div>
        </motion.div>

        {/* Products */}
        <div className="products-section">
          <div className="sort-bar">
            <button
              className="mobile-filter-btn"
              onClick={() => setMobileFilter(!mobileFilter)}
            >
              Filters
            </button>
            <span>Sort by: Recommended ▾</span>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <motion.div
                className="product-card"
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="image-wrapper">
                  {product.badge && (
                    <span className={`badge ${product.badge.toLowerCase()}`}>
                      {product.badge}
                    </span>
                  )}

                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <h3>{product.name}</h3>

                <div className="price">
                  {product.oldPrice && (
                    <span className="old">{product.oldPrice}</span>
                  )}
                  <span>{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
