import ladliImg from '../assets/ladlicollection-img.png';
import ladliImg_2 from '../assets/ladlicollection-img-2.png';
import ladliImg_3 from '../assets/ladlicollection-img-3.png';

import meerImg from '../assets/meer-img.png';
import meerImg_2 from '../assets/meer-img-2.png';
import meerImg_3 from '../assets/meer-img-3.png';
import meerImg_4 from '../assets/meer-img-4.png';

import choghadiyaImg from '../assets/choghadiya-img.png';

import mamaSalonImg from '../assets/mamasalon-img.png';
import mamaSalonImg_2 from '../assets/mamasalon-img-2.png';
import mamaSalonImg_3 from '../assets/mamasalon-img-3.png';
import mamaSalonImg_4 from '../assets/mamasalon-img-4.png';

import rshImg from '../assets/RiddhiSiddhiHomes-img.png';
import rshImg_2 from '../assets/RiddhiSiddhiHomes-img-2.png';
import rshImg_3 from '../assets/RiddhiSiddhiHomes-img-3.png';
import rshImg_4 from '../assets/RiddhiSiddhiHomes-img-4.png';

import scImg from '../assets/shivamcomputer-img.png';
import scImg_2 from '../assets/shivamcomputer-img-2.png';
import scImg_3 from '../assets/shivamcomputer-img-3.png';
import scImg_4 from '../assets/shivamcomputer-img-4.png';

import toolSarkarImg from '../assets/toolsarkar-1.png';
import toolSarkarImg_2 from '../assets/toolsarkar-2.png';
import toolSarkarImg_3 from '../assets/toolsarkar-3.png';
import toolSarkarImg_4 from '../assets/toolsarkar-4.png';

import agarwalImg from '../assets/agarwal-img-1.png';
import agarwalImg_2 from '../assets/agarwal-img-2.png';
import agarwalImg_3 from '../assets/agarwal-img-3.png';
import agarwalImg_4 from '../assets/agarwal-img-4.png';
import agarwalImg_5 from '../assets/agarwal-img-5.png';

export const projectsData = [
  {
    id: 'ladli-collection',
    title: 'Ladli Collection',
    description: 'A React-based e-commerce UI for a local clothing store. It features a modern product catalog, dynamic filtering, and a responsive layout designed to optimize client conversions and highlight special offers.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://ladlicollection.netlify.app/',
    image: ladliImg,
    altText: 'Ladli Collection kids clothing store web interface',
    isClientWork: true,
    clientWork: true,
    gallery: [ladliImg, ladliImg_2, ladliImg_3],
    problem: 'The client needed a highly responsive, modern online storefront representing kids clothing with fast load times and clean filtering to enhance the shopping experience.',
    solution: 'Implemented a custom product catalog utilizing React and Tailwind CSS for atomic styling, enabling lightweight client-side interactions and zero-latency filtering.'
  },
  {
    id: 'meer',
    title: 'Meer',
    description: 'A responsive React business website for a crochet brand, designed to beautifully showcase handmade products and engage prospective customers. Integrated with Appwrite backend services and Razor Pay payment gateway integration.',
    techStack: ['React', 'Appwrite', 'Tailwind', 'Razor Pay', 'API'],
    liveDemoUrl: 'https://meer.co.in/',
    image: meerImg,
    altText: 'Meer handmade crochet products responsive business website',
    isClientWork: true,
    clientWork: true,
    gallery: [meerImg, meerImg_2, meerImg_3, meerImg_4],
    problem: 'Needed a digital storefront and crochet portfolio with reliable payment collection channels and database management for dynamic stock catalog updates.',
    solution: 'Designed a beautiful React site connected to an Appwrite database, using Razor Pay integration to process client bookings and payments securely.'
  },
  {
    id: 'choghadiya-calculator',
    title: 'Choghadiya Calculator',
    description: 'A dynamic web application developed to accurately calculate and display traditional mahurat timings of Vidisha. Utilizes custom calculation algorithms and real-time astronomy APIs to render correct schedules.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://vidisha-mahurat.vercel.app/',
    image: choghadiyaImg,
    altText: 'React-based Choghadiya calculator layout for traditional mahurat timings',
    isClientWork: false,
    gallery: [choghadiyaImg],
    problem: 'Calculating local auspicious hours (Choghadiya) requires complex astrological mathematical algorithms that must run instantly on the user\'s mobile browser.',
    solution: 'Constructed pure mathematical calculation helpers in React to process sunrise/sunset algorithms client-side, using Tailwind for unified styling.'
  },
  {
    id: 'mama-salon',
    title: 'Mama Salon',
    description: 'A responsive React business website for a local beauty salon, designed to showcase salon services, pricing plans, artist profiles, and engage prospective customers for online booking and consultation requests.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://mamasalon.netlify.app/',
    image: mamaSalonImg,
    altText: 'Mama Salon responsive business website displaying salon services',
    isClientWork: true,
    clientWork: true,
    gallery: [mamaSalonImg, mamaSalonImg_2, mamaSalonImg_3, mamaSalonImg_4],
    problem: 'A local beauty salon needed to transition from offline bookings to a streamlined mobile website showcasing services and prices to increase local reach.',
    solution: 'Developed a premium responsive React frontend detailing service catalogs, pricing guides, and contact points, with clean responsive layouts.'
  },
  {
    id: 'riddhi-siddhi-homes',
    title: 'Riddhi Siddhi Homes',
    description: 'A responsive React business website for a real estate agency, designed to beautifully showcase properties, land deals, and residential houses. Integrated with Framer Motion animations, Appwrite for property listings database, and Resend API for lead notifications.',
    techStack: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Appwrite', 'API', 'Resend'],
    liveDemoUrl: 'https://riddhi-siddhi-homes.netlify.app/',
    image: rshImg,
    altText: 'Riddhi Siddhi Homes real estate agency website showcasing property listings',
    isClientWork: true,
    clientWork: true,
    gallery: [rshImg, rshImg_2, rshImg_3, rshImg_4],
    problem: 'Real estate property portfolios require responsive property listings, high-fidelity gallery animations, and instant lead capture forms connected directly to agents.',
    solution: 'Created a modern real estate platform using React, Appwrite for property inventory storage, Framer Motion for smooth transitions, and Resend SDK for lead forms.'
  },
  {
    id: 'shivam-computers',
    title: 'Shivam Computers',
    description: 'A responsive React business website for a computer hardware store, designed to showcase systems, accessories, and components. Integrates Appwrite backend for inventory database management and Resend email forms for quick custom quote queries.',
    techStack: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Appwrite', 'API', 'Resend'],
    liveDemoUrl: 'https://shivamcomputer.shop/',
    image: scImg,
    altText: 'Shivam Computers hardware store website full page layout',
    isClientWork: true,
    clientWork: true,
    gallery: [scImg, scImg_2, scImg_3, scImg_4],
    problem: 'A computer store needed a fast online catalog where users could browse parts and request custom quotes with zero friction.',
    solution: 'Integrated an Appwrite database for parts inventory and a responsive quote builder form using React and the Resend API to deliver requests straight to the store.'
  },
  {
    id: 'toolsarkar',
    title: 'ToolSarkar.com',
    description: 'A full-stack online utility platform offering various web tools. Built with React and Tailwind CSS for a highly responsive interface, and powered by Appwrite backend services for user authentication, database management, and cloud storage.',
    techStack: ['React', 'Appwrite', 'Tailwind CSS'],
    liveDemoUrl: 'https://toolsarkar.com',
    image: toolSarkarImg,
    altText: 'ToolSarkar utility platform screenshot',
    isClientWork: true,
    clientWork: true,
    gallery: [toolSarkarImg, toolSarkarImg_2, toolSarkarImg_3, toolSarkarImg_4],
    problem: 'Designing a centralized suite of web tools that performs fast client-side calculations and converts formats instantly while managing user accounts and history database logs efficiently.',
    solution: 'Leveraged React for swift real-time DOM updates, Tailwind CSS for fluid responsive layouts across all screen dimensions, and integrated Appwrite for serverless authentication and user dashboard data persistence.'
  },
  {
    id: 'agarwal-dharamshala',
    title: 'Agarwal Dharamshala',
    description: 'A comprehensive digital booking and hospitality management application for a community guest house (dharamshala), streamlining room and event bookings, receipt generation, and inventory records.',
    techStack: ['React', 'Appwrite', 'Vite', 'Tailwind'],
    image: agarwalImg,
    altText: 'Agarwal Dharamshala booking system screenshot',
    isClientWork: true,
    clientWork: true,
    gallery: [agarwalImg, agarwalImg_2, agarwalImg_3, agarwalImg_4, agarwalImg_5],
    problem: 'The existing manual room booking registers led to booking overlaps, record discrepancies, and slow receipt processing, causing significant operational delays.',
    solution: 'Developed a complete MERN stack application utilizing MongoDB for transaction-safe record storage, Node.js/Express for robust REST APIs to validate bookings, and React for a clean dashboard to track real-time room availability.'
  }
];
