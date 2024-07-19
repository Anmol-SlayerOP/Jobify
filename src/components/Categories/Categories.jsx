import React from 'react';
import {categories} from './index';
import { Link, useParams } from 'react-router-dom';

const transition = "transition-all ease-in-out duration-500"

const Categories = () => {
 const { categorie } = useParams()

  return (
    <div className='my-[100px]'>
      <div className='text-center'  data-aos="fade-up">
        <h4 className='text-blue font-bold'>JOB CATEGORIES</h4>
        <h1 className='font-semibold text-4xl sm:text-5xl leading-16 tracking-wider text-black/80'>
          Popular Job Categories <br /> on Jobify
        </h1>
      </div>
      <div className='grid grid-cols-12 w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] gap-6 mt-16'>
        {categories.map((category, index) => (
       
          <div  key={index} data-aos="zoom-in"
          className={`${transition} group col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border border-gray/20 rounded-md flex flex-col items-center justify-center py-6 hover:border-blue focus:border-blue`}
          >


            <div className='bg-gray/20 p-3 '>
            <img src={category.icon} alt="icon" className={`${transition} transform group-hover:scale-110`}/>
            </div>
            <Link to={`/jobs?query=${category.route}`  } >
           <div className={`font-bold text-2xl my-4 hover:text-blue text-center ${transition}`}>
            {category.title}
           </div>
           <p className='font-semibold text-black/80'>{category.vacancy}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
