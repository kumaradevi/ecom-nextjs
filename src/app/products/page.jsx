import React, { Suspense } from 'react'
// import ProductCard from '../components/ProductCard'
const ProductCard =React.lazy(()=>import('../components/ProductCard'));

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <ProductCard/>
        </Suspense>
    </div>
  )
}

export default page