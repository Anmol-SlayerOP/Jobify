import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { API_URL } from '../../App'
import { setUserData } from '../../redux/userSlice'
import Footer from '../../components/Footer/Footer'
import JobsCardTwoA from '../../components/Jobs/JobCardTwoA'
import Navbar from '../../components/Navbar/Navbar'
function Dashboard() {
  const dispatch = useDispatch();
  const [activeJob, setActiveJob] = useState('saved');
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('category');
    console.log("Query from navbar", query);

    if (query) {
      setActiveJob(query);
      fetchUserJobs(query);
    }
    
  }, [location.search]);
    const [jobs, setJobs] = useState([]);
    const handledeletejob= async(job_id)=>{
      toast.loading('Deleting...');
     // a will give category
      let a =activeJob;
     const options = {
         method: 'DELETE',
         url: `${API_URL}/jobs/${job_id}?category=${a}`,
         headers: {
           authorization: `Bearer ${localStorage.getItem('jobify_token')}`,
         }
       };
   try {
     const response = await axios.request(options);
     // console.log("Backend ASLI API KA response",response);
     // console.log("ASLI API KA DATA",response.data);
     // console.log("ASLI API KA DATA.data",response.data.data);
    
     // console.log(jobs)

     console.log(response);
     fetchUserJobs(activeJob);
     toast.dismiss()
    } catch (error) {
     toast.dismiss()
     console.error('Error fetching jobs:', error);
   }
    



    }
    async function fetchUserJobs(a) {
        const options = {
            method: 'GET',
            url: `${API_URL}/jobs/${a}`,
            headers: {
              authorization: `Bearer ${localStorage.getItem('jobify_token')}`,
            }
          };
      console.log(a);
      try {
        const response = await axios.request(options);
        // console.log("Backend ASLI API KA response",response);
        // console.log("ASLI API KA DATA",response.data);
        // console.log("ASLI API KA DATA.data",response.data.data);
       
        setJobs(response.data.savedJobs);
        dispatch(setUserData(response.data.savedJobs));
        // console.log(jobs)
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
    useEffect(() => {
      // Function to fetch featured jobs
       fetchUserJobs(activeJob);

    }, [activeJob]);
    // console.log(jobs)
    const jobCategories = [
      'Saved Jobs',
      'Important Jobs',
      'Created Jobs',
      'Featured Jobs',
    ];
  return (
    <>
    <Navbar/>
    <div className='w-[100vw] max-w-[100vw] flex flex-col md:flex-row'>
        <div className=' w-[100vw] min-h-[70vh] md:w-[18%] bg-black/90   flex items-center  flex-col justify-center md:justify-start  text-white'>
            <h2 onClick={()=> setActiveJob('saved')} className='cursor-pointer font-extrabold my-1 md:mt-48 text-3xl'>DashBoard</h2>
            {jobCategories.map((category) => (
            <p
              key={category}
              className={`font-semibold my-1 cursor-pointer text-xl ${
                activeJob === category.split(' ')[0].toLowerCase() ? 'text-yellow-500' : ''
              }`}
              onClick={() =>{ setActiveJob(category.split(' ')[0].toLowerCase()); 
                // fetchUserJobs(category.split(' ')[0].toLowerCase())
            }}
            >
              {category}
            </p>
          ))}
   
        </div>
         <div className=' w-[94vw] md:w-[76vw] mx-[3%] md:mt-16 ml-0 md:mx-[3%] '>
        <JobsCardTwoA Api_Job_Data={jobs} fetchUserjobs={fetchUserJobs} activeJob={activeJob} handledeletejob={handledeletejob}/>
        </div>



      
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard