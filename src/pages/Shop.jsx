import { useContext, useMemo, useState } from "react";
import "./CSS/Shop.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/data/myContext.jsx";
import { browseCategories, products } from "../context/data/Product.js";

const parsePrice = (value) => {
  if (!value) return 0;
  const numeric = Number.parseFloat(String(value).replace(/[^\d.]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
};

const MIN_PRICE = Math.min(...products.map((product) => parsePrice(product.price)));
const MAX_PRICE = Math.max(...products.map((product) => parsePrice(product.price)));

const Shop = () => {
  const [priceLimit, setPriceLimit] = useState(MAX_PRICE);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [lastAddedId, setLastAddedId] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(MyContext);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products
      .filter((product) => {
        if (selectedCategory === "All Products") return true;
        if (selectedCategory === "Sale") return product.badge === "Sale";
        return product.category === selectedCategory;
      })
      .filter((product) => parsePrice(product.price) <= Number(priceLimit));

    return filtered.sort((a, b) => {
      if (sortBy === "price-asc") return parsePrice(a.price) - parsePrice(b.price);
      if (sortBy === "price-desc") return parsePrice(b.price) - parsePrice(a.price);
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });
  }, [priceLimit, selectedCategory, sortBy]);

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product, 1);
    setLastAddedId(product.id);
    window.setTimeout(() => setLastAddedId(null), 1300);
  };

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
        <motion.aside
          className={`sidebar ${mobileFilter ? "active" : ""}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h4>Browse by</h4>
          <ul>
            {browseCategories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  className={`sidebar-category-btn ${
                    selectedCategory === category ? "is-active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setMobileFilter(false);
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          <h4>Filter by</h4>
          <div className="filter-section">
            <div className="price-header">
              <span>Price</span>
              <button
                type="button"
                className="price-reset"
                onClick={() => setPriceLimit(MAX_PRICE)}
              >
                Reset
              </button>
            </div>

            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceLimit}
              onChange={(event) => setPriceLimit(Number(event.target.value))}
            />

            <div className="price-values">
              <span>BDT {MIN_PRICE.toLocaleString()}</span>
              <span>BDT {Number(priceLimit).toLocaleString()}</span>
            </div>
          </div>
        </motion.aside>

        <section className="products-section">
          <div className="sort-bar">
            <button
              type="button"
              className="mobile-filter-btn"
              onClick={() => setMobileFilter((prev) => !prev)}
            >
              Filters
            </button>

            <label className="sort-label">
              Sort by:
              <select
                className="sort-select"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </label>
          </div>

          <div className="product-grid">
            {filteredAndSortedProducts.map((product, index) => (
              <motion.article
                className="product-card"
                key={product.id}
                onClick={() => navigate(`/details/${product.id}`)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
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
                  {product.oldPrice && <span className="old">{product.oldPrice}</span>}
                  <span>{product.price}</span>
                </div>

                <button
                  type="button"
                  className={`card-add-btn ${
                    lastAddedId === product.id ? "is-confirmed" : ""
                  }`}
                  onClick={(event) => handleAddToCart(event, product)}
                >
                  {lastAddedId === product.id ? "Added" : "Add to Cart"}
                </button>
              </motion.article>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <p className="empty-products">No products match your selected filters.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Shop;
