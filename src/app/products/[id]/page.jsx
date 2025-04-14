import ProductDetailsCard from '@/app/components/ProductDetailsCard';
import { setproducts } from '@/app/features/slices/productSlice';
import React from 'react'


const page = ({params}) => {
    const {id}=params;
    
    
  return (
    <div>page{id}
    <ProductDetailsCard id={id}/>
    </div>
  )
}

export default page