
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
   <div className='flex flex-row  w-full h-full'> 
    <div className='w-[15%] bg-[#1E2640] text-white'> <Sidebar /> </div>
    <div className='w-[85%] bg-[#FAFAFA]'>
        <Navbar />
      <Dashboard />
    </div>
   </div>
  )
}

export default App
