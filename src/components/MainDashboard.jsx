import React from 'react'
import Card from './Card'

const MainDashboard = () => {

  return (
    <div>

        {/*  Overview  */}
        <div>
            <div>
                <div className='font-medium text-xl'> Overview </div>
                <div> This Month </div>
            </div>

            <div className = 'grid grid-cols-1 gap-5 tablet:grid-cols-2 '>
                <Card   title = "Next Payout"   amount = "2,312.13" orders = "23" payoutdata = "Today,04:00PM"  color = "bg-[#146eb4]" textcolor = "text-white" 
                />
                <Card   title = "Amount Pending"   amount = "92,312.20" orders = "13"  color = "bg-[#FFFFFF]"  textcolor = "text-black"  />
                <Card   title = "Amount Processed" amount = "23,92,312.19"  
                 color = "bg-[#FFFFFF]"  textcolor = "text-black"  />
            </div>
        </div>


        {/* Transactions = */}
        <div>

        </div>
    </div>
  )
}

export default MainDashboard