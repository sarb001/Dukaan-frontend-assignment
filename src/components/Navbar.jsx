import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMagnifyingGlass } from "react-icons/hi2";


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between border-b  sticky top-0 z-100   py-3 px-8 gap-4 bg-[#FFFFFF] '>
      
        <div className='flex justify-between gap-1.5 items-center'>
            <div> Payments </div>
            <div className='flex justify-center gap-1.5 items-center' > 
                 <AiOutlineQuestionCircle />
                <p className='text-xs'> How it works </p> 
             </div>
        </div>
     
        <div className='flex gap-2 py-1.5  w-[400px] px-[9px] bg-[#F2F2F2] rounded-md items-center '> 
            <HiMagnifyingGlass />
            <input className='bg-[#F2F2F2] border-none' type= "text"  placeholder = 'Search feature,tutorials' />
        </div>

        <div className='flex flex-row gap-[10px] '>
            <div className= 'w-10 h-10  bg-[#E6E6E6]   rounded-full flex items-center  justify-center '> 
            <img className= 'w-[20px] h-[20px]'  src = "/speaker.webp"  /> 
            </div>
            <div className='w-10 h-10 bg-[#E6E6E6] rounded-full flex items-center  justify-center'> 
              <TiArrowSortedDown /> 
            </div>
        </div>
    </div>
  )
}

export default Navbar