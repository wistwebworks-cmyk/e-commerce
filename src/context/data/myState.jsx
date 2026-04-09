import { useEffect, useMemo, useState } from "react";
import MyContext from "./myContext";

const STORAGE_KEY = "wistplants_cart_items";

const parsePrice = (value) => {
  if (!value) return 0;
  const numeric = Number.parseFloat(String(value).replace(/[^\d.]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
};

const loadStoredCart = () => {
  if (typeof window === "undefined") return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => ({
        ...item,
        quantity: Math.max(1, Number(item.quantity) || 1),
      }))
      .filter((item) => item?.id);
  } catch (error) {
    console.error("Unable to parse cart from localStorage:", error);
    return [];
  }
};

function MyState({ children }) {
  const [cartItems, setCartItems] = useState(loadStoredCart);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    if (!product?.id) return;

    const safeQuantity = Math.max(1, Number(quantity) || 1);

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        return prev.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          badge: product.badge ?? null,
          quantity: safeQuantity,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    const safeQuantity = Number(quantity) || 0;

    if (safeQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: safeQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartSubtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + parsePrice(item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <MyContext.Provider
      value={{
        cartItems,
        cartCount,
        cartSubtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        parsePrice,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
