import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
        <div className = 'bg-gray-700 text-white'>
            <div>   <Sidebar />  </div>
            <div>   <Header />  </div>
        </div>
  )
}

export default App