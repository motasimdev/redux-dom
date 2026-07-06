import { createContext, useState } from "react";

// ১. বয়ামটা তৈরি করলাম
const CartContext = createContext();

// // ২. এই প্রোভাইডারটাই পুরো অ্যাপে ডাটা সাপ্লাই দেবে
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // কার্টে প্রোডাক্ট যোগ করা (কাউন্ট অটোমেটিক items.length থেকে আসবে)
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   // ২. কার্ট থেকে প্রোডাক্ট বাদ দেওয়া
//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId),
//     );
//   };

//   // ৩. কার্ট একদম খালি করে দেওয়া (চেকআউটের পর)
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     // value এর ভেতর আমরা যে ডাটা বা ফাংশন দেব, সেটা সবাই পাবে
//     <CartContext.Provider value={{ cartItems, cartCount, totalPrice, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // একটা কাস্টম হুক বানিয়ে রাখলাম যাতে সহজে অন্য ফাইলে ব্যবহার করা যায়
// export const useCart = () => useContext(CartContext);

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
