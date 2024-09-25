import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-16 w-full flex items-center justify-between px-16'>
        <h2 className='cursor-pointer text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>JobPortal</h2>
        <div className='flex items-center justify-center gap-10'>
            <ul className='flex list-none gap-3'>
                <li className='cursor-pointer font-medium text-[#120492]'>Home</li>
                <li className='cursor-pointer font-medium text-[#120492]'>Jobs</li>
                <li className='cursor-pointer font-medium text-[#120492]'>Browse</li>
            </ul>
            <img src="../profile.jpg" alt="User Profile" className='h-9 w-9 rounded-full cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar