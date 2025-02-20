import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-[90vh] w-full flex items-center justify-center'>
        <div className='flex flex-col gap-4 justify-center items-center h-[50%] w-[40%]'>
            <h1 className='text-9xl'>404</h1>
            <h3 className='text-2xl'>Oops, This Page Not Found!</h3>
            <Link to="/" >
            <button className='mt-10 px-10 py-3 bg-[#120492] text-white rounded hover:bg-black ease-in-out duration-250'>Go Back Home</button>
            </Link>
        </div>
    </div>
  )
}

export default PageNotFound