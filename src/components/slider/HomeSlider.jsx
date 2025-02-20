import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const itPositions = [
    "Frontend Developer",
    "Data Scientist",
    "Backend Developer",
    "DevOps Engineer",
    "Full Stack Developer",
    "Data Engineer",
    "Cloud Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Cybersecurity Analyst",
    "Database Administrator",
    "Network Engineer",
    "System Administrator",
    "Mobile App Developer",
    "Software Engineer",
    "UI/UX Designer",
    "IT Support Specialist",
    "QA Engineer",
    "Business Analyst",
    "IT Project Manager",
    "Blockchain Developer",
    "IoT Developer",
    "Product Manager",
    "Solutions Architect",
    "Information Security Analyst"
  ];


const HomeSlider = () => {
  return (
    <div className='mt-9 w-[50%]'>
    <p className='mb-2 ml-10 flex items-center gap-3 font-semibold'>Scroll for more <span><FaArrowRightLong /></span></p>
    <div className='flex overflow-x-auto whitespace-nowrap gap-10 py-2 px-4 no-scrollbar scroll-smooth'>
        {
            itPositions.map((position,index)=>(
                <div key={index} className='py-3 px-6 rounded-lg bg-white shadow-custom hover:bg-gray-300'>
                    <p className='cursor-pointer'>{position}</p>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default HomeSlider