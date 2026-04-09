import { useContext, useEffect, useState } from "react";
import "./CSS/Details.css";
import { products } from "../context/data/Product.js";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../context/data/myContext.jsx";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [openInfo, setOpenInfo] = useState(true);
  const [openRefund, setOpenRefund] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(MyContext);
  const product = products.find((entry) => entry.id === Number(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (!product) {
    return <div className="details">Product not found</div>;
  }

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        selectedSize,
      },
      quantity
    );

    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1200);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <motion.div
      className="details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="breadcrumb">
        Home &gt; Plants of Gyatt &gt; {product.name}
      </div>

      <div className="details-container">
        <div className="details-left">
          <div className="thumbnail">
            <img src={product.image} alt="Product thumbnail" />
          </div>

          <motion.div
            className="main-image"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img src={product.image} alt={product.name} />
          </motion.div>
        </div>

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

          <div className="size-section">
            <label htmlFor="size-select">Size</label>
            <select
              id="size-select"
              className="size-select"
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          <div className="quantity-section">
            <label>Quantity</label>

            <div className="quantity-box">
              <motion.button whileTap={{ scale: 0.9 }} onClick={decrease}>
                -
              </motion.button>
              <span>{quantity}</span>
              <motion.button whileTap={{ scale: 0.9 }} onClick={increase}>
                +
              </motion.button>
            </div>
          </div>

          <div className="button-row">
            <motion.button
              className="add-cart"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </motion.button>

            <motion.button
              className="buy-now"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBuyNow}
            >
              Buy Now
            </motion.button>

            <motion.button
              className={`wishlist ${liked ? "liked" : ""}`}
              whileTap={{ scale: 0.8 }}
              onClick={() => setLiked((prev) => !prev)}
            >
              {"\u2665"}
            </motion.button>
          </div>

          <div className="accordion">
            <div className="accordion-header" onClick={() => setOpenInfo((prev) => !prev)}>
              <span>Product Info</span>
              <span>{openInfo ? "-" : "+"}</span>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eius
                  autem iusto dolorem ipsum nostrum atque, obcaecati modi debitis
                  optio hic quasi fuga aspernatur? Cupiditate mollitia laboriosam ut
                  assumenda cum.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="accordion">
            <div className="accordion-header" onClick={() => setOpenRefund((prev) => !prev)}>
              <span>Return and Refund Policy</span>
              <span>{openRefund ? "-" : "+"}</span>
            </div>

            <AnimatePresence>
              {openRefund && (
                <motion.div
                  className="accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                  dicta itaque cumque ducimus atque voluptate aliquam sed animi quos
                  qui quo eius ullam, iure dolorum eos cum quod blanditiis accusamus?
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="accordion">
            <div
              className="accordion-header"
              onClick={() => setOpenShipping((prev) => !prev)}
            >
              <span>Shipping Info</span>
              <span>{openShipping ? "-" : "+"}</span>
            </div>

            <AnimatePresence>
              {openShipping && (
                <motion.div
                  className="accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi
                  sunt reprehenderit adipisci consectetur! Non sunt vero, distinctio
                  eius perspiciatis id nihil reiciendis magnam tempore blanditiis in
                  fugit, quasi nulla.
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
