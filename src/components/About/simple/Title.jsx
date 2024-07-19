import React from 'react'

const Title = ({heading, text1, text2}) => {
  return (
    <div data-aos="fade-up">
        <h4 className="text-sm font-bold uppercase text-[#0071DC]">{heading}</h4>
        <h2 className="text-3xl md:text-5xl font-medium text-[#0a0a1b] mt-4">
            {text1} <br className='hidden md:block' /> {text2}
        </h2>
    </div>
  )
}

export default Title