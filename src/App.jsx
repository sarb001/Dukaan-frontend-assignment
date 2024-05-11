import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {

  const [openmenu,setmenuopen] = useState(false);

  return (
        <div className = ' grid grid-rows-[auto_minmax(300px,_1fr)] tablet:grid-cols-[224px_minmax(300px,_1fr)]'>
            <div>   <Sidebar
              openmenu = {openmenu} 
              setmenuopen = {setmenuopen}
            />  </div>
            <div>   <Header
            openmenu = {openmenu} 
            setmenuopen = {setmenuopen}
            />  </div>
        </div>
  )
}

export default App