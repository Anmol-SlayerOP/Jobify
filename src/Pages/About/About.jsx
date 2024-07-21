import React from 'react';
import { Link } from 'react-router-dom';
import { account, bluearrow, jobs, save } from "../../assets/index";
import { IconCard, Title } from '../../components/About';
import { Footer, Navbar } from '../../components/index';

const About = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar/>
      {/* Section 1 */}
      <div className='bg-about bg-cover bg-no-repeat bg-left md:h-[80vh]'>
      <section className="relative w-full">
        <div className="flex flex-col items-center justify-center text-center px-5 md:px-64 py-24" data-aos="fade-up">
          <h4 className="text-sm font-bold capitalize text-[#0071DC]">About Jobify</h4>
          <h2 className="text-4xl sm:5xl lg:text-6xl font-medium text-black/90 mt-4">
            Our mission is to make the best job opportunities present to you.
          </h2>
          <Link to='/jobs' className='bg-[#0071DC] text-white py-2 px-8 rounded-3xl hover:bg-black mt-10 transition-colors duration-200 ease-linear'>
            Start now
          </Link>
          <div className="absolute bottom-8 right-8 md:right-72 w-20 md:w-24">
            <img src={bluearrow} alt="arrow"/>
          </div>
        </div>
      </section>
      </div>
      <section className="section3 py-8 md:py-10 bg-[rgba(248,249,254,0.8)]">
        <div className="flex flex-col items-center justify-center h-full text-center bg-[rgba(248,249,254,0.8)] mx-[5%] lg:w-[80%] lg:mx-[10%] my-10">
          <Title heading={"HOW IT WORKS?"} text1={"Achieve Your Goals in"} text2={"3 Simple Steps"} />
          <div className="flex flex-col lg:flex-row md:justify-between mt-10 md:space-x-4 md:space-y-0 space-y-4">
          <IconCard
  image={<img src={account} alt="" className='w-10' />}
  heading={"Create An Account"}
  text={"Sign up to manage your job applications, save your searches, and receive personalized job recommendations."}
/>
<IconCard
  image={<img src={jobs} alt="" className='w-10' />}
  heading={"Explore Job Opportunities"}
  text={"Explore thousands of job opportunities tailored to your skills and preferences."}
/>
<IconCard
  image={<img src={save} alt="" className='w-10' />}
  heading={"Save Favorites & Apply"}
  text={"Save jobs that interest you and apply easily with your saved resume and cover letter."}
/>
          </div>
        </div>
      </section>
      {/* End of Section 3 */}

      {/* Section 4 */}
      <section className="section4 py-24 mx-[5%] lg:w-[80%] lg:mx-[10%]">
        <div className="relative flex flex-col items-center justify-center h-full text-center border-[1px] border-gray-300 rounded-xl px-5 md:px-36 py-24 md:py-28 space-y-5">
          <h2 className="text-2xl md:text-4xl font-medium text-[#0a0a1b] mt-4">
            Are You Ready To Start <br className='hidden md:block' /> Your Journey?
          </h2>
          <p className='text-base font-semibold opacity-70'>
        
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-5">
            <Link to='/post' className='bg-[#0071DC] text-white py-3 px-8 rounded-3xl hover:bg-black mt-10 transition-colors duration-200 ease-linear'>
              Post a Featured Job
            </Link>
            <Link to='/jobs' className='bg-white border-[1px] border-[#0071DC] hover:bg-[#0071DC] hover:text-white py-3 px-8 rounded-3xl mt-5 md:mt-10 transition-colors duration-200 ease-linear'>
              Find a Free Job
            </Link>
          </div>
          <div className="absolute bottom-20 md:bottom-20 left-12 md:left-28 w-24">
            <img src={bluearrow} alt="" />
          </div>
        </div>  
      </section>
      {/* End of Section 4 */}
      <Footer/>
    </div>
    
  )
}

export default About
