import React from 'react'
import profile from '../assets/izhan2.jpeg'

function About() {
  return (
    <div id='about' className='flex flex-col items-center justify-center font-sans py-4 bg-[#161513] text-white w-full'>
      <h1 className='text-5xl font-bold p-2 cursor-default' >
        About me
      </h1>
      <div className='flex justify-center items-center p-3 gap-10 '>
        <div className='hidden md:block'>
          <img className='h-72 object-cover w-64 rounded-md ' src={profile}/>
        </div>
        <div className='min-[396px]:w-96 min-[337px]:w-80 w-60 flex flex-col item-center justify-center md:w-1/2 cursor-default'>
          <p>
          Aspiring software engineer and automotive engineering student with a passion for merging technology and creativity to solve real-world problems. Currently in my third year at NED University, specializing in Automotive Engineering, I’m also dedicated to developing my skills in full-stack web development using the MERN stack. Through coursework, personal projects, and freelance training from DigiSkills, I am constantly pushing my limits to deliver innovative digital solutions.<br/><br/>
          
          My passion for Web Development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
          </p>
          <div className='flex items-center gap-4 pt-4 duration-300 hover:scale-105'>
            <h1 className='font-semibold'> Node.js </h1> <hr className='w-64 h-1 bg-gradient-to-r  from-purple-500 to-pink-500 outline-none border-none rounded-md'/>

          </div>
          <div className='flex items-center gap-4 pt-4 duration-300 hover:scale-105'>
            <h1 className='font-semibold'> Express.js </h1> <hr className='w-64 h-1 bg-gradient-to-r  from-purple-500 to-pink-500 outline-none border-none rounded-md'/>

          </div>
          <div className='flex items-center md:gap-10 gap-11 pt-3 duration-300 hover:scale-105'>
            <h1 className='font-semibold'> React JS </h1> <hr className='w-80 h-1 bg-gradient-to-r  from-purple-500 to-pink-500 outline-none border-none rounded-md'/>
            
          </div>
          <div className='flex items-center gap-6 pt-3 duration-300 hover:scale-105 '>
            <h1 className='pr-1 font-semibold'> JavaScript </h1> <hr className='w-72 h-1 bg-gradient-to-r  from-purple-500 to-pink-500 outline-none border-none rounded-md'/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About