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
    
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
