import { createContext, useState } from "react";

export const StoreContext = createContext(); // export hona chahiye

function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <StoreContext.Provider
      value={{ cart, wishlist, addToCart, addToWishlist }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;