import React from 'react'
import {bluearrow} from '../../assets'
import { Link } from 'react-router-dom'
const StartJourneyJob = () => {
  return (
    <div className='py-20 border my-20 border-slate-500/20 space-y-16 px-8 overflow-hidden relative'>
        <span className='absolute right-20 top-20 h-32 w-32 rounded-full bg-gray/10'></span>
     <p className="font-normal text-5xl text-center"> Are You Ready To Start  <br/>Your Journey?</p>

     {/* <p className="text-center text-gray  font-semibold">It is a long established fact that a reader will be distracted by the real conten of a page when looking at its layout. The point of using Lorem Ipsum is.</p> */}
<div className="sm:flex justify-center mx-4 space-y-4  sm:space-y-0 gap-6">
   <Link to='/post'>
   <button className="  border  border-blue px-6 rounded-full py-4 font-semibold  text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out text-center flex gap-3">
        Post a Featured Job
    </button>
    </Link> 
   <Link to='/jobs'>
    <button className="  border  border-blue px-6 rounded-full py-4 font-semibold  text-black  hover:bg-blue  hover:text-white transition-all duration-500 ease-in-out text-center flex gap-3">
        Find a Free Job
    </button>
    </Link> 
</div>
<img src={bluearrow} alt="bluearrow" className='rotate-180'/>



    </div>
  )
}

export default StartJourneyJob
