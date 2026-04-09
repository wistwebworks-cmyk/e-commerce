import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../context/data/myContext";
import "./CSS/Cart.css";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal, parsePrice, updateQuantity, removeFromCart } =
    useContext(MyContext);

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <section className="cart-empty">
          <h1>Your cart is empty</h1>
          <p>Add a few plants and they will appear here.</p>
          <Link className="cart-empty-btn" to="/shop-now">
            Continue shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-content">
        <h1 className="cart-title">My Cart</h1>

        <div className="cart-table">
          {cartItems.map((item) => {
            const lineTotal = parsePrice(item.price) * item.quantity;

            return (
              <article className="cart-item" key={item.id}>
                <div className="cart-item-main">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                  </div>
                </div>

                <div className="cart-qty-controls">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Decrease quantity for ${item.name}`}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label={`Increase quantity for ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item-total">{formatCurrency(lineTotal)}</p>

                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <aside className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>{formatCurrency(cartSubtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <span>{formatCurrency(cartSubtotal)}</span>
        </div>

        <button
          type="button"
          className="cart-checkout-btn"
          onClick={() => navigate("/confirm")}
        >
          Proceed to Checkout
        </button>
      </aside>
    </main>
  );
};

export default Cart;
