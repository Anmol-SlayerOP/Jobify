import React from 'react'
import { Details, Footer, Navbar, Post } from '../../components/index'

const JobPost = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar/>
       <Post/>
       <Details/>
      <Footer/>
    </div>
  )
}

export default JobPost
