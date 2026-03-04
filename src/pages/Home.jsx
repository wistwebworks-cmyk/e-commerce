import React, { useState, useEffect } from "react";
import "../Pages/CSS/Home.css";
import { motion, AnimatePresence } from "framer-motion";

/* image */
import Cactus from "../assets/Cavtus Love.avif";
import Ceramic from "../assets/Ceramic Hanging Planter.avif";
import Coated from "../assets/Coated Steel Circle Planter.avif";
import Main from "../assets/Main Image.avif";
import Discover from "../assets/Discover.avif";
import Care from "../assets/Plant Care.avif";
import Plant2 from "../assets/plant2.avif";
import Plant3 from "../assets/plant3.avif";
import Said from "../assets/saidverria.avif";
ssssss
const products = [
  {
    id: 1,
    name: "Huzz's Cactus",
    price: "$9999",
    image: Cactus,
  },
  {
    id: 2,
    name: "Desert Queen",
    price: "$7999",
    image: Ceramic,
  },
  {
    id: 3,
    name: "Modern Succulent",
    price: "$5999",
    image: Coated,
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % products.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );

  return (
    <div className="home-container">
      <section className="hero" >
        {/* LEFT SIDE */}
        <div className="hero-left">
          <img
            src={Main}
            alt="Garden"
            className="hero-bg"
          />

          <motion.div
            className="hero-glass"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              The Essentials for <br /> Your Gyatt Garden
            </h1>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="shop-btn"
            >
              SHOP PLANTS →
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="slider-nav">
            <span onClick={prevSlide}>← Prev</span>
            <span onClick={nextSlide}>Next →</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={products[index].id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -60 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={products[index].image}
                alt=""
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              />

              <div className="product-info">
                <h3>{products[index].name}</h3>
                <p>{products[index].price}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= NEW ARRIVALS ================= */}
      <section className="arrivals">

        <div className="arrivals-header">
          <h2>New Arrivals</h2>
          <a href="/">SHOP ALL</a>
        </div>

        <div className="product-grid">
          {products.map((item, i) => (
            <motion.div
              key={i}
              className="product-card magnetic"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="img-wrapper">
                <img src={item.image} alt="" />
              </div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= CATEGORY ================= */}
      <section className="category">

        <motion.div
          className="category-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Shop by Category</h2>
          <p>Find all you need to master your plant care</p>

          <ul>
            <li>Plant of Gyatt</li>
            <li>Huzz Plant</li>
            <li>GYATTSCRIPTION</li>
          </ul>
        </motion.div>

        <motion.div
          className="category-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={Discover} alt="Category" />
        </motion.div>
      </section>
    </div>
  );
}
