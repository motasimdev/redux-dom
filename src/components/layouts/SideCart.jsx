import CartContext from "@/context/CartContext";
import { Minus } from "lucide-react";
import React, { useContext } from "react";

const SideCart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className="flex items-center">
        <button>
          <Minus />
        </button>
        {cartItems.map((item) => (
          <div className="h-20 w-25">
            <img src={item.thumbnail} alt="" className="w-full h-full"/>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideCart;
