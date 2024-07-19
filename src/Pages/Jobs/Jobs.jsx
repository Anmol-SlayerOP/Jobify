import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { API_URL } from '../../App';
import { FindJob, Footer, JobsCardOne, JobsCardTwo, Navbar, StartJourneyJob } from '../../components';
import JobCompaniesCard from '../../components/Jobs/JobCompaniesCard';
import { selectApi_Job_Data, setApi_Job_Data } from '../../redux/userSlice';

const Jobs = () => {
  const dispatch = useDispatch();
  const Api_Job_Data = useSelector(selectApi_Job_Data);
  
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  let page =1
  
  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState('');
  const [remoteOnly,setRemoteOnly]=useState(false);
  const [employmentType,setEmploymentType]=useState('');
  const [employer,setEmployer]=useState('');
  
  
  let m ={
    query: query,
    page: page,
    remote_jobs_only: remoteOnly,
    employment_types: employmentType,
    employer:employer
  }
  const fetchData = async (params) => {
    console.log('ye jayega',params)
    const options = {
      method: 'GET',
      url: `${API_URL}/externalapis/search/getjobs`,
      params: params,
      headers: {
        authorization: `Bearer ${localStorage.getItem('jobify_token')}`,
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log("Backend ASLI API KA response",response);
      console.log("ASLI API KA DATA",response.data);
      console.log("ASLI API KA DATA.data",response.data.data);
      dispatch(setApi_Job_Data(response.data.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const jobsearch=(v)=>{
    let mainquery='';
    if(v)
    mainquery = query;
  else 
  mainquery = `${search}${selectedOption?' in '+encodeURIComponent(selectedOption):''}`;
fetchData({
  query: mainquery,
  page: page,
})
}
const handleAdvancedSearch=()=>{
  
  let  mainquery = `${search}${selectedOption?' in '+encodeURIComponent(selectedOption):''}`
  fetchData({
    query: mainquery,
    page: page,
    remote_jobs_only: remoteOnly,
    employment_types: employmentType,
      employer:employer
    })
    
    
  }
  useEffect(()=>{
    console.log(query)
    if(query)
    {
      const index = query.indexOf(' in ');
      
      if (index !== -1) {
        const firstSubstring = query.substring(0, index);
        
        const secondSubstring = query.substring(index + 4); // Skip ' in ' (which is 4 characters long)
        
        setSearch(firstSubstring);
        setSelectedOption(secondSubstring);
      }
      else {
        setSearch(query);
      }
    }
    if(query) {
      
      jobsearch(true)
    }
    
    // dispatch(setApi_Job_Data(jsearchjobdata.response.data)); //data.data


  },[query])


  return (
    <div className='w-[100%] overflow-hidden'>
    <Navbar/>
    <div>
      <div className="bg-blue/5 ">
        <div className="space-y-20 py-20">
          <h2 className="text-4xl font-bold capitalize sm:text-7xl text-center">
            Search Your Demanded Job <br />
            Permanent & Remote
          </h2>
          <FindJob query={query} search={search} setSearch={setSearch} selectedOption={selectedOption} setSelectedOption={setSelectedOption} jobsearch={jobsearch} />
        </div>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-[94%] mx-[3%] lg:w-[80%] lg:mx-[10%] my-10">
      <div className="lg:col-span-3 order-2 lg:order-1">
        <JobsCardTwo ></JobsCardTwo>
      </div>
      <div className="lg:col-span-2 order-1 lg:order-2">
      <JobsCardOne title="Advanced Search">
          <div className="mb-4">
  <label className="inline-flex items-center text-sm font-medium text-gray-700">
    <span className="ml-2 text-lg">Remote Only</span>
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 ml-5 text-indigo-600 transition duration-150 ease-in-out"
      onChange={(e) => setRemoteOnly(e.target.checked)}
    />
  </label>
</div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Employment Type</label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="px-4 py-4 w-full rounded-xl"
            >
              <option value="">Select Type</option>
              <option value="FULLTIME">Full-Time</option>
              <option value="PARTTIME">Part-Time</option>
              <option value="INTERN">Intern</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Employer/Company</label>
            <input
              type="text"
              placeholder="Employer Name"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              className="w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
          </div>
          <button
            onClick={handleAdvancedSearch}
            className="w-full rounded-full border border-blue px-3 py-4 font-semibold capitalize text-blue transition-all duration-500 ease-in-out text-center flex justify-center hover:bg-blue hover:text-white"
          >
            Advanced Search
            <HiOutlineArrowSmallRight size={25} />
          </button>
        </JobsCardOne>
        
        <div className='mt-8'>
          <JobsCardOne title="featured companies">
           
            <JobCompaniesCard/>
          </JobsCardOne>
        </div>
        <div className='mt-8'>
        <Link to='/dashboard?category=featured'>
        <button  className=" w-[100%]    border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out  flex  text-center  gap-3"> <HiOutlineArrowSmallRight  size={25}/>Featured & Exclusive Jobs</button>
        </Link>
        </div>

      </div>
    </div> 
    <StartJourneyJob/>
  </div>
  <Footer/>
</div>
  );
};

export default Jobs;
