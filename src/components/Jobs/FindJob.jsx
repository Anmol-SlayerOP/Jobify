import { CiLocationOn, CiSearch } from 'react-icons/ci';


const FindJob = ({query,search,setSearch,selectedOption,setSelectedOption,jobsearch}) => {
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

const handleSearch = (e) => {
  setSearch(e.target.value)
}
const handleSearchSubmit = (e) => {
  e.preventDefault();
   jobsearch();
}

  return (
    < >
      <form onSubmit={handleSearchSubmit}>
      <div data-aos="fade-right" data-aos-once = "true" className='text-gray font-semibold flex flex-col gap-6 sm:gap-3 sm:flex-row w-full justify-center items-center mx-auto bg-white  2xl:py-6 sm:rounded-full sm:w-fit  shadow-xl py-2 px-4'>
           <div className='flex gap-2 sm:border-r border-slate-300 ml-4  '>
            <CiSearch size={40} className='mt-2'/>
            <input type="text"
             placeholder='Job title, Keywords...' 
             value={search} 
             onChange={handleSearch}
             className='p-2 outline-none border-0 w-full'
             />
           </div>
           <div className='flex gap-2  '>
             <CiLocationOn size={40} className='mt-2'/>
            <input type="text"
             placeholder='City or Postcode' 
             value={selectedOption} onChange={handleSelectChange}
             className='p-2 outline-none border-0 w-full'
             />
           </div>
           <button className='bg-blue text-white font-semibold px-12 mx-2 py-3 rounded-full hover:bg-black transition-all ease-in-out duration-500'>
            Find Job
          </button>
       </div>
       </form>
    </>
  )
}

export default FindJob
