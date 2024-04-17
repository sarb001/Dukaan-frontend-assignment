import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  return ( 
    <>
      <div className='py-4 px-2.5 bg-[#1E2640] flex flex-col justify-between gap-4 sticky left-0'>

        {/*  top navbar  */}
        <div className=' flex flex-col gap-6 '>

           {/*  company icon */}
           <div className=' flex flex-row  gap-3'> 

              <div> 
                <img src = "/nishyam.png" className='w-10 h-10 rounded ' />
              </div>

              <div className='flex flex-col w-[108px] '> 
                <div> Nishyan </div>
                <div className='underline'> Visit store </div>
              </div>

              <div className='flex items-center'>
                <IoIosArrowDown />
              </div>
           </div>
           {/* pages  */}

           <div className='gap-1 flex flex-col'>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
              <div> <img src = "/home.png"  className='w-5 h-5' /> </div>
              <div className='text-[14px]'> Home </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/orders.png"  className='w-5 h-5'  />
                <div className='text-[14px]'> Orders </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/products.png"  className='w-5 h-5'  />
                <div className='text-[14px]'> Products </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/delivery.png"  className='w-5 h-5'  />
                <div className='text-[14px]'> Delivery </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/marketing.png"  className='w-5 h-5'  />
                <div className='text-[14px]'> Marketing </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/analytics.png"  className='w-5 h-5'  />
                <div className='text-[14px]'> Analytics </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/payouts.png"  className='w-5 h-5'  />
               <div className='text-[14px]'> Payments </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/discounts.png" className='w-5 h-5'  />
                 <div className='text-[14px]'> Discounts </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/audience.png" className='w-5 h-5' />
                <div className='text-[14px]'> Audience </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/appearence.png" className='w-5 h-5' />
               <div className='text-[14px]'> Appearence </div>
            </div>

            <div className='w-[208px] gap-5 flex flex-row px-4 py-2'>
                <img src = "/plugins.png"  className='w-5 h-5' />
                <div className='text-[14px]'> Plugins </div>
            </div>

           </div>

        </div>

        {/* bottom navbar */}
        <div className='flex px-4 py-1 rounded  gap-2.5 flex-row items-center bg-[#353C53]'>
           <div> <img src = "/wallet.svg"  /> </div>
           <div className='flex flex-col'>
              <div> Available credits </div>
              <div> 224.10 </div>
           </div>
        </div>

      </div>
     </>
  )
}

export default Sidebar