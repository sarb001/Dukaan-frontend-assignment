import React from 'react'
import { refunds } from '../data/TableData'

const RefundTable = () => {
  return (
    <>
        <table className='min-w-full'> 
            <thead className='bg-[gray]'>
                <tr>
                    <th scope='col' className='py-[10px] px-3'> Order ID </th>
                    <th scope='col'> Status </th>
                    <th scope='col'> Transaction ID </th>
                    <th scope='col'> Refund date </th>
                    <th scope='col'> Order Amount </th>
                </tr>
            </thead>

            <tbody>
                {refunds?.map((i) => {
                    return (
                            <tr> 
                                <td className='px-3 py-[14px] text-[#146eb4] '>  #{i.orderId} </td>
                                <td className='px-3 py-[14px] flex items-center gap-2'> 
                                  <div data-state = {i.status === 'Successful' ? "Successful" : "Processing" }
                                  className='data-[state=Successful]:bg-[#17b31b] w-[10px] h-[10px] rounded-full flex  bg-slate-400' > 
                                  </div>
                                  
                                  <span> {i?.status} </span>
                                </td>

                                <td className='px-3 py-[14px]'> {i?.transactionID} </td>

                                <td className='px-3 py-[14px]'>  {i?.refundDate}</td>

                                <td className='px-3 py-[14px]'>  {i?.orderAmount} </td>
                            </tr>  
                    )
                }) }
            </tbody>

        </table>
    </>
  )
}

export default RefundTable