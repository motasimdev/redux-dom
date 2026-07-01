import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <>
      <section className="py-3">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between">
            <div className="w-[50%] h-100">
              <img src={product.thumbnail} alt="" className="w-full h-full" />
            </div>
            <div className="w-[50%]">
              <p className="font-semibold text-2xl">{product.title}</p>
              <p className="font-medium text-xl pt-8">{product.description}</p>
              <div className="">rating-{product.rating}</div>
              <div className="font-bold">${product.price}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
