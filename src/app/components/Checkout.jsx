import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Checkout = ({ cartItems }) => {
    const [total,setTotal]=useState(null);
    const addAmount=cartItems.reduce((acc,curr)=>acc+(curr.price*curr.qty),0);
    const router=useRouter();
   
    const productTitle=cartItems.map((item)=>item.title.length > 20 ? item.title.substring(0,15)+'...' : item.title)

    useEffect(()=>{
     if(addAmount){
        setTotal(addAmount)
     }
    },[addAmount])
  return (
    <div>
      {cartItems && cartItems.length > 0 && (
        <div className="w-[320px] min-h-[200px] p-3 rounded-lg shadow-md mt-32">
          <h3 className="text-center text-xl font-semibold mb-4">Order Summary</h3>
          <div className="border-b border-gray-300 ">
          {cartItems.map((item,index) => (
            <div className="flex justify-between my-2">
              <p>{productTitle[index]}</p>
             <div className="flex gap-1">
             <p>{item.qty}</p>
             <p>x</p>
             <p>{item.price}</p>
             </div>
            </div>
          ))}
       </div>
         <div className="flex justify-between mt-3">
         <p className="text-xl font-semibold">Total</p>
         <p className="text-xl font-semibold">RS.{total}</p>
         </div>
        <div className="flex justify-center mt-5">
        <button className="bg-amber-500 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-amber-600 hover:scale-95 transition-all" onClick={()=>router.push('/checkout')}>Order Now</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
