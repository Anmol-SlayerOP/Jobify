import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import { selectUsername, setUsername } from './redux/userSlice'; 

import {
  About,
  Changelog,
  Contact,
  ForgotPasswordPage,
  Home,
  Error,
  StyleGuide,
  JobDetail,
  JobPost,
  Jobs,
  Dashboard,
  License,
  ResetPasswordPage,
  SignUp,
  VerifyEmailPage
    
} from './Pages/index';
import { toast } from 'react-toastify';




const API_URL = import.meta.env.VITE_BACKEND_API;


function  App() {
   


    // Things to do SCRAP data 
    // company_name: Matches apiData.employer_name.
    // job_profile: Matches apiData.job_profile.
    // skills_required: Matches apiData.skills_required.
    // location: Matches apiData.location.
    // job_publish_date: we cannot get so write give as extra
    // apply_link: Matches apiData.apply_link.

    //to scroll to TOP
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  

  const username = useSelector(selectUsername);
  let isAuth =  Boolean(useSelector((state) => state.user.username));
  console.log("isauth", isAuth)
  console.log(useSelector((state) => state.user.username));
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ 
      // disable: true,
      // once : true,
      duration: 1500 });
  }, []);

  useEffect(() => {
  async function getUser() {
    try {
        let token = localStorage.getItem('jobify_token')
        if(!token) {
          console.log("no token")
          // localStorage.removeItem('jobify_token'); 
          // toast.warn('Kindly Login')    
          //  navigate('/signup')
          return 
        }
        // else
        const response = await axios.get(`${API_URL}/users`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jobify_token')}`
          }
        });
        console.log(response.data)
        let v=response.data.user.name
        dispatch(setUsername(v));
        isAuth =true;
        console.log(username)
        // navigate('/jobs')
      } catch (err) {
        
          console.log(err)
          // localStorage.removeItem('jobify_token');
          // await navigate('/signup')
      }
    }
    getUser();
  }, [dispatch, navigate]);
  

  return (
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage/>} />
        <Route path="/auth/forgotpassword" element={<ForgotPasswordPage/>} />
        <Route path="/auth/verify-email" element={<VerifyEmailPage/>} />
        <Route path="/auth/verify-email/:token/:email" element={<VerifyEmailPage/>} />
        <Route path="/jobs" element={ <Jobs /> }/>
        {/* <Route path="/jobs" element={isAuth==isAuth ? <Jobs /> : <Navigate to="/signup" />}/> */}
        <Route path="/post" element={isAuth ? <JobPost /> : <Navigate to="/signup" />} />
        <Route path="/job/:id" element={isAuth==isAuth ? <JobDetail /> : <Navigate to="/signup" />} />
         <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/signup" />} /> 
        <Route path="/styles" element={<StyleGuide />} />
        <Route path="/license" element={<License />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}
export { API_URL };
export default App;

