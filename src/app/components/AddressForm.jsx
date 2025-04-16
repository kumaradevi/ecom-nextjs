import React, { useState } from "react";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    phoneNumber:"",
    address:{
        street:"",
        city:"",
        state:"",
        country:"",
        postalCode:"",

    }
  });
  return (
    <div className="w-full">
      <form action="" className="shadow-md p-6">
        <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
         
         
          
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="">Street Address</label>
            <textarea
            
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Town/City</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">State</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Postal/Zip</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-blue-500 w-[100%]"
            />
          </div>
         
          </div>
      </form>
    </div>
  );
};

export default AddressForm;
