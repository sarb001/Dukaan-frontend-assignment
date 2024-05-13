import React from 'react'
import { AnalyticsIcon, AppearanceIcon, ArrowDown, AudienceIcon, CancelNow, DeliveryIcon, DiscountIcon, HomeIcon, MarketingSpeakerIcon, OrderIcon, PayoutIcon , PluginIcon, ProductIcon } from '../../public/assests/Allicons'

const Sidebar = ({openmenu,setmenuopen}) => {

  const navitems = [
    { to: '#', icon: <HomeIcon />, label: 'Home' },
    { to: '#', icon: <OrderIcon />, label: 'Orders' },
    { to: '#', icon: <ProductIcon  />, label: 'Products' },
    { to: '#', icon: <DeliveryIcon  />, label: 'Delivery' },
    { to: '#', icon: <MarketingSpeakerIcon />, label: 'Marketing' },
    { to: '#', icon: <AnalyticsIcon  />, label: 'Analytics' },
    { to: '#', icon: <PayoutIcon  />, label: 'Payouts' },
    { to: '#', icon: <DiscountIcon />, label: 'Discounts' },
    { to: '#', icon: <AudienceIcon  />, label: 'Audience' },
    { to: '#', icon: <AppearanceIcon />, label: 'Appearance' },
    { to: '#', icon: <PluginIcon />, label: 'Plugins' },
  ]

  return (

    <>
   
    <div className={`${openmenu ? "block" : "hidden" } tablet:block`}>

      <div className = {` h-[100vh] absolute left-0 min-w-48 top-0    text-white bg-[#1e2640] tablet:fixed
      gap-6  py-4 px-[10px] `}>
        
          <div className='h-[85vh]'>

            <div className='top-nav flex gap-6 flex-col'> 

              <div className='main flex gap-3 w-[192px]'>  

                  <div>
                    <img src = "/assests/nishyanpng.png" className='w-10 h-10 rounded' /> 
                  </div>
                  
                  <div className='flex flex-col w-[108px] '>
                      <div> Nishyan </div> 
                      <div className='text-[13px] font-normal'> Visit store </div>
                  </div>

                  <div className='flex justify-center items-center'>
                    <ArrowDown />
                  </div>

              </div>

              <div className='pages'>  
                      {navitems?.map((i) => {
                        return (
                          <div className='flex w-[208px] px-4 py-2 gap-3'>
                            <div> {i?.icon} </div>
                            <div> {i?.label} </div>
                          </div>
                        )
                      })}
              </div>

            </div>

          </div>

          <div className='bottom-nav bg-[#353C53] w-[192px] rounded '> 

            <div className='flex h-[54px] gap-3 py-2 px-3'>

              <div className='w-9 h-9 gap-3 rounded bg-[#ffffff1a] flex justify-center items-center'>  
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z" fill="white"/>
                  </svg>
              </div>

              <div className='flex flex-col gap-[2px] '>
                <span className='text-[13px]'> Available credits </span>
                <span className='text-base font-medium'> 222.10 </span>
              </div>

            </div>
          </div>
      </div>

      {openmenu && (
        <>
          <div  
          onClick={() => setmenuopen(!openmenu)}
          className = '  tablet:hidden relative  flex justify-center text-black top-2 left-64 w-8 h-[4vh] p-1 bg-[#edf0f7]  z-10 rounded-[50%]'>
            <CancelNow />
          </div>
        </>
      )}

    </div>
    </>
  )
}

export default Sidebar