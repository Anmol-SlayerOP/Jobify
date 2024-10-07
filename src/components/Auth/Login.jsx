import { Link ,useNavigate} from 'react-router-dom';
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import open from '../../assets/EyeOpenIcon.svg'
import close from '../../assets/EyeCloseIcon.svg'
import { useState } from 'react';
import {API_URL} from '../../App'
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = ({handleDialog,setUser,setIsShowDialog}) => {
  
  const [notice, setNotice] = useState({ msg: '', type: true });
  const [logindata,setlogindata] = useState({email:'', password:''})
  const [passwordType,setPasswordType]= useState('password')
  const switchPasswordType = () => {
		passwordType === 'password' ? (setPasswordType('text')) : (setPasswordType('password'));
	};
  const handleChange =( e) => {
   setlogindata({...logindata,[e.target.name]: e.target.value})
  }
  const handlelogin = async (e)=>{
    e.preventDefault();
    toast.loading('Signing in...');
    console.log("submit login")
    try{
    const response =await axios.post(`${API_URL}/auth/login`,logindata,{      headers: {        'Content-Type': 'application/json'      } })
    toast.dismiss();
    toast.success('Signed In Successfully');
    console.log(response);
    localStorage.setItem('jobify_token', response.data.token);
    localStorage.setItem('username',response.data.user.name);
    setUser(response.data.user.name)
    setIsShowDialog(false);
    setNotice({msg:response.data.msg,type:true});
    
    await navigate('/jobs');
  }
  catch(err){
      toast.dismiss();
      let m=''
      try{
        m=err.response.data.msg
      }
      catch(e){
        m = 'There is an error. Please try again later. 😥';
      }
      console.log(err);
      setNotice({msg:m,type:false});
      console.log(err);
      setNotice({msg:m,type:false});

    }
  finally{
    setTimeout(() => setNotice({ msg: '', type: true }), 10000);
  }
}
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    handleDialog(false); 
    navigate("/signup");
  };
  return (
    <div >
      <div className=" mx-1 mt-8 ">
        <div className=" flex justify-center">
          <form autoComplete="on" id="1" onSubmit={handlelogin} className="mx-4 w-full sm:w-96 space-y-4 lg:md:space-y-4">
            <label htmlFor="Email" className="block text-xl font-semibold">
              Email
            </label>
            <input
            required={true}
              type='email'
              name='email'
              id="email"
              placeholder="Email Address"
              className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
              value={logindata.email}
              onChange={handleChange}
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
              value={logindata.password}
              onChange={handleChange}
            />
            <button
            type='button'
						onClick={switchPasswordType}
						className="absolute right-0 top-0 h-full px-4 flex items-center justify-center border-l border-gray-200"
					 >
						{passwordType === "password"?<img src={close}/> :<img src={open} />}
							
					
					</button>
          </div>
            </div>
            <Link className="text-blue" to='/auth/forgotpassword'> Forgot Password?</Link>
           

            <div className="flex justify-center">
              <button type='submit'  className="mt-4 block rounded-full bg-blue px-8 py-4  font-semibold text-white transition-all duration-500 ease-in-out hover:bg-black lg:md:px-16">
                Login
              </button>
            </div>
            {notice.msg ? (
          
          notice.type?
          <>
            {/* <div className="-mb-5 ml-auto mr-auto mt-10  w-96 justify-center break-words border border-green-600  bg-green-50  text-center text-green-500 rounded-lg"> */}
           <div className='bg-emerald-50 border border-emerald-300 text-emerald-500 text-center w-full sm:w-96 -mb-5 break-words ml-auto mr-auto text-sm p-[0.9rem] mt-6 rounded-lg'>
              {notice.msg}
            </div>
          </>
          :
          <>
           <div className='bg-red-100 border border-red-300 text-red-600  w-full sm:w-96 -mb-5 text-center break-words ml-auto mr-auto text-sm p-[0.9rem] mt-6 rounded-lg'>
            {/* <div className="-mb-5 ml-auto mr-auto mt-10  w-96 justify-center break-words border border-red-600  bg-red-50  text-center text-red-500"> */}
              {notice.msg}
            </div>
          </>
        
      ) : (
        <></>
      )}
          </form>
        </div>
        <div className="space-y-8 pt-8">
          <p className="text-center font-black">Or Sign Up With</p>
          <div onClick={()=>{alert("Third party signup option not avaliable yet")}} className="flex justify-center gap-4">
            <BsFacebook size={21} className='text-blue cursor-pointer'/>
            <FcGoogle size={21} className='text-blue cursor-pointer'/>
            <BsLinkedin size={21} className='text-blue cursor-pointer'/>
            <BsTwitter size={21} className='text-blue cursor-pointer'/>
          </div>
          
          <p onClick={handleSignUpClick} className="text-center cursor-pointer font-bold text-blue mt-8">
  Sign Up
</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
