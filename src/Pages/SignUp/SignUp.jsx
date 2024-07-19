import { Navbar, Footer } from '../../components';
import { useState } from 'react';
import { API_URL } from '../../App';
import open from '../../assets/EyeCloseIcon.svg'
import close from '../../assets/EyeCloseIcon.svg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [notice, setNotice] = useState({ msg: '', type: true });
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [passwordType,setPasswordType]= useState('password')
  const switchPasswordType = () => {
		passwordType === 'password' ? (setPasswordType('text')) : (setPasswordType('password'));
	};
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('submit register');
    if (registerData.passwordConfirm != registerData.password) {
      console.log('not same');
      setNotice({ msg: 'password and Confirm password mismatch', type: false });
      setTimeout(() => setNotice({ msg: '', type: true }), 10000);
      return;
    }
    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,
        registerData,
        { headers: { 'Content-Type': 'application/json' } },
      );
      console.log(response);
      setNotice({msg:response.data.msg,type:true});
      
    } catch (err) {
      let m=''
      try{
        m=err.response.data.msg
      }
      catch(e){
        m = 'There is an error. Please try again later. 😥';
      }
      console.log(err);
      setNotice({msg:m,type:false});
    }
    finally{
      setTimeout(() => setNotice({ msg: '', type: true }), 10000);
    }
  };
  
  const sendVerificationLinkAgain = async () => {
    try {
      let email =registerData.email;
			const response = await axios.post(`${API_URL}/auth/send-verification-email-again`, { email });
      setNotice({msg:response.data.msg,type:true})
			// success = response.data.msg;
		} catch (err) {
      if (err.response.data.msg) {
        setNotice({msg:response.data.msg,type:false})
        // error = err.response.data.msg;
			} else {
        let error = 'There is an error. Please try again later. 😥';
        setNotice({msg:error,type:false})
			}
		}
    finally{
      
      setTimeout(() => setNotice({ msg: '', type: true }), 10000);
    }
  }
  return (
    <div className="w-[100%] overflow-hidden">
      <Navbar />
      <div className=" mx-1 my-20 ">
        <p className="mb-4 text-center font-bold text-blue lg:md:capitalize">
          SIGN UP
        </p>
        <h2 className="text-center text-4xl font-semibold text-black/90 lg:md:sm:text-6xl">
          Create Account
        </h2>
     
        
        <div className="mt-12 flex justify-center">
          <form
          
            autoComplete="on"
            id="2"
            onSubmit={handleRegister}
            className="mx-4 w-96 space-y-4 lg:md:space-y-4"
          >
            <label htmlFor="username" className="block text-xl font-semibold">
              User Name
            </label>
            <input
              required={true}
              type="text"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              id="username"
              placeholder="User Name"
              className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <label htmlFor="email" className="block text-xl font-semibold">
              Email
            </label>
            <input
                required={true}
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              id="email"
              placeholder="Email"
              className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <label htmlFor="password" className="block text-xl font-semibold ">
              Password
            </label>
               <div className="flex flex-col"><div className="relative">
          
          <input
             required={true}
            type={passwordType}
            name='password'
            id="password"
            placeholder="Password"
            className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
            ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            value={registerData.password}
            onChange={handleChange}
          />
          <button
          type='button'
          onClick={switchPasswordType}
          className="absolute right-0 top-0 h-full px-4 flex items-center justify-center border-l border-gray-200"
        >
          {passwordType === 'password'?<img src={open}/> :<img src={close} />}
            
        
        </button>
        </div>
          </div>
            <label
              htmlFor="confirmPassword"
              className="block text-xl font-semibold"
            >
              Confirm Password
            </label>
            <input
                required={true}
              name="passwordConfirm"
              value={registerData.passwordConfirm}
              onChange={handleChange}
              type="text"
              id="confirmPassword"
              placeholder=" Confirm Password"
              className="  w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue
              "
            />

            <div className="mb-8 lg:md:sm:flex lg:md:sm:justify-between">
              <div>
                <input
                  required={true}
                  id="check"
                  type="checkbox"
                  className="rounded border border-gray  px-4 py-4"
                />
                <label htmlFor="check" className="mx-1 text-xl font-semibold">
                  I agree with the{' '}
                </label>
              </div>
              <a href="#" className=" text-xl font-semibold  text-blue ">
                Terms & Conditions
              </a>
            </div>
           <div className='flex justify-center'>
            <button
              type="submit"
              className="mt-4 block rounded-full bg-blue px-8 py-4  font-semibold text-white transition-all duration-500 ease-in-out hover:bg-black lg:md:px-16"
            >
              Sign Up
            </button>
            </div>
            <div className='flex justify-center'>
            <button className="  block rounded-full bg-blue px-8 py-4  font-semibold text-white transition-all duration-500 ease-in-out hover:bg-black lg:md:px-16" onClick={sendVerificationLinkAgain}>Send Verification link again</button>
            </div>
           {notice.msg ? (
          
            notice.type?
            <>
             <div className='bg-emerald-50 border border-emerald-300 text-emerald-500 text-center w-full sm:w-96 -mb-5 break-words ml-auto mr-auto text-sm p-[0.9rem] mt-6 rounded-lg'>
                {notice.msg}
              </div>
            </>
            :
            <>
             <div className='bg-red-100 border border-red-300 text-red-600  w-full sm:w-96 -mb-5 text-center break-words ml-auto mr-auto text-sm p-[0.9rem] mt-6 rounded-lg'>
                {notice.msg}
              </div>
            </>
          
        ) : (
          <></>
        )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
