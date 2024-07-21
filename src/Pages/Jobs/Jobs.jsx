import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../../App';
import {
  FindJob,
  Footer,
  JobsCardOne,
  JobsCardTwo,
  Navbar,
  StartJourneyJob,
} from '../../components';
import JobCompaniesCard from '../../components/Jobs/JobCompaniesCard';
import { selectApi_Job_Data, setApi_Job_Data } from '../../redux/userSlice';

const Jobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Api_Job_Data = useSelector(selectApi_Job_Data);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  let page = 1;

  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [employmentType, setEmploymentType] = useState('');
  const [employer, setEmployer] = useState('');

  let m = {
    query: query,
    page: page,
    remote_jobs_only: remoteOnly,
    employment_types: employmentType,
    employer: employer,
  };
  const fetchData = async (params) => {
    console.log('ye jayega', params);
    const options = {
      method: 'GET',
      url: `${API_URL}/externalapis/search/getjobs`,
      params: params,
      headers: {
        authorization: `Bearer ${localStorage.getItem('jobify_token')}`,
      },
    };

    try {
      const response = await axios.request(options);
      console.log('Backend ASLI API KA response', response);
      console.log('ASLI API KA DATA', response.data);
      console.log('ASLI API KA DATA.data', response.data.data);
      dispatch(setApi_Job_Data(response.data.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const jobsearch = (v) => {
    let mainquery = '';
    if (v) mainquery = query;
    else
      mainquery = `${search}${
        selectedOption ? ' in ' + encodeURIComponent(selectedOption) : ''
      }`;
    fetchData({
      query: mainquery,
      page: page,
    });
  };
  const handleAdvancedSearch = () => {
    let mainquery = `${search}${
      selectedOption ? ' in ' + encodeURIComponent(selectedOption) : ''
    }`;
    fetchData({
      query: mainquery,
      page: page,
      remote_jobs_only: remoteOnly,
      employment_types: employmentType,
      employer: employer,
    });
  };
  useEffect(() => {
    console.log(query);
    if (query) {
      const index = query.indexOf(' in ');

      if (index !== -1) {
        const firstSubstring = query.substring(0, index);

        const secondSubstring = query.substring(index + 4); // Skip ' in ' (which is 4 characters long)

        setSearch(firstSubstring);
        setSelectedOption(secondSubstring);
      } else {
        setSearch(query);
      }
    }
    if (query) {
      jobsearch(true);
    }

    // dispatch(setApi_Job_Data(jsearchjobdata.response.data)); //data.data
  }, [query]);


  useEffect(() => {
    async function getUser() {
      try {
        let token = localStorage.getItem('jobify_token');
        if (!token) {
          console.log('no token');
          // localStorage.removeItem('jobify_token');
          // await navigate('/signup')
          navigate('/signup');
          return;
        }
        // else
        const response = await axios.get(`${API_URL}/users`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jobify_token')}`,
          },
        });
        console.log(response.data);
        const userName =  response.data.user.name;
        if(!userName){
          navigate('/signup');
        }
      } catch (err) {
        console.log(err);
        navigate('/signup');
      }
    }
    getUser();
  }, []);

  return (
    <div className="w-[100%] overflow-hidden">
      <Navbar />
      <div>
        <div className="bg-blue/5 ">
          <div className="space-y-20 py-20">
            <h2 className="text-center text-4xl font-bold capitalize sm:text-7xl">
              Search Your Demanded Job <br />
              Permanent & Remote
            </h2>
            <FindJob
              query={query}
              search={search}
              setSearch={setSearch}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              jobsearch={jobsearch}
            />
          </div>
        </div>
        <div className="mx-[3%] my-10 grid w-[94%] grid-cols-1 gap-8 lg:mx-[10%] lg:w-[80%] lg:grid-cols-5">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <JobsCardTwo></JobsCardTwo>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-2">
            <JobsCardOne title="Advanced Search">
              <div className="mb-4">
                <label className="text-gray-700 inline-flex items-center text-sm font-medium">
                  <span className="ml-2 text-lg">Remote Only</span>
                  <input
                    type="checkbox"
                    className="form-checkbox ml-5 h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                    onChange={(e) => setRemoteOnly(e.target.checked)}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 block text-sm font-medium">
                  Employment Type
                </label>
                <select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-full rounded-xl px-4 py-4"
                >
                  <option value="">Select Type</option>
                  <option value="FULLTIME">Full-Time</option>
                  <option value="PARTTIME">Part-Time</option>
                  <option value="INTERN">Intern</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 block text-sm font-medium">
                  Employer/Company
                </label>
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
                className="flex w-full justify-center rounded-full border border-blue px-3 py-4 text-center font-semibold capitalize text-blue transition-all duration-500 ease-in-out hover:bg-blue hover:text-white"
              >
                Advanced Search
                <HiOutlineArrowSmallRight size={25} />
              </button>
            </JobsCardOne>

            <div className="mt-8">
              <JobsCardOne title="featured companies">
                <JobCompaniesCard />
              </JobsCardOne>
            </div>
            <div className="mt-8">
              <Link to="/dashboard?category=featured">
                <button className=" flex    w-[100%]  gap-3 rounded-full border border-blue bg-blue px-12 py-4 text-center font-semibold capitalize text-white transition-all  duration-500  ease-in-out  hover:bg-black">
                  {' '}
                  <HiOutlineArrowSmallRight size={25} />
                  Featured & Exclusive Jobs
                </button>
              </Link>
            </div>
          </div>
        </div>
        <StartJourneyJob />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
