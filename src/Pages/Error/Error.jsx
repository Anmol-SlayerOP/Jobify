import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {error} from '../../assets/index'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
       <Navbar/>
        <div className='flex flex-col items-center justify-center mx-2 mt-[50px]'>
            <img src={error} alt="error image" />
            <h1 className='font-bold text-4xl sm:text-5xl xl md:text-7xl text-center'>Page Not Found</h1>
            <p className='font-semibold my-8 md:my-8 text-lg text-center text-gray'>Looks like we are missing some page, or you typed somethig 
            <br />wrong in the URL, heres a way to get back</p>
            <Link to='/' className='bg-blue hover:bg-black text-white text-xl p-3 font-semibold rounded-3xl'>
              Back To Home
            </Link>
        </div>
       <Footer/>
    </div>
  )
}

export default Error