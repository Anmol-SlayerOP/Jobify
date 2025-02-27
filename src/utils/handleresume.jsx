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
  //  if (newWindow) {
  //     newWindow.document.write(`
  //       <html>
  //         <head>
  //           <title>Resume for ${item.position}</title>
  //           <script>
  //             function printResume() {
  //               // Hide the print button before printing
  //               document.getElementById('printButton').style.display = 'none';
  //               window.print();
  //               // Show the print button again after printing
  //               document.getElementById('printButton').style.display = 'block';
  //             }
  //           </script>
  //         </head>
  //         <body>
  //           <button id="printButton" onClick="printResume()">Print This Page</button>
  //           ${response.data} 
  //         </body>
  //       </html>
  //     `);

  //     newWindow.document.close();
  //  }
  if (newWindow) {
    newWindow.document.write(`
    <html>
    <head>
      <title>Resume for ${item.position}</title>
      <style>
      @media print {
        @page {
          margin: 0;
          size: auto;
        }
        body {
          margin: 0;
        }
      }
      #button-jobify-container {
        text-align: center; 
      }
      #printButtonResume {
        margin-top:20px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        margin-bottom: 20px;
      }
      #printButtonResume:hover {
        background-color: #0056b3;
      }
      </style>
      <script>
        function printResume() {
          document.getElementById('button-jobify-container').style.display = 'none';
          window.print();
          document.getElementById('button-jobify-container').style.display = 'block';
        }
      </script>
    </head>
    <body>
    <div id="button-jobify-container">
      <button id="printButtonResume" onClick="printResume()">Print This Page</button>
         &nbsp &nbsp Also, You can edit this Page.
    </div>
      <div class="resume-jobify-content" contentEditable="true">
             ${response.data} <!-- Display the response data -->
        </div>
      </body>
    </html>
    `);
    
    newWindow.document.close();   
  
  }

   else {
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