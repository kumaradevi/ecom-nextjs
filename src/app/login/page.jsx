"use client";
import React, { useState } from 'react'

const page = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
  return (
    <div>
        <div>
            <label htmlFor="">Email</label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
    </div>
  )
}

export default page