import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // { "1": { _id:"1", name:"Greek salad", price:12, count:2 }, ... }

  // ✅ Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev[item._id];
      const newCount = existing ? existing.count + 1 : 1;
      return {
        ...prev,
        [item._id]: { ...item, count: newCount },
      };
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      const newCount = existing.count - 1;

      if (newCount <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }

      return {
        ...prev,
        [id]: { ...existing, count: newCount },
      };
    });
  };

  console.log("🛒 Cart:", cart);
  
  const contextValue = {
    food_list,
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
