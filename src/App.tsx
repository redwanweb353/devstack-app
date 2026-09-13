

import Footer from './componants/Footer'
import HeroSection from './componants/HeroSection'
import Navbar from './componants/Navbar'
import Technologies from './componants/Technologies'
import './index.css'
import { Suspense, useState } from 'react'


function App() {

  const getTechnologyPromise = async () => {
    const res = await fetch('/technologyData.json')
    const data = await res.json()
    return data
  }
  const [technologyPromise] = useState(() => getTechnologyPromise())


  return (
    <>
      <div>


        <Navbar />

        <HeroSection></HeroSection>

        <Suspense fallback={<div className='flex min-h-screen items-center justify-center'> <span className="loading loading-lg scale-100 loading-spinner text-secondary"></span></div>}>
          <Technologies technologyPromise={technologyPromise}></Technologies>
        </Suspense>


        <Footer></Footer>



      </div>
    </>
  )
}

export default App
