"use client";
import React, { useState } from 'react'
import Link from 'next/link';

const Page = () => {
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const handleSignup=()=>{
        localStorage.setItem("user",JSON.stringify({userName,email,password}))
    }
  return (
    <div className='flex justify-center items-center w-full h-[100vh] '>
       <div className='w-[600px] min-h-[200px] flex flex-col gap-4  shadow-sm rounded-md p-6'>
        <h2 className='text-center text-lg font-medium '>Signup</h2>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">UserName</label>
            <input type="text"  value={userName} onChange={(e)=>setUserName(e.target.value)} className='w-full outline-none border border-gray-500 px-4 py-2 rounded-md focus:border-blue-500' required/>
        </div>
       <div className='flex flex-col gap-2'>
            <label htmlFor="">Email</label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full outline-none border border-gray-500 px-4 py-2 rounded-md focus:border-blue-500' required/>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full outline-none border border-gray-500 px-4 py-2 rounded-md focus:border-blue-500' required/>
        </div>
       <div className='flex justify-center'>
       <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-90 transition cursor-pointer' onClick={handleSignup}>SignUp</button>
       </div>
       <p className='mt-3'>Already have an account? <Link href='/login'><span className='text-blue-500'>Login here</span></Link></p>
       </div>
    </div>
  )
}

export default Page