import axios from 'axios';
import {API_URL} from '../App'
import { toast } from 'react-toastify';
function handleresume (item)  {
  toast.loading('Generating Resume...');
    console.log(item)
    let prompt = ` I am Anmol Nag working as ${item.position} and my phone number is 123-456-7890 with 0-2years of experience. Write me a resume with highlights, metrics. For the following job description: \n${item.description},\n  following job requirement:\n ${item.requirements}\n and following resposibilities :\n ${item.responsibilities}.Kindly give response in html with required margins and padding `
    
 let data = JSON.stringify({
   "prompt": `${prompt}`
 });
 
 let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url: `${API_URL}/externalapis/ai/generateresume`,
   headers: { 
     'Content-Type': 'application/json', 
     authorization: `Bearer ${localStorage.getItem('jobify_token')}`
   },
   data : data
 };
 
 axios.request(config)
 .then((response) => {
  toast.dismiss()
   console.log(JSON.stringify(response.data));
   const newWindow = window.open('', '_blank');
   if (newWindow) {
     newWindow.document.write(`<html><head><title>Resume for ${item.position} </title></head><body contenteditable="true">`);
     newWindow.document.write( response.data ); // Display the response data
     newWindow.document.write('</body></html>');
     newWindow.document.close();
   } else {
   toast.error("kindly allow popus to show generated resume in new window");
     console.error('Failed to open a new window');
   }
 })
 .catch((error) => {

  toast.dismiss();
  let msg= error?.response?.data?.msg || "Something Went Wrong Make sure to be Logged In"
  toast.error(msg)
   console.log(error);
 });
 
 
   };

   export default handleresume;