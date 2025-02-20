import React from 'react'
const Jobs = [
    {
      companyName: "TreeLeaf Technology",
      city: "Kathmandu",
      position: "Frontend Developer",
      description: "Develop and maintain user interfaces using React.js. Collaborate with the design and backend team to enhance user experience.",
      requiredPeople: 2,
      jobType: "Full-time",
      salary: "Rs. 60,000",
      experience: "2+ years"
    },
    {
      companyName: "AmSoft Pvt. Ltd.",
      city: "Lalitpur",
      position: "Backend Developer",
      description: "Design and implement APIs, handle databases, and ensure server-side logic. Experience in Node.js or Python is preferred.",
      requiredPeople: 3,
      jobType: "Part-time",
      salary: "Rs. 35,000",
      experience: "1-2 years"
    },
    {
      companyName: "Anydone",
      city: "Bhaktapur",
      position: "Full Stack Developer",
      description: "Work on both frontend and backend. Must be proficient in JavaScript frameworks like React, Angular, and Node.js.",
      requiredPeople: 1,
      jobType: "Full-time",
      salary: "Rs. 70,000",
      experience: "3+ years"
    },
    {
      companyName: "Ikigai Tech",
      city: "Pokhara",
      position: "Data Scientist",
      description: "Analyze large datasets to uncover insights and build predictive models. Proficiency in Python, R, and machine learning required.",
      requiredPeople: 1,
      jobType: "Full-time",
      salary: "Rs. 80,000",
      experience: "2+ years"
    },
    {
      companyName: "Easy Access Pvt. Ltd.",
      city: "Biratnagar",
      position: "Mobile App Developer",
      description: "Develop mobile applications for Android and iOS platforms. Experience with Flutter or React Native is a plus.",
      requiredPeople: 2,
      jobType: "Internship",
      salary: "Rs. 15,000",
      experience: "No"
    },
    {
      companyName: "YCO Pvt. Ltd.",
      city: "Kathmandu",
      position: "DevOps Engineer",
      description: "Manage infrastructure, automate deployment pipelines, and ensure scalability of systems.",
      requiredPeople: 1,
      jobType: "Full-time",
      salary: "Rs. 75,000",
      experience: "2+ years"
    },
    {
      companyName: "Arniko College",
      city: "Lalitpur",
      position: "IT Support",
      description: "Provide technical support to staff and maintain network infrastructure.",
      requiredPeople: 3,
      jobType: "Part-time",
      salary: "Rs. 25,000",
      experience: "1+ year"
    },
    {
      companyName: "Nebira Pvt. Ltd.",
      city: "Bhaktapur",
      position: "Software Tester",
      description: "Test applications, identify bugs, and ensure quality assurance. Experience with manual and automated testing is a plus.",
      requiredPeople: 2,
      jobType: "Internship",
      salary: "Rs. 20,000",
      experience: "No"
    }
  ];

const RightSidebar = () => {
  return (
    <div className='w-4/5 px-8 py-4 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
            <p className='flex gap-2'>Jobs: <span className='text-red-600'>All</span></p>
            <div className='flex gap-2'>
                <label htmlFor="category">Filtered by:</label>
                <select name="category" id="category" className='outline-none'>
                    <option value="category">All</option>
                    <option value="category">Latest</option>
                    <option value="category">Most viewed</option>
                    <option value="category">Experience</option>
                </select>
            </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-5'>
            {Jobs.map((job,i)=>(
                <div key={i} className='p-5 flex flex-col gap-2 rounded-md shadow-custom'>
                    <h4 className='font-bold text-[#120492] text-xl'>{job.companyName}</h4>
                    <p className='text-[12px] font-medium'>{job.city}</p>
                    <h2 className='font-bold text-xl '>{job.position}</h2>
                    <p>{job.description}</p>
                        <ul className='flex list-none gap-3 mt-4'>
                            <li className='text-[#120492] border border-gray-500 px-2 py-1 rounded-xl text-center text-[13px] font-medium'>{job.requiredPeople} Positions</li>
                            <li className=' text-red-600 border border-gray-500 px-2 py-1 rounded-xl text-center text-[13px] font-medium'>{job.jobType}</li>
                            <li className='text-[#120492] border border-gray-500 px-2 py-1 rounded-xl text-center text-[13px] font-medium'>{job.salary}</li>
                        </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RightSidebar