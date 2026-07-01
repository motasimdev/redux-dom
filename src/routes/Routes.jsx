import Home from "@/components/pages/Home";
import Shop from "@/components/pages/Shop";
import Root from "@/components/Root";
import React from "react";
import { createBrowserRouter } from "react-router";

const Routes = createBrowserRouter([
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

export default Routes;
