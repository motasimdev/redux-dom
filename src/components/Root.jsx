import React from "react";
import { Outlet } from "react-router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
