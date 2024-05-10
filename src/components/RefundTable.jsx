import React from 'react'
import { refunds } from '../data/TableData'

const RefundTable = () => {
  return (
    <>
        <table> 
            <thead>
                <tr>
                    <th> Order ID </th>
                    <th> Status </th>
                    <th> Transaction ID </th>
                    <th> Refund date </th>
                    <th> Order Amount </th>
                </tr>
            </thead>

            <tbody>
                {refunds?.map((i) => {
                    return (
                            <tr> 
                                <td>  #{i.orderId} </td>
                                <td> {i?.status} </td>

                                <td> {i?.transactionID} </td>

                                <td>  {i?.refundDate}</td>

                                <td>  {i?.orderAmount} </td>
                            </tr>  
                    )
                }) }
            </tbody>

        </table>
    </>
  )
}

export default RefundTable