import React from 'react'
import { Analytics, Appearance, Audience, CancelButton, Delivery, Discounts, Downarrow, Home, Marketing, Nishyamimg, Orders, Payouts, Plugins, Products } from '../public/assests/icons'

const Sidebar = ({setmenubutton,menubutton}) => {

  const links = [
    {  label : 'Home'       , icon : <Home /> , link : '#' },
    {  label : 'Orders'     , icon : <Orders /> , link : '#' },
    {  label : 'Products'   , icon : <Products /> , link : '#' },
    {  label : 'Delivery'   , icon : <Delivery /> , link : '#' },
    {  label : 'Marketings' , icon : <Marketing /> , link : '#' },
    {  label : 'Analytics'  , icon : <Analytics /> , link : '#' },
    {  label : 'Payouts'    , icon : <Payouts /> , link : '#' },
    {  label : 'Discounts'  , icon : <Discounts /> , link : '#' },
    {  label : 'Audience'   , icon : <Audience /> , link : '#' },
    {  label : 'Appearance' , icon : <Appearance /> , link : '#' },
    {  label : 'Plugins'    , icon : <Plugins /> , link : '#' },

  ]

  return (
    <>
         <div className =  {` ${menubutton ? "block" : "hidden"} min-w-48 
          z-30 fixed p-4
          tablet:block tablet:min-w-56  tablet:p-4 bg-[#1E2640] h-[100vh]  text-white `}>  

                 <div className='
                 grid grid-cols-3 gap-3 
                 tablet:flex tablet:gap-3 tablet:py-[2px] tablet:px-[1px]'>

                     <div>
                       <img src = '/public/nishyan.svg'   alt = "nishyam" />
                     </div>

                     <div className='grid tablet:flex  tablet:flex-col tablet:grow'>
                    
                         <span> Nishyan </span>
                         <span className='text-xs'> Visit store </span>
                        
                     </div>

                     <div className='tablet:flex tablet:justify-center tablet:items-center'>
                         <span className = 'text-white'> <Downarrow  />  </span>
                     </div>

                 </div>

                 {/* All Icons */}
                 <div className='mt-12 tablet:mt-4'>
                    {links?.map((i) => {
                      return (
                       <div className='flex flex-row px-4 py-2 nav_link '>
                           {i?.icon}    
                          <span className='tablet:px-4'> {i?.label} </span>
                       </div>
                       )}
                     )}
                 </div>

         </div>

           { menubutton && 
             <div className='tablet:hidden  absolute left-[250px]  bg-black
             z-10 text-blue-600 ' 
             onClick  = {() => setmenubutton(false)}>
                         <CancelButton
                         />
             </div>
           }
    </>
  )
}

export default Sidebar