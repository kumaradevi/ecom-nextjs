"use client";
import React, { useEffect, useState } from 'react'
import { PiAmazonLogo } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { selectGetUser } from '../features/slices/userSlice';
import { IoMdCart } from "react-icons/io";
import Link from 'next/link';
import { selectcarts } from '../features/slices/cartSlice';

const Navbar = () => {
    const [userName,setUserName]=useState("")
    const user=useSelector(selectGetUser);
    const cartItems=useSelector(selectcarts)

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("user"));
    console.log(data,"from navbar")
    if(data){
      setUserName(data.userName)
    }
  },[user])
  return (
    <div className='w-full h-[80px] bg-[#131921] text-white sticky top-0'>
        <div className='flex justify-between items-center w-[90%] h-full mx-auto'>
          <Link href='/'> <div className='flex gap-2'>
               <div><PiAmazonLogo  size={30}/></div>
               <h2 className='text-xl font-medium'>amazon</h2>
            </div></Link> 
            <div className='flex gap-4'>
                <h4 className='text-lg '>{userName}</h4>
               <Link href={'/cart'}> <div className='flex gap-1'><IoMdCart size={30}/><span className='bg-gray-600 w-[25px] h-[25px] rounded-full flex justify-center items-center'>{cartItems.length}</span></div></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar