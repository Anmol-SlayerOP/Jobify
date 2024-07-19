 import { aijob, database, project, uiux } from "../../assets";

export let companyDetails =[
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png',
    name : "Google LLC.",
    location : "Mountain View, CA, USA"
  },
  {
    image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/facebook-2752192-2285009.png?f=webp&w=256',
    name :  "Facebook",
    location : "Menlo Park, CA, USA"
  },
  {
    image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/youtube-3856171-3201504.png?f=webp&w=256',
    name :  "Youtube",
    location : "San Bruno, CA, USA"
  },
  // {
  //   image: uiux,
  //   name : "Google LLC."
  // },
  // {
  //   image: database,
  //   name :  "Facebook"
  // },
  // {
  //   image: uiux,
  //   name :  "Youtube"
  // },
]


 export const perPage =[
  {
    id: 1 ,
    item: "10 Per Page",
    val: 10
  },
  {
    id: 2 ,
    item: "20 Per Page",
    val: 20
  },
  {
    id: 3 ,
    item: "30 Per Page",
    val: 30
  },
  {
    id: 4 ,
    item: "40 Per Page",
    val: 40
  },
 ]
 export const shortBy =[
{
  id:1,
  item: "Short By (Default)"
},
{
  id:2,
  item: "Short By (Date)"
},
{
  id:3,
  item: "Short By (Salary)"
},
{
  id:4,
  item: "Short By (Remote)"
},
 ]


 export const cartData = [
    {
      id: "0",
      item: "Job Category",
    },
    {
      id : 1,
      item: "Art & Design",
    },
    {
      id : 2,
      item: "Health & Fitness",
    },
    {
      id : 3,
      item: "Finance & Business",
    },
    {
      id : 4,
      item: "Art & Music",
    },
    {
      id : 5,
      item: "Marketing",
    },
    {
      id : 6,
      item: "Teaching & Study",
    },
    {
      id : 7,
      item: "Photography",
    },
    {
      id : 8,
      item: "It Management",
    },
  ];

 export let companyData = [
  {
    id: '1',
    image: project,
    name: 'Rockstar Games New York',
    position: 'Online English Teachers',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'This role involves teaching English to online students. You will create and deliver engaging and interactive lessons to help students improve their English language skills.',
    requirements: '1. Bachelor\'s degree in English or related field\n2. TEFL or TESOL certification\n3. Strong communication skills',
    responsibilities: '1. Conduct online English classes\n2. Prepare and deliver lessons\n3. Assess student progress and provide feedback',
    vacancy: 3,
    apply_link:'#'
  },
  {
    id: '2',
    image: database,
    name: 'Rockstar Games New York',
    position: 'Database Administrator',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'As a Database Administrator, you will be responsible for managing and maintaining the company\'s databases, ensuring data security, and optimizing database performance.',
    requirements: '1. Bachelor\'s degree in computer science or a related field\n2. Proven experience in database management\n3. Knowledge of SQL and database optimization',
    responsibilities: '1. Install and configure database systems\n2. Monitor database performance\n3. Ensure data security and integrity',
    vacancy: 2,
    apply_link:'#'
  },
  {
    id: '3',
    image: project,
    name: 'Rockstar Games New York',
    position: 'IT Project Manager',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'The IT Project Manager will lead and oversee IT projects, ensuring they are completed on time and within budget. This role involves managing project teams and resources.',
    requirements: '1. Bachelor\'s degree in IT or a related field\n2. Proven experience in IT project management\n3. Strong leadership and communication skills',
    responsibilities: '1. Plan and execute IT projects\n2. Manage project teams and resources\n3. Monitor project progress and report to stakeholders',
    vacancy: 1,
    apply_link:'#'
  },
  {
    id: '4',
    image: uiux,
    name: 'Rockstar Games New York',
    position: 'Junior UI/UX Designer',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'The Junior UI/UX Designer will work on creating user-friendly and visually appealing interfaces. You will collaborate with the design team to create wireframes and prototypes.',
    requirements: '1. Bachelor\'s degree in design or a related field\n2. Proficiency in design software\n3. Strong design and problem-solving skills',
    responsibilities: '1. Collaborate with the design team\n2. Create wireframes and prototypes\n3. Conduct user research and testing',
    vacancy: 2,
    apply_link:'#'
  },
  {
    id: '5',
    image: aijob,
    name: 'Rockstar Games New York',
    position: 'AI/Machine Learning Engineer',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'The AI/Machine Learning Engineer will work on developing and implementing machine learning algorithms and models. You will collaborate with the data science team to analyze and interpret data.',
    requirements: '1. Master\'s degree in AI, machine learning, or a related field\n2. Proficiency in machine learning frameworks\n3. Strong analytical and problem-solving skills',
    responsibilities: '1. Develop machine learning models\n2. Collaborate with the data science team\n3. Analyze and interpret data for insights',
    vacancy: 4,
    apply_link:'#'
  },
  {
    id: '6',
    image: uiux,
    name: 'Rockstar Games New York',
    position: 'SEO Analyst & Reviewer',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'As an SEO Analyst & Reviewer, you will be responsible for optimizing website content and analyzing SEO performance. You will conduct reviews to improve search engine rankings.',
    requirements: '1. Bachelor\'s degree in marketing or a related field\n2. Proven experience in SEO\n3. Strong analytical skills',
    responsibilities: '1. Optimize website content for SEO\n2. Analyze SEO performance\n3. Conduct reviews to improve search engine rankings',
    vacancy: 2,
    apply_link:'#'
  },
  {
    id: '7',
    image: project,
    name: 'Rockstar Games New York',
    position: 'Content Writer and Speaker',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'The Content Writer and Speaker will create engaging content for the company\'s audience. You will also participate in speaking engagements and presentations.',
    requirements: '1. Bachelor\'s degree in journalism, communications, or a related field\n2. Strong writing and speaking skills\n3. Creative and engaging content creation',
    responsibilities: '1. Create engaging content for various platforms\n2. Participate in speaking engagements and presentations\n3. Engage with the audience and build relationships',
    vacancy: 3,
    apply_link:'#'
  },
  {
    id: '8',
    image: database,
    name: 'Rockstar Games New York',
    position: 'Social Media Expert',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'The Social Media Expert will manage and optimize the company\'s social media presence. You will develop and implement social media strategies to engage the audience.',
    requirements: '1. Bachelor\'s degree in marketing or a related field\n2. Proven experience in social media management\n3. Knowledge of social media platforms',
    responsibilities: '1. Manage and optimize social media presence\n2. Develop and implement social media strategies\n3. Engage with the audience and monitor performance',
    vacancy: 2,
    apply_link:'#'
  },
  {
    id: '9',
    image: project,
    name: 'Rockstar Games New York',
    position: 'Senior UI/UX Designer',
    location: 'Las Vegas, USA',
    date: '2 Days ago',
    deadline : 'September 20, 2025',
    fullTime: true,
    partTime: false,
    contract: false,
    remote: true,
    onsite: false,
    minPrice: '$23,000',
    maxPrice: '$25,000',
    per: 'Month',
    description: 'The Senior UI/UX Designer will lead design projects and mentor junior designers. You will be responsible for creating user-friendly interfaces and improving user experiences.',
    requirements: '1. Bachelor\'s degree in design or a related field\n2. Proven experience in UI/UX design\n3. Leadership and mentoring skills',
    responsibilities: '1. Lead design projects and mentor junior designers\n2. Create user-friendly interfaces\n3. Improve user experiences and design consistency',
    vacancy: 1,
    apply_link:'#'
  },
];

  