import React from 'react'

const Page = () => {
  return (
    <div className='w-[90%] mx-auto mt-12'>
       <div className='w-[50%] mx-auto flex justify-between'>
        <div className='flex flex-col items-center gap-2'>
        <div className='w-[50px] h-[50px] rounded-full bg-gray-300/75 text-white flex justify-center items-center'>
            1
        </div>
        <p>Shipping Address</p>
        </div>
        <div className='w-[50px] h-[50px] rounded-full bg-gray-300/75 text-white flex justify-center items-center'>
            2
        </div>
        <div className='w-[50px] h-[50px] rounded-full bg-gray-300/75 text-white flex justify-center items-center'>
            3
        </div>
       </div>
    </div>
  )
}

export default Page