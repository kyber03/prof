import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import Mywork from './Components/MyWork/Mywork'


const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Service/>
       <Mywork/>
    </div>
  )
}

export default App
