import React from 'react'

const Card = ({title,amount,orders,payoutdata , color ,textcolor}) => {
  return (

       <div className = {` layout ${color} rounded-lg  ${textcolor} `}>
          
        {payoutdata? (
          <>
              <div className = 'p-5 grid gap-4 grid-col'>

                <div className='flex items-center gap-2'>

                    <div> {title} </div>

                    <div> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                      </svg> 
                    </div>

                </div>

              <div className='flex justify-between flex-row'>
                
                  <div> 
                    <div className='text-2xl font-medium '> ₹{amount} </div>
                  </div>

                {orders ? (
                  <div className= 'flex flex-row underline'>
                      <div> {orders} orders </div>
                      <div> 
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95696 5.29289C9.34748 4.90237 9.98064 4.90237 10.3712 5.29289L16.3712 11.2929C16.5587 11.4804 16.6641 11.7348 16.6641 12C16.6641 12.2652 16.5587 12.5196 16.3712 12.7071L10.3712 18.7071C9.98065 19.0976 9.34748 19.0976 8.95696 18.7071C8.56643 18.3166 8.56643 17.6834 8.95696 17.2929L14.2498 12L8.95696 6.70711C8.56643 6.31658 8.56643 5.68342 8.95696 5.29289Z" fill= "white" />
                        </svg> 
                      </div>
                  </div>
                  ) : ""}

              </div>

              </div>
              
              <div className='py-2 px-6 bg-[#0e4f82] rounded-lg '>
                    <div className='flex justify-between '>
                        <div> Next payout date: </div>
                        <div> {payoutdata} </div>
                    </div>
              </div>
          </>
          ) :(
            <div className = 'p-5 grid gap-4 grid-col'>

                <div className='flex items-center gap-2'>
                
                    <div> {title} </div>
                
                    <div> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                      </svg> 
                    </div>
                
                </div>
                
                <div className='flex justify-between flex-row'>
                  
                    <div> 
                      <div className='text-2xl font-medium '> ₹{amount} </div>
                    </div>
                
                  {orders ? (
                    <div className= 'flex flex-row underline text-[#146eb4]'>
                        <div> {orders} orders </div>
                        <div> 
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95696 5.29289C9.34748 4.90237 9.98064 4.90237 10.3712 5.29289L16.3712 11.2929C16.5587 11.4804 16.6641 11.7348 16.6641 12C16.6641 12.2652 16.5587 12.5196 16.3712 12.7071L10.3712 18.7071C9.98065 19.0976 9.34748 19.0976 8.95696 18.7071C8.56643 18.3166 8.56643 17.6834 8.95696 17.2929L14.2498 12L8.95696 6.70711C8.56643 6.31658 8.56643 5.68342 8.95696 5.29289Z" fill= "blue" />
                          </svg> 
                        </div>
                    </div>
                    ) : ""}
                
                </div>

            
            </div>
          )}

       </div>

  )
}

export default Card