"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { getAuth } from '../features/slices/authSlice';

const Page = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const router=useRouter();
    const dispatch=useDispatch();

    const handleLogin=()=>{
       const authUser=JSON.parse(localStorage.getItem("user"));
        if(!email || !password){
            return
        }
        if(email === authUser.email && password === authUser.password){
            dispatch(getAuth({email,password}))
            router.push('/')
        }
       
       console.log(authUser)
    }
  return (
    <div className='flex justify-center items-center w-full h-[100vh] '>
       <div className='w-[600px] min-h-[200px] flex flex-col gap-4  shadow-sm rounded-md p-6'>
        <h2 className='text-center text-lg font-medium '>Login</h2>
       <div className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full outline-none border border-gray-500 px-4 py-2 rounded-md focus:border-blue-500' required/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password'  value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full outline-none border border-gray-500 px-4 py-2 rounded-md focus:border-blue-500' required/>
        </div>
       <div className='flex justify-center'>
       <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-90 transition cursor-pointer' onClick={handleLogin}>Login</button>
       </div>
       <p className='mt-3'>Don't have an account? <Link href='/signup'><span className='text-blue-500'>Signup here</span></Link></p>
       </div>
    </div>
  )
}

export default Page