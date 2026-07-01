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
      <section className="bg-purple-900">
        <div className="max-w-315 mx-auto px-3">
          <div className="flex items-center justify-between flex-wrap gap-y-8 px-6">
            {products.map((item) => (
              <div className="">
                <div className="w-80 p-4 bg-purple-600 mt-9">
                  <img src={item.thumbnail} alt="" />
                  <p className="font-medium line-clamp-1">{item.title}</p>
                  <p className="line-clamp-2">{item.description}</p>
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
