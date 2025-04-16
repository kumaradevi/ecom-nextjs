import React from 'react'
import { SiTicktick } from "react-icons/si";

const OrderComplete = () => {
  return (
    <div>
        <div className='flex justify-center mb-5'><SiTicktick size={50} className='text-green-500 '/></div>
        <h1 className='text-5xl font-medium text-center'>Thank You</h1>
        <p className='mt-3 text-lg font-medium text-gray-600'>Your Order has been received</p>
    </div>
  )
}

export default OrderComplete