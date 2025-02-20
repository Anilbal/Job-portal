import React from 'react'
const cities = ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar", "Birgunj", "Dharan", "Butwal", "Janakpur", "Hetauda"];
const Jobs = [
    "Software Developer",
    "System Administrator",
    "Data Analyst",
    "DevOps Engineer",
    "Cybersecurity Analyst",
    "Database Administrator",
    "Cloud Engineer",
    "IT Support Specialist",
    "Network Engineer",
    "Full Stack Developer"
  ];
const experiences=[
    "1 year",
    "1-2 years",
    "2 years",
    "2-3 years",
    "No experience"
]

const LeftSidebar = () => {
  return (
    <div className='w-1/5 px-6 py-4 flex flex-col gap-2 shadow-custom h-[110vh]'>
        <h4 className='font-bold tracking-wide text-xl'>Filter Jobs</h4>
        <hr className='border border-gray-300'/>
        <div>
            <p className='text-[17px] font-semibold'>Location</p>
            <ul>
                {
                    cities.map((city,index)=>(
                    <li key={index} className='flex items-center gap-1.5'>
                        <input type="radio" name="cities" id={city} value={city}/>
                        <label htmlFor={city}>{city}</label>
                    </li>
                    ))
                }
            </ul>
        </div>
        <div>
            <p className='text-[17px] font-semibold'>Industry</p>
            <ul>
                {
                    Jobs.map((job,index)=>(
                    <li key={index} className='flex items-center gap-1.5'>
                        <input type="radio" name="jobs" id={job} value={job}/>
                        <label htmlFor={job}>{job}</label>
                    </li>
                    ))
                }
            </ul>
        </div>
        <div>
            <p className='text-[17px] font-semibold'>Experience</p>
            <ul>
                {
                    experiences.map((experience,index)=>(
                    <li key={index} className='flex items-center gap-1.5'>
                        <input type="radio" name="experiences" id={experience} value={experience}/>
                        <label htmlFor={experience}>{experience}</label>
                    </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default LeftSidebar