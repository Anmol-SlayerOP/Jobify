import { useState } from 'react';
import { CiCalendar, CiDollar } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { binIcon } from '../../assets';
import { companyData as OfflineData } from '../../components/Jobs/JobData';
import handleresume from '../../utils/handleresume';
import transformApiDataArray from '../../utils/transformApiDataArray';

const JobsCardTwoA = ({disabled,Api_Job_Data,activeJob,handledeletejob}) => {
  let companyData = OfflineData
  if(Api_Job_Data) { companyData = transformApiDataArray(Api_Job_Data)}
  let isResumeNotAllowed = true && disabled
  const [showCount, setShowCount] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showNextCards = () => {
    if (currentIndex + showCount < companyData.length) {
      setCurrentIndex(currentIndex + showCount);
    }
  };

  const showPreviousCards = () => {
    if (currentIndex - showCount >= 0) {
      setCurrentIndex(currentIndex - showCount);
    }
  };
   




  const canShowNext = currentIndex + showCount < companyData.length;
  const canShowPrevious = currentIndex > 0;

  return (
    <div className='' >
       {/* <div className="sm:flex sm:space-y-0 space-x-4 space-y-4 px-4">
       <JobCartDropDown data={shortBy} style="py-4 px-8 bg-gray/10 rounded-full "/>
       <JobCartDropDown data={perPage}  style="py-4 px-6 bg-gray/10 rounded-full"/>
          </div> */}
<p  className="text-2xl text-gray mt-2 ">Showing {companyData.length?currentIndex+1:0}-{Math.min(currentIndex+showCount,companyData.length) } of {companyData.length} Results</p>

      {companyData
        .slice(currentIndex, currentIndex + showCount)
        .map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-once = "true"
            className="rounded-xl px-4 relative overflow-x-clip my-4  border border-slate-200   py-4 hover:border-blue sm:pl-2"
          >
            <div className=" space-y-4 border-b border-slate-300">
              <div className="sm:flex ">
                <img src={item.image}  alt="logo" className="p-4  !w-[120px] sm:w-1/5 sm:min-w-32 " />

                <div className="space-y-4">
                  <p className="flex justify-between text-blue">
                    {item.name}
                    
                    <img
                      src={binIcon}
                      // src='https://img.icons8.com/?size=100&id=102350&format=png&color=000000'
                      onClick={()=>handledeletejob(item.id)}
                      alt="Delete job"
                      className="cursor-pointer absolute  hover:border hover:border-red-600 right-6 h-12 w-12 rounded-full bg-gray/10 p-2 "
                    />
                  </p>
                  <p className="flex justify-between text-blue">
                  {`Resume Required : Yes`}             
                </p>
                  <Link to={`/job/${item.id}?userjob=${activeJob}`}>
                    <p className="font-bold hover:text-blue">{item.position}</p>
                  </Link>
                  <div className="sm:space-x-4 space-y-4 sm:flex sm:space-y-0">
                    <div className="flex sm:space-x-2">
                      <IoLocationOutline size={20} />
                      
                      <span>{item.location}</span>
                    </div>
                    <div className="flex space-x-2">
                      <CiCalendar size={20} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                {/* <div className='flex flex-row  ml-auto'>
                    <img
                      src={saveIcon}
                      onClick={()=>handlesavejob(item.id)}
                      alt="save"
                      className="cursor-pointer   h-12 w-12 rounded-full bg-gray/10 p-4 "
                    />
                    <img
                      src={saveIcon}
                      onClick={()=>handlesavejob(item.id)}
                      alt="save"
                      className="cursor-pointer   h-12 w-12 rounded-full bg-gray/10 p-4 "
                    />
                </div> */}
               </div>

              <div className="space-x-4 py-4 flex flex-wrap ">
                {item.fullTime && (
                  <div className="rounded-full bg-blue/20 px-3 py-1 text-blue w-fit">
                    Full Time
                  </div>
                )}
                {item.remote && (
                  <div className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-500 w-fit ">
                    Remote
                  </div>
                )}
                {item.contract && (
                  <div className="rounded-full bg-lime-500/20 px-3 py-1 text-lime-500 w-fit">
                    Contract
                  </div>
                )}
                {item.partTime && (
                  <div className="rounded-full bg-orange-500/20 px-3 py-1 text-orange-500">
                    Part Time
                  </div>
                )}
                {item.onsite && (
                  <div className="rounded-full  bg-purple-500/20 px-3 py-1 text-purple-500">
                    Onsite
                  </div>
                )}
                {isResumeNotAllowed ? '':  <div className='!ml-auto '>
                      <button onClick={()=>handleresume(item)}className='bg-blue text-white  mr-4 px-3 py-1 rounded-full hover:bg-black transition-all ease-in-out duration-500'>
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
            <div className="space-y-2 sm:flex  sm:justify-between">
              <div className="mt-3 flex ">
                
                <CiDollar size={20} className="mt-1 min-w-0" />
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

        <div className= "flex justify-center mb-4">
      {canShowPrevious && <button onClick={showPreviousCards} className="     border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out text-center flex gap-3"> <HiOutlineArrowSmallLeft size={25}/>Previous</button>}
      {canShowNext && <button onClick={showNextCards} className="   border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out text-center flex gap-3">Next <HiOutlineArrowSmallRight size= {25}/> </button>}
        </div>




        
    </div>
    
  );
};

export default JobsCardTwoA;