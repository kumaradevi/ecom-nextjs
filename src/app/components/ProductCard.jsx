"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setproducts } from "../features/slices/productSlice";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      dispatch(setproducts(res.data))
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
  {products &&
    products.map((product) => (
      <div
        key={product?.id}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between"
      >
       <Link href={`/products/${product.id}`}> <div className="flex justify-center items-center h-48">
          <Image
            src={product?.image}
            width={150}
            height={150}
            alt={product?.title}
            className="object-contain max-h-full"
          />
        </div></Link>

        <div className="mt-4">
          <h4 className="text-sm font-medium line-clamp-2 h-[3em] text-gray-800">
            {product?.title}
          </h4>
   
          <p className="text-blue-500 font-semibold mt-1">${product?.price}</p>
        </div>

       
        <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    ))}
</div>

  );
};

export default ProductCard;
