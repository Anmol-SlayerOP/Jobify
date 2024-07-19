import React from 'react'
import { Link } from 'react-router-dom'

const IconCard = ({image, heading, text, link, linkName = "Start Now"}) => {
  return (
    <div className='md:w-[30%] py-10 px-4 bg-white border-[1px] border-[#ecedf2] rounded-xl flex flex-col items-center justify-center space-y-4 '>
        <div className='bg-gray-200 p-4 rounded'>
            {image}
        </div>
        <h2 className='text-2xl font-bold'>{heading}</h2>
        <p className='text-lg opacity-70'>{text}</p>
        <Link to={link} className='rounded-2xl text-[#0071DC] px-4 py-1 border-[1px] border-[#0071DC] hover:bg-[#0071DC] hover:text-white transition-colors duration-100 ease-linear'>
            {linkName}
        </Link>
    </div>
  )
}

export default IconCard