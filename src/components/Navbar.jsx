import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between  py-3 px-8 gap-4 bg-[#FFFFFF] '>
        <div className='flex'>
            <div> Payouts </div>
            <div> <AiOutlineQuestionCircle />  </div>
        </div>
     
        <div> 
            <input type= "text"  placeholder = 'Search feature,tutorials' />
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