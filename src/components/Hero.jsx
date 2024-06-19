import React from 'react'
import profile from '../assets/izhan1.jpeg'
import {Link} from 'react-scroll'
import resume from '../assets/Izhan Resume.pdf'

function Hero() {
  return (
    <div id='home' className='p-6 flex justify-center flex-col items-center font-sans text-white bg-[#161513]'>
        <img className='h-64 w-64 object-cover rounded-full p-6 ' src={profile}/>
        <h1 className='font-bold min-[430px]:text-3xl md:text-5xl pt-2 text-xl'> <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>I'm Izhan Ahmed,</span> frontend </h1>
        <h1 className='font-bold min-[430px]:text-3xl md:text-5xl text-xl' >developer based in</h1>
        <h1 className='font-bold min-[430px]:text-3xl md:text-5xl text-xl' > Pakistan.</h1>
        <div className='flex min-[350px]:flex-row flex-col gap-6 p-6'>
          <Link className="cursor-pointer" to='contact' spy={true} offset={10} duration={500}> <button className='font-semibold  bg-gradient-to-r  from-purple-500 to-pink-500 p-3  rounded-3xl w-40  text-white duration-100  hover:border-2 hover:border-white' >Connect with me</button></Link> 
            <a href={resume} download="Resume"><button className='font-semibold p-3 rounded-3xl border-2 border-white w-40 duration-200 hover:border-purple-500'>My resume</button></a>
        </div>
        
    </div>
  )
}

export default Hero