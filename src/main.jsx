import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Routes from "./routes/Routes";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <StrictMode>
      <RouterProvider router={Routes} />
    </StrictMode>
  </CartProvider>
);
