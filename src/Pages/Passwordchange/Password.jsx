import React from 'react'
import {padlock} from '../../assets/index'

const Password = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center h-[100vh] lg:mx-[20%] lg:w-[60%]'>
      <img src={padlock} alt="padlock" />
      <h1 className='text-3xl sm:text-5xl mt-8 font-semibold lg:text-6xl'>Password Protected</h1>
      <p className='text-lg text-gray font-semibold my-4'>The page you are looking for doesn't exist or has been moved</p>
      <input type="text" placeholder='Enter pour password' 
      className='py-2 px-6 rounded-full outline-none border border-gray/30 focus:border-blue lg:w-[50%]' />
      <button className='mt-4 py-2 text-white px-6 rounded-full outline-none border border-gray/30 bg-blue hover:bg-black lg:w-[50%]'>Enter Now</button>
    </div>
  )
}

export default Password
