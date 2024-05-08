
import './App.css'
import Navbar from './Navbar'
import Second from './Second'
import { Analytics, Appearance, Audience, CancelButton, Delivery, Discounts, Downarrow, Home, MagnifyingGlass, Marketing, Orders, Payouts, Plugins, Products  } from '../public/assests/icons'
import { useState } from 'react'

function App() {

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

   const [menubutton,setmenubutton] = useState(false);

  return (
   <div className='flex flex-row  w-full'> 
              {/*  whole side-bar  */}
               
    <div className =  {` ${menubutton ? "block" : "hidden"} min-w-48 
     z-30 fixed p-4
     tablet:block tablet:min-w-56  tablet:p-4 bg-[#1E2640] h-[100vh]  text-white `}>  

            <div className='tablet:flex tablet:gap-3 tablet:py-[2px] tablet:px-[1px]'>

                <div>
                  <img src = "/public/nishyan.svg"  alt = "nishyam" />
                </div>

                <div className='tablet:flex  tablet:flex-col tablet:grow'>
               
                    <span> Nishyan </span>
                    <span className='text-xs'> Visit store </span>
                  
                </div>

                <div className='tablet:flex tablet:justify-center tablet:items-center'>
                    <span className = 'text-white'> <Downarrow />  </span>
                </div>

            </div>

            {/* All Icons */}
            <div className='tablet:mt-4'>
               {links?.map((i) => {
                 return (
                  <div className='tablet:flex tablet:flex-row tablet:px-4 tablet:py-2'>
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


      <div className = 'z-0 w-full tablet:grow  bg-[#FAFAFA]'>
            <div className='p-2 grid grid-cols-2 justify-between bg-[#ffff] border-b-[1px] border-[#d9d9d9] rounded-xl '>

              <div className='flex items-center gap-5'>

                    {/* button hamburger */}
                  <div className='tablet:hidden relative' onClick={() => setmenubutton(!menubutton)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                  </div>

                  <div className='text-xl font-semibold '> Payouts  </div> 

                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                      </svg>
                  </div>

                  <div className='text-xs'> How it works  </div> 

                  {/*  input search bar */}
                  <div className='tablet:flex hidden  tablet:p-2 tablet:bg-slate-200 tablet:rounded-tablet tablet:grow '>
                    <span> <MagnifyingGlass />  </span>
                    <input  type = "text" placeholder='Search Features' className='tablet:bg-slate-200' />
                  </div>

              </div>

              <div className='flex justify-end gap-2'>

                  <div className='bg-slate-200 p-2 rounded-full '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                  </div>

                  <div className='bg-slate-200 p-2 rounded-full '>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                      </svg>

                  </div>

                  <div className='bg-slate-200 p-2 rounded-full '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                  </div>

              </div>

        </div>
            <Second />
      </div> 


   </div>
  )
}

export default App
