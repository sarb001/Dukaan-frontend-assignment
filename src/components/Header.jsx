import React from 'react'
import { ArrowDown, HamburgerIcon, QuestionMark, SpekerIcon } from '../../public/assests/Allicons'

const Header = () => {
  return (
    <div className='bg-[#fff] px-4 py-3 border-b-2 border-b-[#d9d9d9] grid grid-cols-2 gap-5'>
      
        <div className='flex items-center gap-2'>
          <div className='w-[10%] tablet:hidden '> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
          </div>
          <span className='text-[#1A181E] text-xl font-medium'>  Payouts </span>
          <div className='flex gap-1.5 min-w-28 '> 
           <div className='w-[18%]'> <QuestionMark />   </div> 
           <div className='text-xs'>  How it works </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className='hidden tablet:block'>
           <input type = "text"  placeholder='Search Tutorials..' />
        </div>

         {/* Last 3 icons */}
        <div className='flex justify-end gap-1 '>
            <div className='w-10 h-10 bg-[#E6E6E6] flex justify-center items-center  rounded-full '> <SpekerIcon /> </div> 
            <div className='w-10 h-10 bg-[#E6E6E6] flex justify-center items-center rounded-full '>  <ArrowDown /> </div> 
        </div>
    </div>
  )
}

export default Header