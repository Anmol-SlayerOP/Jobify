import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/index';




const transition = 'transition-all ease-in-out duration-500';
const Footer = () => {
  return (
    <footer className="bg-blue/5">
      <div className='mx-[5%] mt-[50px] w-[90%] pt-10 lg:mx-[10%] lg:w-[80%]'>
      <section className="mb-8 flex gap-8 flex-wrap lg:flex-nowrap">

        <article className="w-full sm:w-2/4 lg:w-1/4" data-aos="fade-right" data-aos-duration="2000">
          <img src={logo} alt="logo" className="w-[100px] sm:w-[180px]" />
          <p className="my-6 text-lg font-semibold text-gray">
           Your last destination for Job Search 
          </p>
          <div className="mr-2 flex items-center gap-2 border-r border-white/70">
            <FaFacebookF
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
            <AiOutlineTwitter
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
            <FaGithub
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
            <AiOutlineInstagram
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
          </div>
         <Link to="/jobs" >  <div className="group mt-4 flex cursor-pointer items-center gap-1 text-blue">
            <p className="text-xl font-semibold">Let's Start</p>
            <BsArrowRightShort
              size={30}
              className={`${transition} group-hover:ml-2`}
            />
          </div>
          </Link>
        </article>

        <article
          className=" w-full sm:w-2/4 lg:w-1/4"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h3 className="text-xl font-bold">Main Pages</h3>
          <Link to="/">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Home
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              About Us
            </p>
          </Link>
          {/* <Link to="/blogs">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Blog Pages
            </p>
          </Link> */}
          <Link to="/contact">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Contact Page
            </p>
          </Link>
          <Link to="/styles">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Style Docs
            </p>
          </Link>
          <Link to="/jobs">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Services
            </p>
          </Link>
        </article>

        <article
          className="w-full sm:w-2/4 lg:w-1/4"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="text-xl font-bold">Quick Links</h3>
          <Link to="/signup">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Sign Up
            </p>
          </Link>
          <Link to="*">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              404 Pages
            </p>
          </Link>
          {/* <Link to="/password">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Password Safe
            </p>
          </Link> */}
          <Link to="/license">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Licenses
            </p>
          </Link>
          <Link to="/changelog">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Changelog
            </p>
          </Link>
          <Link to="/jobs">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Jobs
            </p>
          </Link>
        </article>

        <article
          className="w-full sm:w-2/4 lg:w-1/4"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h3 className="text-xl font-bold">Contact Info</h3>
          <p className="my-1 text-lg font-semibold text-gray">
            Phone:+91 123 456 789
          </p>
          <p className="my-1 text-lg font-semibold text-gray">
            anmolnag576@gmail.com
          </p>
          <p className="my-1 text-lg font-semibold text-gray">
            IIIT Lucknow
          </p>
          {/* <div className="mr-2 flex items-center mt-5 gap-3 border-r border-white/70">
              <AiFillFacebook size={30} />
              <AiOutlineTwitter size={30} />
              <FaLinkedinIn size={30} />
              <AiOutlineInstagram size={30} className="mr-2" />
            </div> */}
          {/* <div className="mt-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="my-1 text-lg font-semibold text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  adipisci fuga, quis vero voluptas error commodi odio placeat. 
            </p>
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-[80%] rounded-sm border border-gray px-4 py-0 outline-none"
            />
            <BsArrowRightShort
              size={50}
              className={`${transition} rounded-sm bg-blue px-2 text-white hover:bg-black`}
            />
          </div> */}
        </article>
      </section>
      <hr className="border border-gray/30" />
      <p
        className="my-6 text-center text-sm font-semibold text-black/80 sm:text-xl"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Copyright © Jobify - Made With ❤️
        <Link to="/" className="hover:text-blue">
          {' '}
          by Anmol
        </Link>
        
      </p>
      </div>
    </footer>
  );
};

export default Footer;
