"use client";
import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import OrderComplete from "../components/OrderComplete";

const Page = () => {
  const [stage, setStage] = useState(1);

  const handleNext = () => {
   window.scrollTo({top:0,behavior:"smooth"})
    if (stage < 3) {
      setStage(stage + 1);
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-12">
      {/* Progress bar */}
      <div className="w-[40%] mx-auto h-[5px] absolute top-[150px] left-[460px] rounded-full bg-gray-300">
        <div
          className={`h-full transition-all duration-300 ${
            stage === 2 ? "w-[50%] bg-green-600" : stage === 3 ? "w-full bg-green-600" : "w-0"
          }`}
        ></div>
      </div>

      {/* Steps */}
      <div className="w-[50%] mx-auto flex justify-between relative z-[999]">
        {["Shipping Address", "Checkout Details", "Order Complete"].map((label, index) => {
          const stepNumber = index + 1;
          const isActive = stage >= stepNumber;
          return (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className={`w-[50px] h-[50px] rounded-full flex justify-center items-center text-white ${
                  isActive ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                {stepNumber}
              </div>
              <p>{label}</p>
            </div>
          );
        })}
      </div>
  {stage === 1 &&  <div className="flex justify-center items-center w-[60%] mx-auto mt-12">
    <AddressForm/>
    </div>}
    {stage === 3 && <div  className="flex justify-center items-center w-[60%] mx-auto mt-12">
      <OrderComplete/>
    </div>}
    
      
      {/* Next Button */}
      {stage < 3 && (
        <div className="flex justify-end mb-12 mt-4 w-[60%] mx-auto">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md font-medium"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;








// "use client"
// import React, { useState } from "react";

// const Page = () => {
//   const [stage1,setStage1]=useState(true);
//   const [stage2,setStage2]=useState(false);
//   const [stage3,setStage3]=useState(false);
//   const [currIndex,setCurrIndex]=useState(0)

//   const handleNext=()=>{
//     if(stage1){
//       setStage1(false);
//       setStage2(true);
//       setStage3(false)
//       setCurrIndex(currIndex++)
//     }
//     if(stage2){
//       setStage2(false)
//       setCurrIndex(currIndex++)
//     }
    
//   }
//   return (
//     <div className="w-[90%] mx-auto mt-12">
//       <div className="w-[40%] mx-auto  h-[5px]  absolute top-[150px] left-[460px] rounded-full">
//         <div className={`${!stage1 ? "w-[50%] bg-green-600" : stage2 ? "w-[50%] bg-green-600":"bg-transparent"} h-full`}></div>
//       </div>
//       <div className="w-[50%] mx-auto flex justify-between relative z-[999]">
//         <div className="flex flex-col items-center gap-2">
//           <div className={`w-[50px] h-[50px] rounded-full ${stage1 ? "bg-gray-300" :"bg-green-600"} text-white flex justify-center items-center`}>
//             1
//           </div>
//           <p>Shipping Address</p>
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <div className={`w-[50px] h-[50px] rounded-full ${stage2 && currIndex==2 ? "bg-green-600" :"bg-gray-300"} text-white flex justify-center items-center`}>
//             2
//           </div>
//           <p>Checkout Details</p>
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <div className="w-[50px] h-[50px] rounded-full bg-gray-300 text-white flex justify-center items-center">
//             3
//           </div>
//           <p>Order complete</p>
//         </div>
//       </div>



        

   


//       <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium" onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Page;
