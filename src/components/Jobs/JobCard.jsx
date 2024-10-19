import { CiCalendar, CiDollar } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectApi_Job_Data } from '../../redux/userSlice';
import handleresume from '../../utils/handleresume';
import transformApiDataArray from '../../utils/transformApiDataArray';
import { companyData as OfflineData } from './JobData';

const JobCard = ({disabled,limit}) => {
  let isResumeNotAllowed = true && disabled
  
  let companyData=OfflineData
  const Api_Job_Data = useSelector(selectApi_Job_Data);
  if(Api_Job_Data) {  companyData=transformApiDataArray(Api_Job_Data)}
  if(limit)
  companyData=companyData.slice(0,Math.min(limit,companyData.length))

  return (
    <div className='grid grid-cols-2 gap-8'>
      {companyData.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="w-full col-span-2 lg:col-span-1 px-4 mx-3 my-4 rounded-lg border border-slate-200  py-4 hover:border-blue"
        >
          <div className="py-4 border-b border-slate-300">
            <div className="flex gap-4 items-start lg:items-center">
              <img src={item.image}  alt="logo" className="p-4 w-[120px] sm:w-1/5 sm:min-w-32" />
              <div className="space-y-4">
                <p className="flex justify-between text-blue">
                  {item.name}          
                </p>
                <p className="flex justify-between text-blue">
                </p>
                <Link to={`/job/${item.id}`}>
                  <p className="font-bold hover:text-blue ">{item.position}</p>
                </Link>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex space-x-2">
                    <IoLocationOutline size={20} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex space-x-2">
                    <CiCalendar size={20} />
                    <span>{item.date}</span>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex  flex-wrap gap-4 items-center">
              { item.fullTime &&
                <div className="rounded-full bg-blue/20 px-3 py-1 text-blue">
                  Full Time
                </div>
              }
              { item.remote &&
                <div className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-500">
                  Remote
                </div>
              }
              { item.contract &&
                <div className="rounded-full bg-lime-500/20 px-3 py-1 text-lime-500">
                  Contract
                </div>
              }
              { item.partTime &&
                <div className="rounded-full bg-orange-500/20 px-3 py-1 text-orange-500">
                  Part Time
                </div>
              }
              { item.onsite &&
                <div className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-500">
                  Onsite
                </div>
              }
                {isResumeNotAllowed ? '':  <div className='!ml-auto '>
                      <button onClick={()=> handleresume(item)}className='bg-blue text-white  mr-4 px-3 py-1 rounded-full hover:bg-black transition-all ease-in-out duration-500'>
            Generate Resume™️
          </button>
          <a href={`${item.apply_link}`} target="_blank" > 
                      <button className='bg-blue text-white  px-3 py-1 rounded-full hover:bg-black transition-all ease-in-out duration-500'>
            Apply 
          </button>
          </a>
          </div>}
            </div>
          </div>
          <div className="flex justify-between gap-3 flex-col sm:flex-row mt-4 lg:items-center">
            <div className="mt-3 flex ">
              <CiDollar size={20} className="mt-1 min-w-fit" />
              {item.maxPrice} - {item.minPrice}
              <span className="text-gray"> /{item.per}</span>
            </div>
            <div className="flex text-gray">
              <GoPerson size={20} className="mr-2" />
              {item.vacancy} Vacancy
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;