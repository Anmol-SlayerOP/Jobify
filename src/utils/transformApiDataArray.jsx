function transformApiDataArray (apidataArray){

    function transformApiDataObjects(apiData) {
      const transformedData = {
          id: apiData.job_id, // Assuming this is auto-generated
          image: apiData.employer_logo || 'default_logo_url', // Default image URL
          name: apiData.employer_name || 'Unknown Employer',
          position: apiData.job_title || 'Unknown Position',
          location: apiData.job_location || `${apiData.job_city || 'Unknown City'}, ${apiData.job_state || 'Unknown State'}, ${apiData.job_country || 'Unknown Country'}`,
          date: apiData.job_posted_at_timestamp ? new Date(apiData.job_posted_at_timestamp * 1000).toLocaleDateString("en-GB") : 'Unknown Date',
          deadline : apiData.job_offer_expiration_datetime_utc ?  new Date(apiData.job_offer_expiration_timestamp * 1000).toDateString() : 'September 20, 2025',
          fullTime: apiData.job_employment_type === "FULLTIME",
          partTime: apiData.job_employment_type === "PARTTIME",
          contract: apiData.job_employment_type === "CONTRACTOR",
          remote: apiData.job_is_remote !== undefined ? apiData.job_is_remote : false,
          onsite: apiData.job_is_remote !== undefined ? !apiData.job_is_remote : false,
          minPrice: ((apiData.job_highlights && apiData.job_highlights.Benefits ? apiData.job_highlights.Benefits[1] : 'Unknown Salary') || apiData.min_salary ) || 'N/A' ,// Extracting min salary
          maxPrice: ((apiData.job_highlights && apiData.job_highlights.Benefits ? apiData.job_highlights.Benefits[2] : 'Unknown Salary') || apiData.min_salary ) || 'N/A' , // Extracting max salary
          per: apiData.job_salary_period || 'Month', // Assuming month if not provided
          description: apiData.job_description || 'No description available',
          requirements: apiData.job_highlights && apiData.job_highlights.Qualifications ? apiData.job_highlights.Qualifications.join('\n') : 'No requirements specified',
          responsibilities: apiData.job_highlights && apiData.job_highlights.Responsibilities ? apiData.job_highlights.Responsibilities.join('\n') : 'No responsibilities specified',
          vacancy: 1, // Assuming 1 if not provided    CHANGE THIS
          apply_link:apiData.job_apply_link,
          // Additional fields
          availability: "Hourly", // Default value
          education: apiData.job_required_education && apiData.job_required_education.bachelors_degree ? "Graduate" : "Not Specified",
          gender: "Not Specified", // Default value
          age: "21+", // Default value
          experience: apiData?.job_required_experience?.required_experience_in_months ? `${apiData?.job_required_experience?.required_experience_in_months} months`: ( apiData.job_required_experience && apiData.job_required_experience.experience_mentioned ? "3 - 5 Years" : "Not Specified"),
          language: "English" // Default value
      };
      
      // SCRAP data 
      // company_name: Matches apiData.company_name.
      // job_profile: Matches apiData.job_profile.
      // skills_required: Matches apiData.skills_required.
      // location: Matches apiData.location.
      // job_publish_date: we cannot get so write give as extra
  
      // apply_link: Matches apiData.apply_link.
  
      return transformedData;
    }
    
    return apidataArray.map(apidata => transformApiDataObjects(apidata));
  }
export default transformApiDataArray;