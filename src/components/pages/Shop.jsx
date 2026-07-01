import axios from "axios";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <section className="bg-amber-600">
        <div className="max-w-315 mx-auto px-3">
          <div className="flex items-center justify-between flex-wrap gap-y-3">
            {products.map((item) => (
              <div className="">
                <div className="w-80 p-4 bg-amber-200">
                  <img src={item.thumbnail} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
