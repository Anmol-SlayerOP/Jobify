import axios from 'axios';
import React from 'react';
import { AiOutlineCalendar, AiOutlineDollarCircle } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { GrLocation } from 'react-icons/gr';
import { HiArrowRight } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { API_URL } from '../../App';
import { saveIcon } from '../../assets/index';
import { companyData as OfflineData } from '../../components/Jobs/JobData';
import { Footer, JobCard, Navbar } from '../../components/index';
import { selectApi_Job_Data, selectUserData } from '../../redux/userSlice';
import handleresume from '../../utils/handleresume';
import transformApiDataArray from '../../utils/transformApiDataArray';




const JobDetail = () => {

  // calling hooks(usestate.useselector,useparam) conditionally was creating problem with unexpected return during rendering of component
  // hooks must be called at top and then conditional logic
  // let companyData=OfflineData
  // const { id } = useParams();
  //   let Api_Job_Data = useSelector(selectApi_Job_Data);
  //       const searchParams = new URLSearchParams(location.search);
  //     const query = searchParams.get('userjob');
  //     let userData;
  //     if (query) {
  //       console.log("Query from navbar", query);
          
  //       userData = useSelector(selectUserData);
  //     }
  //     if(query){
  //       companyData=transformApiDataArray(userData)
  //     }
  //     else if(Api_Job_Data) {  companyData=transformApiDataArray(Api_Job_Data)}

  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('userjob');
  
  const Api_Job_Data = useSelector(selectApi_Job_Data);
  const userData = useSelector(selectUserData); // Call useSelector unconditionally

  let companyData = OfflineData;


  if (query) {
    console.log("Query from navbar", query);
    companyData = transformApiDataArray(userData);
  } else if (Api_Job_Data) {
    companyData = transformApiDataArray(Api_Job_Data);
  }
  
  let data = companyData.find(job => job.id == id);
  function handlesavejob (job_id,imp){
    console.log(Api_Job_Data)
    let jobDataToSave = Api_Job_Data.find(jobdata => jobdata.job_id == job_id);
    console.log(" job data to be saved", jobDataToSave)
    if(!jobDataToSave) {
      console.log("Job data not found")
      return
    }

    let config = {
      method: 'post',
      url: `${API_URL}/jobs/`,
      params:{imp:imp},
      headers: { 
        'Content-Type': 'application/json', 
        authorization: `Bearer ${localStorage.getItem('jobify_token')}`
      },
      data : jobDataToSave
    };
    
    axios.request(config)
    .then((response) => {
      console.log("SAVED JoB DATA ",JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
    

  }
  return (
    <section className=''>
       <Navbar/>
       <div className=' '>
         {
        //  companyData.slice(0, 10).map((data) => (
          data?
          <article key={data.id}>
          <div className='bg-blue/10 py-[80px]'>
            <div className='w-[90%] mx-[5%] lg:w-[70%] lg:mx-[15%]'>
              <div className='flex justify-between mb-10 flex-col md:flex-row'>
              <div className='flex gap-6 items-start lg:items-center flex-col sm:flex-row'>
                <img src={data.image} alt="logo" className='bg-slate-300 p-3 rounded-md w-[120px] sm:w-[120px]  h-[120px]'/>
                <div>
                  <h1 className='font-bold text-3xl lg:text-4xl hover:text-blue transition-all ease-in-out'>{data.position}</h1> 
                  <div className='flex gap-4 my-4 flex-col md:flex-row'>
                    <p className='font-bold text-gray/70 flex items-center gap-2'>
                      <GrLocation/> {data.location}
                    </p>
                    <p className='font-bold text-gray/70 flex items-center gap-2'>
                      <AiOutlineCalendar/>{data.date}
                    </p>
                    <p className='font-bold text-gray/70 flex items-center gap-2'>
                      <GoPerson/>
                      {`${data.vacancy} vacancy`}
                    </p>
                  </div>
                  {/* <div className='flex gap-6'>
                    <p className='bg-blue/10 w-fit px-2 py-1 rounded-full font-bold text-blue'>
                      {data.fullTime ?  "Full Time": ""}
                    </p>
                    <p className='bg-orange-100 w-fit px-3 py-1 rounded-full font-bold text-orange-500'>
                      {data.remote ?  "Remote": ""}
                    </p>
                  </div> */}
                  <div className="flex  gap-4 items-center">
              { data.fullTime &&
                <div className="rounded-full bg-blue/20 px-3 py-1 text-blue">
                  Full Time
                </div>
              }
              { data.remote &&
                <div className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-500">
                  Remote
                </div>
              }
              { data.contract &&
                <div className="rounded-full bg-lime-500/20 px-3 py-1 text-lime-500">
                  Contract
                </div>
              }
              { data.partTime &&
                <div className="rounded-full bg-orange-500/20 px-3 py-1 text-orange-500">
                  Part Time
                </div>
              }
              { data.onsite &&
                <div className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-500">
                  Onsite
                </div>
              }
            </div>
                 </div>
                </div>
                <div className='sm:flex-nowrap flex flex-row flex-wrap'>
               <img width="48" height="48" src="https://img.icons8.com/emoji/48/star-emoji.png" onClick={()=>handlesavejob(data.id,true)} alt="save" className='cursor-pointer mr-2 bg-gray/20 p-2 hover:border-blue hover:border sm:block rounded-full w-10 h-10'/>
               <img src={saveIcon} onClick={()=>handlesavejob(data.id,false)} alt="save" className='cursor-pointer bg-gray/20 p-2  sm:block rounded-full hover:border-blue hover:border w-10 h-10'/>
               </div>
              </div>
              <hr className='border border-gray/10'/>
              <div className='mt-4 flex justify-between flex-col md:flex-row gap-4 md:gap-2'>
                 <p className='flex gap-2 items-center font-bold text-gray/80'>
                  <AiOutlineDollarCircle size={22}/>
                  {`${data.minPrice} - ${data.maxPrice}/${data.per}`}
                 </p>
                 <p>
                  <span className='font-bold text-gray/80'>Application Ends:</span>
                  <span className='font-bold text-red-400 ml-2'>{data.deadline || 'September 20, 2023'}</span>
                 </p>
              </div>
            </div>
            </div>

            <div className='flex gap-6 flex-col md:flex-row w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] my-[50px] '>
               <div className='w-full md:w-2/3 rounded-md py-8 px-6 shadow-lg border border-gray/30'>
                  <div>
                    <h1 className='text-3xl text-black/80 font-semibold'>Job Description</h1>
                     <hr className='border border-blue my-4'/>
                    <p className='text-lg text-black/60 font-bold'>{data.description}</p>
                  </div>
                  <div className='mt-12'>
                    <h1 className='text-3xl text-black/80 font-semibold'>Responsibilities</h1>
                    <hr className='border border-blue my-4'/>
                    <p className='text-lg text-black/60 font-bold'>{data.responsibilities}</p>
                  </div>
                  <div className='mt-12'>
                   <h1 className='text-3xl text-black/80 font-semibold'>Job Requirements</h1>
                    <hr className='border border-blue my-4'/>
                    <p className='text-lg text-black/60 font-bold'>{data.requirements}</p>
                  </div>
                  <button className='bg-blue p-2 px-3 mt-6 rounded-full text-white w-fit font-semibold hover:bg-black transition-all'><a href={`${data.apply_link}`} target="_blank" > Apply Now</a></button>
               </div>
               <div className='w-full md:w-1/3'>
                  <a href={`${data.apply_link}`} target="_blank" > 
                  <button className='bg-blue px-8 py-4 flex justify-center gap-3 items-center rounded-md text-white w-full font-semibold text-lg hover:bg-black transition-all'>
                    Apply Now
                    <HiArrowRight size={24}/>
                  </button>
                  </a>
                  <button onClick={()=> handleresume(data)} className='bg-blue px-8 mt-2 py-4 flex justify-center gap-3 items-center rounded-md text-white w-full font-semibold text-lg hover:bg-black transition-all'>
                    Generate Resume™️
                    <HiArrowRight size={24}/>
                  </button>
                  <div className='shadow-lg rounded-md mt-12 py-6 px-4'>
                    <h1 className='font-bold text-2xl'>Requirements</h1>
                    <hr className='border border-blue my-4'/>
                    <p className='text-lg font-bold text-black/70 my-1'>Availability: <span className='ml-2'>Hourly</span></p>
                    <p className='text-lg font-bold text-black/70 my-1'>Education: <span className='ml-2'>Graduate</span></p>
                    <p className='text-lg font-bold text-black/70 my-1'>Gender: <span className='ml-2'>Hourly</span></p>
                    <p className='text-lg font-bold text-black/70 my-1'>Age: <span className='ml-2'>25+</span></p>
                    <p className='text-lg font-bold text-black/70 my-1'>Experience: <span className='ml-2'>3 - 5 Years</span></p>
                    <p className='text-lg font-bold text-black/70 my-1'>Language: <span className='ml-2'>English</span></p>
                  </div>
               </div>
            </div>
          </article>:
          <div className="flex justify-center mt-10">
<span className='font-bold text-6xl text-red-400 ml-2'>Sorry, Job DATA NOT FOUND</span>
</div>
        //  ))
         }
       </div>
       <div className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] mt-[80px] mb-[50px]'>
         <div className='flex justify-between'>
           <h1 className='text-4xl md:text5-xl lg:text-6xl font-semibold '>More job openings</h1>
           <Link to='/jobs' className='bg-blue py-2 px-4 hover:bg-black text-white font-bold rounded-full h-fit'>
             All Jobs
            </Link>
         </div>
          <div className='mt-8'>
             <JobCard limit={8}/>
          </div>        
       </div>
       <Footer/>
    </section>
  )
}
export default JobDetail
