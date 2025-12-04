import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import About1 from './components/About1'
import Testimonials from './components/Testimonials'
import Testimonials1 from './components/Repsent'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Repsent from './components/Repsent'

const App = () => {
  return (
    <div >
       <Navbar/>
       <Hero/>
       <Menu/>
       <About/>
       <About1/>
       <Testimonials/>
       <Repsent/> 
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App;
