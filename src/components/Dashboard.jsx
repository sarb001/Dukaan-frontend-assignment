import React from 'react'
import { AiTwotoneQuestionCircle } from "react-icons/ai";

import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  return (
    <div>
        <div className='px-8 pt-9'>
          <div className='flex justify-between'>
             <div className='text-xl font-[500px]'> Overview </div>  
             <div className='flex justify-center gap-4 w-[137px] h-9 rounded-md bg-lime-400 items-center  '>
                <button> Last Month </button>
                <span> <IoIosArrowDown /> </span>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard