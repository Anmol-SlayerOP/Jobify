import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

import { companyDetails } from './JobData';

const JobCompaniesCard = () => {
  return (
    <>
    {
        companyDetails.map((item,index)=>(

            <div key={index} className="lg:flex flex-wrap ">
            <img src={item.image} alt="logo" className='min-w-[80px] m-2 aspect-square w-1/5' />
            <div className=" md:flex justify-between">
                <div>
              <p className=" pb-4 font-bold text-2xl"> {item.name} </p>
              <div className="flex space-x-2">
                <IoLocationOutline size={20} />
                <span>{item.location}</span>
              </div>
                </div>
                <div>
                <Link to={`/jobs?query=${item.name}`}>
            <HiOutlineArrowSmallRight
              size={40}
              className=" mt-4 rounded-full bg-white p-2 "
            />
            </Link>
            </div>
            </div>
          </div>
        ))
    }
   
    </>
  );
};

export default JobCompaniesCard;
