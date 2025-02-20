import React from 'react'
import { IoSearch } from "react-icons/io5";
import {HomeSlider} from "../index"
const Jobs = [
  "Frontend Developer",
  "Data Scientist",
  "Backend Developer",
  "DevOps Engineer",
  "Data Engineer",
  "Cloud Engineer",
  "System Administrator",
  "Mobile App Developer",
  "Software Engineer",
  "UI/UX Designer",
  "IT Support Specialist",
  "QA Engineer",
];
const Hero = () => {
  return (
    <div className='w-full h-[70vh] flex flex-col gap-5 items-center justify-center'>
        <div className='bg-[#F2F2F2] h-10 w-52 flex items-center justify-center rounded-md'>
            <p className='text-red-700 font-medium'>No.1 job portal website</p>
        </div>
        <div className='flex flex-col text-center gap-2 mt-5'>
            <h2 className='text-4xl font-extrabold uppercase'>Search, Apply &</h2>
            <h2 className='text-4xl font-extrabold uppercase'>Get Your <span className='text-[#120492]'>Dream Jobs</span></h2>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, quis!</p>
        <div className=' flex h-10 w-[30rem] rounded-xl overflow-hidden bg-white shadow-custom mt-5'>
            <input type="text" placeholder='Find Your dream job' name='jobs' list='jobs' className='border-none outline-none h-[100%] w-[27rem] px-5'/>
            <datalist id='jobs'>
              {
                Jobs.map((job)=>(
                  <option value={job} key={job}></option>
                ))
              }
            </datalist>
            <div className='h-full w-[3rem] flex items-center justify-center bg-[#120492] cursor-pointer shadow-custom' >
            <IoSearch className='text-2xl text-white'/>
            </div>
        </div>
        <HomeSlider/>
    </div>
  )
}

export default Hero