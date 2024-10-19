import 'aos/dist/aos.css';
import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dots, flag, hand, logo } from '../../assets/index';
import { selectUsername, setUsername } from '../../redux/userSlice'; // Import action creator

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import Dialog from '../Auth/Dialog';
import Login from '../Auth/Login';
import Catdropdown from './Catdropdown';
import PagesDropdown from './PagesDropdown';


const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername); // Select username from store

  const handleUsernameChange = (v) => {
    dispatch(setUsername(v)); // Dispatch setUsername action
  };
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [option, setOption] = useState('english');
  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleDialog = (v) => {
    setIsShowDialog(v);

  };
  const handlelogout = () => {
  try {
      localStorage.removeItem('jobify_token')
      handleUsernameChange('')
      console.log(localStorage)
      console.log('removed logout')
      navigate('/')
  } catch (error) {
    console.log(error)
  }
  };

  const handleSelect = (e) => {
    setOption(e.target.value);
  };

  const toggleDropdown = () => {  //category
    setIsOpen(!isOpen);
  };
  const togglePages = () => {   //pages
    setPageOpen(!pageOpen);
  };

  const toggleMenu = () => {  //hamburger
    setMenu(!menu);
  };
 
  const dropdownRef = useRef(null);
  const pagesRef = useRef(null);
  const menuRef = useRef(null);
   
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        pagesRef.current && !pagesRef.current.contains(event.target) &&   
        menuRef.current && !menuRef.current.contains(event.target))
         {
          setIsOpen(false);
          setPageOpen(false);
            setMenu(false)
        }
      
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="relative w-[100%]">
        <div className="flex justify-between px-4 py-6  shadow-xl">
          <div className="flex gap-4">
           <Link to="/"> <img src={logo} alt="logo" height={1} className="w-[100px] sm:w-[100px]" /> </Link>
            <div
              className="flex cursor-pointer items-center gap-2 rounded-md bg-black/5 px-4 sm:px-5"
              onClick={toggleDropdown}  ref={dropdownRef}
            >
              <img src={dots} alt="dots" className="hidden sm:block" />
              <div>
                <p className=" font-semibold text-gray sm:text-lg">Category</p>
                <Catdropdown isOpen={isOpen} />
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <Link to="/" className="font-semibold hover:text-blue">
              Home
            </Link>
            <Link to="/about" className="font-semibold hover:text-blue">
              About
            </Link>
            <div onClick={togglePages} ref={pagesRef}>
              <div className="flex cursor-pointer hover:text-blue">
                <span className="font-semibold">Pages</span>
                <MdKeyboardArrowDown size={20} className="mt-1" />
              </div>
              <PagesDropdown pageOpen={pageOpen} />
            </div>

            <Link to="/contact" className="font-semibold hover:text-blue">
              Contact{' '}
            </Link>
            {username ?
             <>
             {username}
             <button
                className="rounded-3xl border border-blue px-3 py-2 font-semibold text-blue transition-all duration-500 ease-in-out hover:bg-blue hover:text-white"
                onClick={()=> handlelogout()}
                >
                Logout
              </button>
             </>
             :
             <> 
            <div className="flex gap-4">
              <button
                className="rounded-3xl border border-blue px-3 py-2 font-semibold text-blue transition-all duration-500 ease-in-out hover:bg-blue hover:text-white"
                onClick={()=> handleDialog(true)}
              >
                Login/Register
              </button>
             
            </div></>}
           
          </div>

          <div 
             ref={menuRef}
            className="block rounded-md bg-gray/10 p-2 focus:bg-blue lg:hidden"
            onClick={toggleMenu}
          >
            <MdMenu size={30} />
          </div>
        </div>

        {menu && (
          <div ref={menuRef} className="fixed left-0 top-0 z-20 flex h-[100vh] w-[200px]  flex-col justify-start gap-6 bg-white px-4 py-4 text-black transition-transform duration-300 ease-in-out sm:w-[300px]  lg:hidden">
            <Link to="/" className="font-semibold">
              Home
            </Link>
            <Link to="/about" className="font-semibold">
              About
            </Link>
            <div ref={pagesRef} onClick={togglePages}>
              <div className="flex cursor-pointer justify-between">
                <span className="font-semibold">Pages</span>
                <MdKeyboardArrowDown size={20} className="mt-1" />
              </div>
              <PagesDropdown  pageOpen={pageOpen} />
            </div>

            <Link to="/contact" className="font-semibold">
              Contact{' '}
            </Link>
            {username ?
             <>
             {username}
             <button
                className="rounded-3xl border border-blue px-3 py-2 font-semibold text-blue transition-all duration-500 ease-in-out hover:bg-blue hover:text-white"
                onClick={()=> handlelogout()}
              >
                Logout
              </button>
             </>
             :
             <> 
            <div className="flex gap-4">
              <button
                className="rounded-3xl border border-blue px-3 py-2 font-semibold text-blue transition-all duration-500 ease-in-out hover:bg-blue hover:text-white"
                onClick={()=> handleDialog(true)}
              >
                Login/Register
              </button>
           
            </div></>}
           
            <div className="mt-8 flex flex-col gap-4 text-lg font-semibold text-black/75">
              <p className="flex gap-2">
                <AiOutlineInstagram size={25} /> 20k followers
              </p>
              <p className="flex gap-2">
                <AiFillFacebook size={24} /> 20k followers
              </p>
              <p className="flex gap-2">
                <IoCall size={22} /> +00 123 456 789
              </p>
            </div>
            <div className="flex gap-2">
              <img src={flag} alt="flag" />
              <select
                value={option}
                onChange={handleSelect}
                className="border-0 bg-transparent text-lg font-semibold text-black outline-none"
              >
                <option value="english" className="text-sm">
                  English
                </option>
                <option value="hindi" disabled className="text-sm">
                  Hindi
                </option>
              </select>
            </div>
          </div>
        )}
      </nav>
   
      {isShowDialog && (
        
        <Dialog handleCloseDialog={()=>handleDialog(false)}>
          <Login handleDialog={handleDialog} isShowDialog={isShowDialog} setIsShowDialog={setIsShowDialog} setUser={handleUsernameChange} />
        </Dialog>
      )}
    </>
  );
};

export default Navbar;
