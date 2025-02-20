import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
        <form action="" className='shadow-custom bg-white flex flex-col h-[52vh] w-[35%] p-10 gap-2 rounded-md'>
            <h2 className='text-center mb-5 text-xl'>Login to your account</h2>
            <label htmlFor="email">Email :</label>
            <input type="text" name='email' id='email' placeholder='Email' className='border border-gray-400 p-2 rounded'/>
            <label htmlFor="password">Password :</label>
            <input type="text" name='password' id='password' placeholder='Password' className='border border-gray-400 p-2 rounded'/>
            <button className='bg-[#120492] p-2 text-white mt-5 rounded hover:bg-black ease-in-out duration-250'>Login</button>
            <div className='flex justify-between mt-3'>
                <p className='text-[14px] cursor-pointer hover:text-red-600'>Forget password?</p>
                <p className='text-[14px]'>Doesn't have an account? 
                <Link to="/register">
                <span className=' hover:text-red-600 cursor-pointer underline ml-1'>Register here</span>
                </Link>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login