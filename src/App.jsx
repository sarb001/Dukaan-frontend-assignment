
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
   <div className='flex flex-row  w-full'> 
    <div className='w-[18%] bg-[#1E2640] h-[100vh]  text-white sticky left-0 top-0'> <Sidebar /> </div>
    <div className='w-[82%] bg-[#FAFAFA]'>
        <Navbar />
      <Dashboard />
    </div>
   </div>
  )
}

export default App
