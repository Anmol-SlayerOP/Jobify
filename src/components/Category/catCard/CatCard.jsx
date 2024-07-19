import React from 'react';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { saveIcon } from '../../../assets';

const CatCard = ({ 
  image,
  imgBg = "bg-[#fef2d9]",
  title, 
  allTitle = "Rockstar Games New York",
  location = "Las Vegas, USA",
  duration = "2 Days ago",
  amount = "$23,000 - $25,00",
  amountPer = "month",
  vacancyNum = "2"
}) => {
  return (
    <div className="w-full md:w-1/2 relative rounded-md border-[1px] border-gray-200 md:p-11 px-3 py-8 hover:border-[#0071DC] transition-colors duration-100 ease-linear">
      <div className='flex flex-row space-x-3'>
        <div className={imgBg + " p-3 rounded-md w-16 h-16 grid place-content-center"}>
          {image}
        </div>
        <div>
          <h3 className='text-sm font-semibold text-[#0071DC]'>{allTitle}</h3>
          <Link className='text-lg font-bold'>{title}</Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4 space-y-2 md:space-y-0 mt-2">
            <div className='flex flex-row items-center opacity-70'>
              <BiMap />
              <h3 className='text-xs opacity-70'>{location}</h3>
            </div>
            <div className='flex flex-row items-center opacity-70'>
              <AiOutlineCalendar />
              <h3 className='text-xs opacity-70'>{duration}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm mt-5 space-x-6'>
        <span className='px-4 py-1 rounded-3xl bg-[#e9e7ff] text-[#70befd]'>Full Time</span>
        <span className='px-4 py-1 rounded-3xl bg-[#fef2d9] text-[#faab00]'>Remote</span>
      </div>
      <div className="w-full h-[2px] bg-gray-200 mt-6"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4 space-y-2 md:space-y-0 mt-2">
        <div className='flex flex-row items-center space-x-2'>
          <CiDollar size={25} />
          <h3 className='text-sm'><span className="font-bold">{amount}</span> <span className="opacity-70">/{amountPer}</span></h3>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <AiOutlineUser size={20} />
          <h3 className='text-sm opacity-70'>{vacancyNum} Vacancy</h3>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 md:bottom-48 m-4 p-2 rounded-full bg-gray-200">
        <Link>
          <img src={saveIcon} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default CatCard