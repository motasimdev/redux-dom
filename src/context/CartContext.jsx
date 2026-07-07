import { createContext, useState } from "react";

// ১. বয়ামটা তৈরি করলাম
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    console.log(cartItems);
    if (!existingProduct) {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      );
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
