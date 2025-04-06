// In your CartContext.js (or wherever useCart is defined)
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);

  // Listen to localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      setCartLength(cartData.length);
    };

    // Update on initial load
    handleStorageChange();

    // Listen for changes (e.g., when another tab updates the cart)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <CartContext.Provider value={{ cartLength, setCartLength }}>
      {children}
    </CartContext.Provider>
  );
};
