import React from 'react'
import { gears } from '../../assets/index'
import { Navbar } from '../../components'

const StyleGuide = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[100vw] flex flex-col md:flex-row'>
        <div className=' w-[100vw] min-h-[40vh] md:w-[21%] bg-black/90 md:fixed md:left-0 md:h-[100vh] pb-6 flex items-center  flex-col justify-center md:justify-start  text-white'>
    {/* <div className='w-[100vw] flex flex-col md:flex-row'>
        <div className='w-[100%] md:w-[18%] bg-black/90 md:fixed md:left-0 md:top-0 pb-6 md:h-[100vh] flex items-center flex-col justify-center text-white'> */}
           <img src={gears} alt="gears" className='w-[100px] md:mt-[100px]'/>
           <p className='font-semibold my-8 text-xl'>01. Colors</p>
           <p className='font-semibold text-xl'>02. Typography</p>
        </div>
        <div className='w-[94%] md:w-[80%] mx-[3%] md:mt-16 ml-0 md:ml-[22%]'>
            <h1 className='text-5xl md:text-7xl font-semibold'>Colors</h1>
             <div className='mt-8 flex gap-4 flex-wrap'>
                <div>
                  <div className='w-full sm:w-[12rem] rounded-md h-[6rem] bg-blue'></div>
                  <span className='text-gray font-semibold'>PRIMARY - #0071DC</span>
                </div>
                <div>
                  <div className='w-full  sm:w-[12rem] rounded-md h-[6rem] bg-gray'></div>
                  <span className='text-gray font-semibold'>PRIMARY - #0071DC</span>
                </div>
                <div>
                  <div className='w-full  sm:w-[12rem] rounded-md h-[6rem] bg-black'></div>
                  <span className='text-gray font-semibold'>PRIMARY - #0071DC</span>
                </div>
             </div>

             <div className='mt-6'>
              <h1 className='text-5xl md:text-7xl font-semibold'>Gradients</h1>
              <div>
                <div className='w-[12rem] my-2 rounded-md h-[6rem]  bg-gradient-to-r from-red-400 to-yellow-600'></div>
                <span className='font-semibold text-gray'>PRIMARY - #0071DC</span>
                </div>
            </div>
         
         <div className='my-6'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold'>Typography</h1>
        </div>


        </div>

      
    </div>
    </>
  )
}

export default StyleGuide