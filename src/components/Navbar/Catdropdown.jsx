import React from 'react';
import { Link } from 'react-router-dom';


const Catdropdown = ({isOpen}) => {

  return (
    <div className="relative ">

      {isOpen && (
        <div className="absolute top-3 w-[230px] px-6 py-3 bg-white shadow-md z-10 rounded-md">
          <Link to='/jobs?query=art-design'><p className='font-semibold hover:text-blue my-2'>Art & Design</p></Link>
          <Link to='/jobs/?query=health-fitness'><p className='font-semibold hover:text-blue my-2'>Health & Fitness</p></Link>
          <Link to='/jobs/?query=finance-business'><p className='font-semibold hover:text-blue my-2'>Finance & Business</p></Link>
          <Link to='/jobs/?query=art-music'><p className='font-semibold hover:text-blue my-2'>Art & Music</p></Link>
          <Link to='/jobs/?query=marketing'><p className='font-semibold hover:text-blue my-2'>Marketing</p></Link>
          <Link to='/jobs/?query=photography'><p className='font-semibold hover:text-blue my-2'>Teaching & Study</p></Link>
          <Link to='/jobs/?query=teaching-study'><p className='font-semibold hover:text-blue my-2'>Photography</p></Link>
          <Link to='/jobs/?query=it-management'><p className='font-semibold hover:text-blue my-2'>It Management</p></Link>
        </div>
      )}
    </div>
  );
};

export default Catdropdown;