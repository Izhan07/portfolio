import { useRef, useState } from 'react'
import menu from './assets/menu.png'
import cancel from './assets/cancel.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
    <div className='  bg-[#161513] px-1 '>
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
