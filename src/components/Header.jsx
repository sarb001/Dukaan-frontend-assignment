import React from 'react'
import { ArrowDown , QuestionMark, SpekerIcon } from '../../public/assests/Allicons'
import MainDashboard from './MainDashboard'

const Header = () => {
  return (
    <>
      <div className='bg-[#fff] px-4 py-3 border-b-2 border-b-[#d9d9d9] grid grid-cols-2  tablet:grid-cols-3 gap-5'>
        
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
          <div className='hidden  bg-[#F2F2F2] rounded-md  px-4 py-[9px]  tablet:w-[400px] tablet:flex items-center gap-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" >
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            <input type = "text"  placeholder='Search Tutorials..' className='bg-[#f2f2f2]
            ' 
            />
          </div>

          {/* Last 3 icons */}
          <div className='flex justify-end gap-1 '>
              <div className='w-10 h-10 bg-[#E6E6E6] flex justify-center items-center  rounded-full '> <SpekerIcon /> </div> 
              <div className='w-10 h-10 bg-[#E6E6E6] flex justify-center items-center rounded-full '>  <ArrowDown /> </div> 
          </div>
      </div>

      <div className='py-6 px-4'>
         <MainDashboard />
      </div>
    
    </>
  )
}

export default Header