
import './App.css'
import { Analytics, Appearance, Audience, CancelButton, Delivery, Discounts, Downarrow, Home, MagnifyingGlass, Marketing, Orders, Payouts, Plugins, Products  } from '../public/assests/icons'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function App() {
  
   const [menubutton,setmenubutton] = useState(false);

  return (
        <>
          <div className = ' grid grid-rows-[auto_minmax(300px,_1fr)]  tablet:grid tablet:grid-cols-[224px_minmax(300px,_1fr)]'>
            <div> 
               <Sidebar  
               menubutton = {menubutton}
               setmenubutton = {setmenubutton} /> 
            </div> 
            <div> 
               <Header   
                  setmenubutton = {setmenubutton} 
                  menubutton = {menubutton}
             />   
            </div>     
          </div>
        </>


  )
}

export default App