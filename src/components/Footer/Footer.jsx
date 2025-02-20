import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='border border-gray-200 flex items-center justify-between py-5 px-20 shadow-custom'>
        <Link to="/">
        <h2 className='cursor-pointer text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>JobPORTAL</h2>
        </Link>
        <p>Copyright &copy; JobPortal 2024</p>
        <ul className='flex items-center gap-5'>
            <Link to="https://www.facebook.com/" target='_blank'>
            <li className='text-[#120492] text-2xl'><FaFacebook /></li>
            </Link>
            <Link to="https://www.instagram.com/" target='_blank'>
            <li className='text-[#120492] text-2xl'><FaInstagramSquare /></li>
            </Link>
            <Link to="https://www.viber.com/en/" target='_blank'>
            <li className='text-[#120492] text-2xl'><FaViber /></li>
            </Link>
            <Link to="https://np.linkedin.com/" target='_blank'>
            <li className='text-[#120492] text-2xl'><FaLinkedin /></li>
            </Link>
            <Link to="https://www.youtube.com/" target='_blank'>
            <li className='text-[#120492] text-2xl'><FaYoutube /></li>
            </Link>
        </ul>
    </div>
  )
}

export default Footer