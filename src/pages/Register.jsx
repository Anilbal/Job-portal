import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
    <form action="" className='shadow-custom bg-white flex flex-col h-[65vh] w-[35%] p-10 gap-2 rounded-md'>
        <h2 className='text-center mb-5 text-xl'>Register Here</h2>
        <label htmlFor="username">Username :</label>
        <input type="text" name='username' id='username' placeholder='Username' className='border border-gray-400 p-2 rounded'/>
        <label htmlFor="email">Email :</label>
        <input type="text" name='email' id='email' placeholder='Email' className='border border-gray-400 p-2 rounded'/>
        <label htmlFor="password">Password :</label>
        <input type="text" name='password' id='password' placeholder='Password' className='border border-gray-400 p-2 rounded'/>
        <button className='bg-[#120492] p-2 text-white mt-5 rounded hover:bg-black ease-in-out duration-250'>Register</button>
        <div className='flex mt-3 justify-center'>
            <p className='text-[14px] text-end'>Already have an account? 
            <Link to="/login">
            <span className=' hover:text-red-600 cursor-pointer underline ml-1'>Login here</span>
            </Link>
            </p>
        </div>
    </form>
</div>
  )
}

export default Register