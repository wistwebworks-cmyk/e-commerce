import React, { useState, useEffect } from "react";
import "../Pages/CSS/Details.css";
import { products } from "../context/data/Product.js";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";



const Details = () => {


  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
  const [quantity, setQuantity] = useState(1);
  const [openInfo, setOpenInfo] = useState(true);
  const [openRefund, setOpenRefund] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // if the id is invalid, products.find will return undefined which
  // causes the component to crash when trying to read properties.  an
  // undefined product was leading to a runtime error and a blank page
  // in Vite. guard early and show a message instead of attempting to
  // render the rest of the markup.
  if (!product) {
    return <div className="details">Product not found</div>;
  }

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <motion.div
      className="details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* breadcrumb */}
      <div className="breadcrumb">
        Home &gt; Plants of Gyatt &gt; {product.name}
      </div>

      <div className="details-container">

        {/* LEFT IMAGE */}
        <div className="details-left">

          <div className="thumbnail">
            {/* thumbnail should display the product image, not the name */}
            <img src={product.image} alt="thumb" />
          </div>

          <motion.div
            className="main-image"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img src={product.image} alt={product.name}/>
          </motion.div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="details-right">

          <motion.h1
            className="product-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.name}
          </motion.h1>

          <div className="price">{product.price}</div>

          <p className="product-description">
            {product.description || "No description available."}
          </p>

          {/* SIZE */}
          <div className="size-section">
            <label>Size</label>

            <select className="size-select">
              <option>Select</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>


          {/* QUANTITY */}
          <div className="quantity-section">

            <label>Quantity</label>

            <div className="quantity-box">

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={decrease}
              >
                -
              </motion.button>

              <span>{quantity}</span>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={increase}
              >
                +
              </motion.button>

            </div>

          </div>


          {/* BUTTONS */}
          <div className="button-row">

            <motion.button
              className="add-cart"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>

            <motion.button
              className="buy-now"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.button>

            <motion.button
              className={`wishlist ${liked ? "liked" : ""}`}
              whileTap={{ scale: 0.8 }}
              onClick={() => setLiked(!liked)}
            >
              ♥
            </motion.button>

          </div>


          {/* ACCORDION */}

          <div className="accordion">

            <div
              className="accordion-header"
              onClick={() => setOpenInfo(!openInfo)}
            >
              <span>Product Info</span>
              <span>{openInfo ? "—" : "+"}</span>
            </div>

            <AnimatePresence>
              {openInfo && (
                <motion.div
                  className="accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eius autem iusto dolorem ipsum nostrum atque, obcaecati modi debitis optio hic quasi fuga aspernatur? Cupiditate mollitia laboriosam ut assumenda cum.
                </motion.div>
              )}
            </AnimatePresence>

          </div>


          <div className="accordion">

            <div
              className="accordion-header"
              onClick={() => setOpenRefund(!openRefund)}
            >
              <span>Return & Refund Policy</span>
              <span>{openRefund ? "—" : "+"}</span>
            </div>

            <AnimatePresence>
              {openRefund && (
                <motion.div
                  className="accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta itaque cumque ducimus atque voluptate aliquam sed animi quos qui quo eius ullam, iure dolorum eos cum quod blanditiis accusamus?
                </motion.div>
              )}
            </AnimatePresence>

          </div>


          <div className="accordion">

            <div
              className="accordion-header"
              onClick={() => setOpenShipping(!openShipping)}
            >
              <span>Shipping Info</span>
              <span>{openShipping ? "—" : "+"}</span>
            </div>

            <AnimatePresence>
              {openShipping && (
                <motion.div
                  className="accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi sunt reprehenderit adipisci consectetur! Non sunt vero, distinctio eius perspiciatis id nihil reiciendis magnam tempore blanditiis in fugit, quasi nulla.
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default Details;
