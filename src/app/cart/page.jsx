"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { selectcarts } from '../features/slices/cartSlice'

const page = () => {
const cartItems=useSelector(selectcarts);
  return (
    <div></div>
  )
}

export default page