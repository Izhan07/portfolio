import React from 'react'

function Footer() {
  return (
    <div className='min-[380px]:py-6  text-white bg-[#161513] w-full'>
       
        <hr className='w-100vw '/>
        <div className='flex md:flex-row flex-col justify-between py-2 '>
            <div className=' cursor-default'>
                <p>© 2024 Izhan Ahmed. All rights reserved.</p>
            </div>
            <div className='flex gap-4  cursor-default'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer