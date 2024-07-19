import React, { useEffect, useState } from 'react';
import { API_URL } from '../../App';
import { toast } from 'react-toastify';

function Details() {
    const [formData, setFormData] = useState({
      job_id: '',
      employer_logo: '',
      employer_name: '',
      job_title: '',
      job_city: '',
      job_state: '',
      job_country: '',
      job_posted_at_timestamp: '',
      job_offer_expiration_datetime_utc: '',
      job_employment_type: '',
      job_is_remote: false,
      min_salary: '',
      max_salary: '',
      job_salary_period: '',
      job_description: '',
      job_highlights: {
        Benefits: [''],
        Qualifications: [''],
        Responsibilities: ['']
      },
      job_apply_link: '',
      job_required_education: {
        bachelors_degree: false
      },
      job_required_experience: {
        required_experience_in_months: 0,
        experience_mentioned: false
      },
      availability: '',
      education: '',
      gender: '',
      age: '',
      experience: '',
      language: ''
    });
   useEffect(()=>{
     let a= localStorage.getItem('post_job_form_data');
     if (a) {
      setFormData(JSON.parse(a));
     }
   toast.success('Form Data retrieved from local storage');
    // alert('Form Data retrieved from Local Storage');
   },[]);
   useEffect(()=>{
      localStorage.setItem('post_job_form_data',JSON.stringify(formData));

   },[formData]);
    const handleHighlightsChange = (e) => {
      const { name, value, type, checked } = e.target;
    
      setFormData((prevState) => {
        const updatedHighlights = { ...prevState.job_highlights };
    
        // Update only the first element (index 0) of the relevant array
        updatedHighlights[name] = [value];
    
        return {
          ...prevState,
          job_highlights: updatedHighlights,
        };
      });
    };
    const handleExperienceChange = (e) => {
      const {  value, type, checked } = e.target;
      if (type === 'checkbox') {
           setFormData(prevState=>({...prevState,job_required_experience:{
             required_experience_in_months :prevState.job_required_experience.required_experience_in_months,
             experience_mentioned:checked
           }}));
          }
          else{
        setFormData(prevState=>({...prevState,job_required_experience:{
          required_experience_in_months :value,
          experience_mentioned:prevState.job_required_experience.experience_mentioned
        }}));

      }
    }

    const handleChange = (e) => {
      const { name, value, type, checked,object } = e.target;
      if (type === 'checkbox') {
        setFormData(prevState => ({
          ...prevState,
          [name]: checked
        }));
      } 
      
      else{
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData)
  
      try {
        const response = await fetch(`${API_URL}/jobs/newjob`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('jobify_token')}`
          },
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok',response);
        }
        const data = await response.json();
        console.log("Form posted response recieved :-  ",data.message);
  
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h4 className="text-center text-blue block text-gray-700 text-3xl font-bold mb-2">Fill Form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job ID:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_id"
                value={formData.job_id}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employer Logo Link:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="employer_logo"
                value={formData.employer_logo}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employer Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="employer_name"
                value={formData.employer_name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Title:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job City:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_city"
                value={formData.job_city}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job State:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_state"
                value={formData.job_state}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Country:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_country"
                value={formData.job_country}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Posted At Timestamp:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="job_posted_at_timestamp"
                value={formData.job_posted_at_timestamp}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Offer Expiration Date (UTC):
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_offer_expiration_datetime_utc"
                value={formData.job_offer_expiration_datetime_utc}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employment Type:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_employment_type"
                value={formData.job_employment_type}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Is Remote:
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                name="job_is_remote"
                checked={formData.job_is_remote}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Min Salary:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="min_salary"
                value={formData.min_salary}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Max Salary:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="max_salary"
                value={formData.max_salary}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Salary Period:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_salary_period"
                value={formData.job_salary_period}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Job Description:
              <textarea
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Benefits:
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="Benefits"
                value={formData.job_highlights.Benefits[0]}
                onChange={handleHighlightsChange}
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Qualifications:
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="Qualifications"
                value={formData.job_highlights.Qualifications[0]}
                onChange={handleHighlightsChange}
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Responsibilities:
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="Responsibilities"
                value={formData.job_highlights.Responsibilities[0]}
                onChange={handleHighlightsChange}
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apply Link:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="job_apply_link"
                value={formData.job_apply_link}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Required Education (Bachelor's Degree):
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                name="job_required_education"
                checked={formData.job_required_education.bachelors_degree}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Experience Mentioned:
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                name="job_required_experience_mentioned"
                checked={formData.job_required_experience.experience_mentioned}
                onChange={handleExperienceChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Required Experience (Months):
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                object={true}
                name="job_required_experience_in_months"
                value={formData.job_required_experience.required_experience_in_months}
                onChange={handleExperienceChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Availability:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Education:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Age:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Experience:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Language:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
              />
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  
export default Details;



// const Details = () => {
//   const [switchForm, setSwitchForm] = useState(true)
//   const [clickJob, setClickJob] = useState(false);
//   const [clickCompany, setClickCompany] = useState(true);


//   const handleJob = () => {
//     setSwitchForm(false)
//     setClickJob(true);
//     setClickCompany(false);
//   };

//   const handleCompany = () => {
//     setSwitchForm(true);
//     setClickJob(false);
//     setClickCompany(true);
//   }

//   return (
//     <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] my-[100px]'>
//        <div className='flex justify-center items-center text-center gap-6 cursor-pointer flex-col sm:flex-row'>
//          <h1 className={`${headStyle} ${clickJob ? 'border-blue' : 'border-transparent'}`} onClick={handleJob}>
//             Job Details
//           </h1>
//          <h1 className={`${headStyle} ${clickCompany ? 'border-blue' : 'border-transparent'}`} onClick={handleCompany}>
//           Company Details
//         </h1>
//        </div>
//        <hr className='border border-gray/20'/>

//        <form className="mt-8 w-full rounded-md p-8 shadow-lg sm:mx-[10%] sm:w-[80%] lg:mx-[15%] lg:w-[70%]">
//         {switchForm ?   <CompanyDetails/> : <Jobdetails/> }
//        </form>
//     </section>
//   )
// }

// export default Details
