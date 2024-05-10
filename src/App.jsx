import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
        <div className = ' grid grid-rows-[auto_minmax(300px,_1fr)] tablet:grid-cols-[224px_minmax(300px,_1fr)]'>
            <div>   <Sidebar />  </div>
            <div>   <Header />  </div>
        </div>
  )
}

export default App