import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogOut } from "react-icons/io";


const Navbar = () => {
  const [toggle,setToggle]=useState(false)

  const handleClick=()=>{
    setToggle(prev=>!prev)
  }

  console.log(toggle)
  return (
    <div className=' h-16 w-full flex items-center justify-between px-16'>
        <h2 className='cursor-pointer text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>JobPORTAL</h2>
        <div className='flex items-center justify-center gap-16'>
            <ul className='flex list-none gap-5'>
                <Link to='/'>
                <li className='cursor-pointer font-medium text-[#120492]'>Home</li>
                </Link>
                <Link to='/jobs'>
                <li className='cursor-pointer font-medium text-[#120492]'>Jobs</li>
                </Link>
                <Link to="/browse">
                <li className='cursor-pointer font-medium text-[#120492]'>Browse</li>
                </Link>
            </ul>
            <div className='relative'>
            <img src="../profile.jpg" alt="User Profile" className='h-9 w-9 rounded-full cursor-pointer' onClick={handleClick}/>
            {
              toggle?
              <ul className='absolute bg-white z-10 right-[-30px] top-14 rounded-md shadow-custom'>
              <li className='py-2 px-10 text-[16px]'>Username</li>
              <Link to='/login'>
              <li className='py-2 px-10 text-[16px] cursor-pointer'>Profile</li>
              </Link>
              <hr className='border border-gray-200'/>
              <li className='py-2 px-10 text-[16px] cursor-pointer flex items-center gap-1'>Logout <IoMdLogOut /></li>
            </ul>:
            <></>
            }
            </div>

        </div>
    </div>
  )
}

export default Navbar