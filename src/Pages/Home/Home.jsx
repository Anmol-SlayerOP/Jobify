import React from 'react';
import {
  About,
  Achievement, Categories,
  Footer,
  Hero,
  Jobs,
  Navbar
} from '../../components/index';


const Home = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Achievement/>
      <Categories/>
      <Jobs a/>
      <About/>
      {/* <Testimonial/> */}
      {/* <Benefit/> */}
      {/* <Download/> */}
      {/* <Blogs/> */}
      <Footer/>
    </div>
  )
}

export default Home
