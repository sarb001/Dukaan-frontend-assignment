import React from 'react'
import Card from './Card'
import { ArrowDown } from '../../public/assests/Allicons'
import PayoutSection from './PayoutSection'

const MainDashboard = () => {

  return (
    <div className='flex flex-col gap-8'>

        {/*  Overview  */}
        <div>
            <div className='flex justify-between mb-6'>
                <div className='font-medium text-xl'> Overview </div>
                <div className='flex gap-4 bg-white px-2 py-1'> 
                    <div> This Month  </div>
                    <ArrowDown />
                </div>
            </div>

            <div className = 'grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3 '>
                <Card   title = "Next Payout"   amount = "2,312.13" orders = "23" payoutdata = "Today,04:00PM"  color = "bg-[#146eb4]" textcolor = "text-white" height = "h-[154px]" 
                />
                <Card   title = "Amount Pending"   amount = "92,312.20" orders = "13"  color = "bg-[#FFFFFF]"  textcolor = "text-black"  height = "h-[118px]" />
                <Card   title = "Amount Processed" amount = "23,92,312.19"  
                 color = "bg-[#FFFFFF]"  textcolor = "text-black" height = "h-[118px]"  />
            </div>
        </div>


        {/* Transactions = */}
        <div>
            <PayoutSection />
        </div>
    </div>
  )
}

export default MainDashboard