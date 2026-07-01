import { createContext, useState, useContext } from "react";

// ১. বয়ামটা তৈরি করলাম
const CartContext = createContext();

// ২. এই প্রোভাইডারটাই পুরো অ্যাপে ডাটা সাপ্লাই দেবে
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // কার্ট সংখ্যা ১ বাড়ানোর ফাংশন
  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    // value এর ভেতর আমরা যে ডাটা বা ফাংশন দেব, সেটা সবাই পাবে
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ৩. একটা কাস্টম হুক বানিয়ে রাখলাম যাতে সহজে অন্য ফাইলে ব্যবহার করা যায়
export const useCart = () => useContext(CartContext);