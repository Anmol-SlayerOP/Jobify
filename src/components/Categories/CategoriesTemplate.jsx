import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import CatCard from '../Category/catCard/CatCard'
import { database, project, uiux, seniorDesigner, seniorUIUXDesigner, networkEngineer } from '../../assets/index'

const CategoriesTemplate = ({catTitle, preview, preview2 }) => {
    const [showHideNext, setShowHideNext] = useState(false)

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="category-hero-section w-full md:h-[40vh]">
        <div className="relative flex flex-col items-center justify-center h-full text-center px-5 md:px-64 py-24 bg-[rgba(248,249,254,0.8)]">
          <h4 className="text-sm font-bold uppercase text-[#0071DC]">JOB BY CATEGORIES</h4>
          <h2 className="text-4xl md:text-6xl font-medium text-[#0a0a1b] mt-4"> {catTitle}</h2>          
        </div>
      </section>
      {/* End of Hero Section */}
      
      <section className='px-5 md:px-64 relative mb py-20'>
        {/* Preview Section */}
        <div className="w-full flex flex-col md:flex-row mb-20 md:space-x-4 space-y-4 md:space-y-0">
          {preview}
          {preview2}
        </div>
        {/* End of Preview Section */}

      {/* Current Category Section */}
        {!showHideNext && (
          <div>
            <h2 className='mb-10 text-3xl font-semibold md:text-4xl md:font-bold'>More From Other Categories</h2>
            <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
              <CatCard image={<img src={seniorDesigner} alt='' />} title={"Online English Teachers"} vacancyNum='7' imgBg='bg-[#4c48d9]' />
              <CatCard image={<img src={database} alt='' />} title={"Database Administrator"} />
            </div>
            <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
              <CatCard image={<img src={project} alt='' />} title={"IT Project Manager"} vacancyNum='6' imgBg='bg-[#47586d]' />
              <CatCard image={<img src={uiux} alt='' />} title={"Junior UI/UX Designer"} vacancyNum='5' imgBg='bg-black' />
            </div>
            <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
              <CatCard image={<img src={seniorUIUXDesigner} alt='' />} title={"AI/Machine Learning Engineer"} vacancyNum='6' imgBg='bg-[#93d8de]' />
              <CatCard image={<img src={seniorDesigner} alt='' />} title={"SEO Analiyst & Reviewer"} vacancyNum='1' imgBg='bg-[#4c48d9]' />
            </div>
          </div>
        )}
      {/* End of Current Category Section */}
      
      </section>
      
      {/* Next Category Section */}
      {showHideNext && (
        <section className='px-5 md:px-64 relative mb-20'>
          <h2 className='mb-10 text-3xl font-semibold md:text-4xl md:font-bold'>More From Other Categories</h2>
          <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
            <CatCard image={<img src={networkEngineer} alt='' />} title={"Content Writer and Speaker"} vacancyNum='4' imgBg='bg-[#0071dc]' />
            <CatCard image={<img src={database} alt='' />} title={"Social Media Expert"} vacancyNum='3' />
          </div>
          <div className="w-full flex flex-col md:flex-row mb-4 md:space-x-4 space-y-4 md:space-y-0">
            <CatCard image={<img src={project} alt='' />} title={"Senior UI/UX Designer"} vacancyNum='3' imgBg='bg-[#47586d]' />
          </div>        
        </section>
      )}
      {/* End of Next Category Section */}

      {/* Control Button */}
      <center>
        <button className='bg-[#0071DC] text-white py-4 px-10 rounded-full hover:bg-black mt- transition-colors duration-200 ease-linear' onClick={() => setShowHideNext(!showHideNext)}>
          {showHideNext ? "Previous" : "Next"}
        </button>
      </center>
      {/* End of Control Button */}
      <Footer />
    </div>
  )
}

export default CategoriesTemplate