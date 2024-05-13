import React from 'react'
import { DoubleArrow, DownloadIcon } from '../../public/assests/Allicons'
import RefundTable from './RefundTable'

const PayoutSection = () => {
  return (
    <div className='gap-6 flex flex-col'>
        {/*  text &   Buttons  */}
         <div className='gap-6 flex flex-col'> 
            <div className='text-xl font-medium'> Transaction |This Month </div>

             <div className=' flex gap-[6px]'>
             <button className = 'py-[6px] px-4 bg-[#E6E6E6]  rounded-[40px] '>  Payouts (22) </button>
             <button className = 'py-[6px] px-4 bg-[#146EB4]  rounded-[40px] '>  Refunds (6)  </button>
         </div>
         </div>

         {/* input and Table Section */}
         <div className='flex flex-col overflow-auto tablet:w-full  justify-between gap-3 bg-[#fff] rounded-lg p-3 pb-2'>

            <div className='flex gap-2 '>

                <div className='flex items-center w-full  border border-[#d9d9d9] pl-4'>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type = "text" placeholder='Order ID' /> 
                </div>

                <div className='flex gap-2 '>
                    <div className='flex justify-center items-center gap-[6px] px-3 py-[6px]
                    border border-[#d9d9d9] 
                    '> 
                        <div> SORT </div>
                        <DoubleArrow />
                    </div>
                    <div>
                        <DownloadIcon />
                    </div>
                </div>

            </div>

            <div className='overflow-x-auto'>
                <div> <RefundTable /> </div>
            </div>

        </div>
    </div>
  )
}

export default PayoutSection