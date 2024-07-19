import { Navbar } from "../../components";
import { Footer } from "../../components";

import React, { useEffect, useState } from 'react';
import { useParams ,useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from "../../App";





const VerifyEmail =()=>{
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const verificationToken = searchParams.get('token');
    const email = searchParams.get('email');
    console.log(verificationToken,email);
  const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    async function verifyEmail() {
      try {
        const response = await axios.post(`${API_URL}/auth/verify-email`, {
            verificationToken,
          email,
        });
        setVerificationResult(response.data.msg); // Assuming your backend returns some data
      } catch (error) {
        if (error.response.data.msg === 'Already verified.') {
         
            setVerificationResult('Already Verified'); // Handle error
            setTimeout(() => navigate('/signup'),5000)
            return
        }
        console.log( error.message);
        setVerificationResult('Verification failed!!! Reason -> '+error.message ); // Handle error
      }
    }

    verifyEmail();
  }, [verificationToken, email]);
    return( 
    <>
   <Navbar/>
   <div className="flex justify-center mt-7 text-center"> 
   {verificationResult ? (
        <div>
          <h2 className="font-serif font-bold"> Email Verification Result</h2>
          <p className="text-blue">{verificationResult}</p>
          {/* Display other details from verificationResult as needed */}
        </div>
      ) : (
        <p>Verifying email...</p>
      )}
   </div>
   <Footer/>
   </>)
}
export default VerifyEmail;