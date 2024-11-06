import React from 'react'
import { useRef } from 'react'
import menu from '../assets/menu.png'
import cancel from '../assets/cancel.png'
import {Link, ScrollLink} from 'react-scroll'


function Navbar() {
    const menuRef = useRef()

    const openMenu = ()=>{
      menuRef.current.style.right="0";
    }
    const closeMenu = ()=>{
      menuRef.current.style.right="-350px"
    }
  return (
    <>
     <nav className='flex justify-between py-2 bg-[#161513] w-full px-1'>
      <div>
          <h1 className='text-3xl font-bold font-sans text-white cursor-default'>IzhaN</h1>
      </div>
    <div className='md:hidden'  >
         <img  className='h-6 md:hidden  ' onClick={openMenu}  src={menu} />
    </div>
    <div  className='hidden md:block'>
      <ul className='md:flex md:flex-row gap-8 font-semibold pt-2 text-white font-sans'>
      <li> <Link className="cursor-pointer" to='home' spy={true} offset={10} duration={500}>Home</Link> </li>
        <li><Link className="cursor-pointer" to='about' spy={true} offset={10} duration={500}>About Me</Link></li>
        <li><Link className="cursor-pointer" to='work' spy={true} offset={10} duration={500}>Portfolio</Link></li>
        <li><Link className="cursor-pointer" to='contact' spy={true} offset={10} duration={500}>Contact</Link></li>
      </ul>
    </div>
    <div ref={menuRef} className='fixed right-[-350px] bg-[#1f0016] text-white h-full  top-0 w-52 duration-200'>
      <img className='p-3 ' src={cancel} onClick={closeMenu}/>
      <ul className='flex flex-col gap-5 p-3 font-semibold font-sans'>
        <li><Link className="cursor-pointer" to='home' spy={true} offset={10} duration={500}>Home</Link></li>
        <li><Link className="cursor-pointer" to='home' spy={true} offset={10} duration={500}>Home</Link></li>
        <li><Link className="cursor-pointer" to='work' spy={true} offset={10} duration={500}>Portfolio</Link></li>
        <li><Link className="cursor-pointer" to='contact' spy={true} offset={10} duration={500}>Contact</Link></li>
      </ul>
    </div>
    <div className='hidden md:block'>
    <Link className="cursor-pointer" to='contact' spy={true} offset={10} duration={500}> <button className='font-semibold bg-gradient-to-r  from-purple-500 to-pink-500 p-3 rounded-3xl w-40   text-white hidden md:block duration-150 hover:ease-out hover:scale-110'>
        Connect with me
      </button></Link>
    </div>

     </nav>
    </>
  )
}

export default Navbar