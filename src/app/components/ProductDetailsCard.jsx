"use client";
import React from 'react'
import { useSelector } from 'react-redux';
import { setproducts } from '../features/slices/productSlice';

const ProductDetailsCard = ({id}) => {
    const products=useSelector(setproducts);
        const product=Array.isArray(products)?.products.find((p)=>p.id === id);

  return (
    <div>
        <div>
            <div>
              <Image src={product?.image}
                          width={150}
                          height={150}
                          alt={product?.title}
                          className="object-contain max-h-full"
                        />
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsCard