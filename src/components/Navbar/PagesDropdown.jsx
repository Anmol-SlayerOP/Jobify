import React from 'react';
import { Link } from 'react-router-dom';


const PagesDropdown = ({pageOpen}) => {

  return (
    <div className="relative ">

      {pageOpen && (
        <div className="absolute top-3 w-[180px] px-6 py-3 bg-white shadow-md z-10 rounded-md">
          <Link to='/jobs'><p className='font-semibold hover:text-blue my-3'>Jobs</p></Link>
          <Link to='/dashboard?category=saved'><p className='font-semibold hover:text-blue my-3'>Dashboard</p></Link>
          <Link to='/dashboard?category=created'><p className='font-semibold hover:text-blue my-3'>My Published Jobs</p></Link>
          <Link to='/dashboard?category=featured'><p className='font-semibold hover:text-blue my-3'>Featured Jobs</p></Link>
          <Link to='/post'><p className='font-semibold hover:text-blue my-3'>Post a Job</p></Link>
          {/* <Link to='/signup'><p className='font-semibold hover:text-blue my-3'>Sign Up</p></Link> */}
          {/* <Link to='/styles'><p className='font-semibold hover:text-blue my-3'>Style Guide</p></Link> */}
          <Link to='*'><p className='font-semibold hover:text-blue my-3'>404 Page</p></Link>
        </div>
      )}
    </div>
  );
};

export default PagesDropdown;