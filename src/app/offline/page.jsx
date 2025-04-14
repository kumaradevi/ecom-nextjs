"use client";
import React from 'react';
import Link from 'next/link';

const Page = () => {
    
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          You are offline
        </h1>
        <p className="text-lg mb-4">
          It looks like you're not connected to the internet. Please check your connection and try again.
        </p>
        <div>
          <Link href="/">
            <p className="text-blue-500 hover:underline">Go back to home</p>
          </Link>
        </div>
        <div className="mt-6">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page