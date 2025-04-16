"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { selectcarts } from '../features/slices/cartSlice'
import CartItemCard from '../components/CartItemCard'
import Checkout from '../components/Checkout'

const page = () => {
const cartItems=useSelector(selectcarts);
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
        <CartItemCard cartItems={cartItems}/>
        <Checkout cartItems={cartItems}/>
    </div>
  )
}

export default page