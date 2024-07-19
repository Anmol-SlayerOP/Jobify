# Jobify - Your Ultimate Job Finder


-   Backend API repo is here: https://github.com/Anmol-SlayerOP/Jobify-API
-   Try the app here: 

## Summary for Project

A React.js frontend application for job searching and management. Built with Tailwind CSS and Redux, this application provides features for job searching, saving, marking, and creating featured jobs, as well as generating resumes tailored according to Job Description

![logo](https://i.ibb.co/FBG6gVz/Jobify-Logo.png)

## Pages
Homepage:
![Homepage](https://drive.google.com/uc?id=1ovUXgMELeSA-EkRDBKOnfwLLqBx5qbpc)


SearchPage:
![Search Page](https://drive.google.com/uc?id=1qNQdzWFCbMzx8VJPyUAnk8h3TRtI92zp)

Jobs List:
![Jobs List](https://drive.google.com/uc?id=1BVHDW4_yBMkLWKQtdlLLt95tTfMHNc_n)

JobDetail:
![Job Detail](https://drive.google.com/uc?id=1mZ-60mjOx3qLaSUGkkb7feugnID-kN1v)

Dashboard:
![Dashboard](https://drive.google.com/uc?id=1T2QcSvweSmIH57xnrcNaVf_5pMMZFmkx)

Generated Resume:
![Resume Generated Page](https://drive.google.com/uc?id=1k67q5pI3MJ3jHWUWJgNptKEKqsr2_6h2)





## Features

- **Auth**: Login/Sign Up with feature of email verification and password reset
- **Job Search**: Search for jobs using an external API.
- **Job Marking**: Mark jobs as saved and/or important.
- **Featured Job Creation**: Create and manage featured job listings.
- **Resume Generation**: Generate resumes tailored to job searches.
- **Dashboard**: To check for Jobs Marked


## Pages Summary

- **About**: Information about the application.
- **Contact**: Contact details.
- **Dashboard**: User dashboard with job-related sections.
- **Error**: Error page for handling unexpected issues.
- **Forgot Password**: Password recovery page.
- **Home**: Landing page of the application with option to directly search jobs.
- **JobDetail**: Detailed view of a job listing.
- **JobPost**: Page for posting new jobs.
- **Jobs**: Job search and listing page.
- **Password Change**: Page for changing user passwords.
- **Reset Password**: Page for resetting forgotten passwords.
- **SignUp**: User registration page.
- **Style Guide**: Styling and design guidelines.
- **Verify Email**: Email verification page for new users.


## Redux

The application uses Redux for state management to save Job search data returned by Backend and also store isAuth value.

## Installation and Setup

1. Clone the repository.
2. Install dependencies:
```bash
 - npm install
```
3. Run the server
```bash
- npm run dev
```


### Backend Connection

- Change API_URL in App.jsx to your Backend API URL

## Some Limitations
As the Project uses a free-plan external API for latest Job search so the functionality of job search is limited to 7 times per 10 minutes per User and Also due to free plan restrictions of Vercel (not supporting always on servers) I cannot do Job Scraping hence have to use external api leading to limited job search functionality .




If you'd like to talk, you can contact me here: https://www.linkedin.com/in/anmol-nag-965151197/

