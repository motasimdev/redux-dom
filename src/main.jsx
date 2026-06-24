import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, //import Root.jsx
    children: [
      { index: true, Component: Home }, //import Home.jsx
      { path: "shop", Component: Shop },
      //{ path: "shop", Component: Shop },
      //{ path: "blog", Component: Blog },
      //{ path: "contact", Component: Contact },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
