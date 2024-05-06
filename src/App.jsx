
import './App.css'
import Navbar from './Navbar'
import Second from './Second'

function App() {

  return (
   <div className='flex flex-row  w-full '> 
    <div className='w-[0%] md:w-[18%]  bg-[#1E2640] h-[100vh]  text-white sticky left-0 top-0'>  
      {/* sidebar 
      sidebar 
      sidebar 
      sidebar 
      sidebar 
      sidebar 
      sidebar 
      sidebar  */}
    </div>
    <div className='w-full  md:w-[82%] bg-[#FAFAFA]'>
           <Navbar />
           <Second />
    </div>
   </div>
  )
}

export default App
