import Image from 'next/image'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeCart } from '../features/slices/cartSlice';

const CartItemCard = ({cartItems}) => {

 const dispatch=useDispatch();
    const deleteItem=(id)=>{
        
     dispatch(removeCart(id))
    }
  return (
    <div className="flex flex-col gap-4 mt-12">
  {cartItems && cartItems.length > 0 ? (
    cartItems.map((item) => (
      <div
        className="flex items-center justify-between gap-6 border border-gray-300 rounded-lg p-4 shadow-sm w-[800px] mx-auto "
        key={item.id}
      >
        <div className="w-[100px] h-[80px] relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-md text-gray-600">${item.price}</p>
          <p className="text-sm text-gray-500">Qty: {item.qty || 1}</p>
        </div>
        <div>
            <button onClick={()=>deleteItem(item.id)}><MdDelete size={25} className='text-red-500'/></button>
        </div>
      </div>
    ))
  ) : (
    <div className="flex justify-center w-full items-center">
      
      <Image src={'/assets/empty_cart.png'} width={300} height={100}></Image>
    </div>
  )}
</div>

  )
}

export default CartItemCard