import React from 'react'

function Footer() {
  return (
    <div className='min-[380px]:p-6 pl-3 pr-3 text-white bg-[#161513]'>
        <div className='min-[380px]:w-96 w-80 p-3'>
            <h1 className='font-bold text-4xl p-2'>Izhan</h1>
            <p className='min-[380px]:p-2 min-[380px]:text-lg pl-0 text-sm'>I am a frontend developer from, Pakistan.</p>
        </div>
        <hr className='w-100vw '/>
        <div className='flex md:flex-row flex-col justify-between p-2 '>
            <div className=''>
                <p>© 2024 Izhan Ahmed. All rights reserved.</p>
            </div>
            <div className='flex gap-4'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer