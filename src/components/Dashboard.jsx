import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbArrowsDoubleNwSe } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Dashboard = () => {
  return (
    <div>
        <div className='px-8 pt-9 gap-8'>

          <div className='flex flex-col gap-6'>

            <div className='flex justify-between gap-6 '>
              <div className='text-xl font-[500px]'> Overview </div>  
              <div className='flex justify-center gap-4 w-[137px] h-9 rounded-md bg-[#FFFFFF] items-center '>
                  <button> Last Month </button>
                  <span> <IoIosArrowDown /> </span>
              </div>
            </div>

            <div className='flex gap-5'>
            <div className='w-[556px] rounded-lg h-[118px] flex flex-col p-5 gap-4 bg-[#ffffff]'>
                <div> Online Orders </div>
                <div className='text-[32px] font-[500px] '> 231 </div>
            </div>

            <div className='w-[556px] rounded-lg h-[118px] flex flex-col gap-4 p-5 bg-[#ffffff]'>
                <div> Amount recieved </div>
                <div className=' flex items-center text-[32px] font-[500px] text-[#1A181E]'> 
                  <div> <MdCurrencyRupee/> </div>
                  <div>  23,92,312.19 </div>
                </div>
            </div>

            </div>

            <div className='flex flex-col justify-between gap-5 '>
          
                <div>  Transactions | This Month </div>


                  {/*  whole order id  section */}
                <div className='flex flex-col  pb-6 pt-3 gap-3'>

                {/*  search by order id  */}
                    <div>
                      <div className='flex flex-row justify-between'>
                              <div className='flex gap-2 py-1.5  w-[248px] px-[9px] bg-[#F2F2F2] rounded-md items-center '> 
                                <HiMagnifyingGlass />
                                <input className='bg-[#F2F2F2] border-none' type= "text"  placeholder = 'Search by order ID....' />
                            </div>

                            <div className='flex flex-row gap-4 '>
                            <div className='flex justify-center gap-4 w-[79px] h-9 rounded-md  items-center border-2 '>
                                <button> Sort </button>
                                <TbArrowsDoubleNwSe className='rotate-45' />
                            </div>

                            <div>
                              <button className='flex justify-center gap-4 w-9 h-9 rounded-md  items-center border-[#D9D9D9] border-2 '> <FiDownload /> </button>
                            </div>
                            </div>
                      </div>
                    </div>

                  <div className='flex flex-col gap-6  '>
              
                    {/* whole table  */}

                      <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 py-2.5  px-3 ">
                                        
                                        <thead class="text-xs text-gray-700 bg-[#F2F2F2]">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Order ID 
                                                </th>
                                                <th scope="col" class="flex flex-row items-center px-6 py-3">
                                                    <div> Order date </div> 
                                                    <div>  <TiArrowSortedDown />  </div> 
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Order amount 
                                                </th>
                                                <th scope="col" className =" flex items-center  gap-1  px-6 py-3">
                                                  <div> Transaction fees </div>
                                                  <div> <AiOutlineExclamationCircle className='w-3.5 h-3.5' /> </div>
                                                </th>
                                            </tr>
                                      
                                        </thead>

                                            <tbody>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700  ">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td class = "px-6 py-4">
                                                        ₹ 1,278.23  
                                                    </td>
                                                    <td class = "px-6 py-4 w-[246px]">
                                                        ₹ 22 
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td className = " px-6 py-4">
                                                      ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      ₹ 22
                                                    </td>
                                                </tr>

                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-blue-500 whitespace-nowrap dark:text-white">
                                                        #281209
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        7 July ,2023
                                                    </td>
                                                    <td className =" flex items-center px-6 py-4">
                                                      <div> <MdCurrencyRupee/> </div>
                                                      <div> 1,278.23  </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        ₹ 22
                                                    </td>
                                                </tr> 

                                            </tbody>
                                    </table>
                      </div>
                    

                      {/*  pagination  div  */}
                      <div className='w-full flex justify-center '>
                      
                        <div className = 'w-[610px] h-8 gap-6 flex flex-row justify-center items-center '>
                
                            <div className='w-[100px] border border-[#D9D9D9] flex gap-1.5 items-center rounded py-1.5 pl-1.5 pr-1'>
                              <div> <IoIosArrowBack /> </div>
                              <div> Previous </div>
                            </div>

                            <div className='w-[348px] flex flex-rowh-7  gap-2 '>
                              <div className='w-7 h-7 p-0.5 rounded'> 1 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> ... </div>
                              <div className='w-7 h-7 p-0.5 rounded bg-[#146EB4]'> 10 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 11 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 12 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 13 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 14 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 15 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 16 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 17 </div>
                              <div className='w-7 h-7 p-0.5 rounded'> 18 </div>
                            </div>

                            <div className='w-[74px] border border-[#D9D9D9] flex justify-center gap-1.5 items-center rounded py-1.5 pl-1.5 pr-1'>
                              <div> Next </div>
                              <div> <IoIosArrowForward /> </div>
                            </div>

                        </div>
    
                      </div>
                  </div>

                </div>

          </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard