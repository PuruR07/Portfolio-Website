import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ProjectCard';
import ladliImg from '../assets/ladlicollection-img.png';
import meerImg from '../assets/meer-img.png';
import choghadiyaImg from '../assets/choghadiya-img.png';
import mamaSalonImg from '../assets/mamasalon-img.png';
import rshImg from '../assets/RiddhiSiddhiHomes-img.png';
import scImg from '../assets/shivamcomputer-img.png';

const projectsData = [
  {
    title: 'Ladli Collection',
    description: 'A React-based e-commerce UI for a local clothing store. It features a modern product catalog, dynamic filtering',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://ladlicollection.netlify.app/',
    image: ladliImg,
    isClientWork: true
  },
  {
    title: 'Meer',
    description: 'A responsive React business website for a crochet brand, designed to beautifully showcase handmade products and engage prospective customers.',
    techStack: ['React', 'Appwrite', 'Tailwind', 'Razor Pay', 'API'],
    liveDemoUrl: 'https://meer.co.in/',
    image: meerImg,
    isClientWork: true
  },
  {
    title: 'Choghadiya Calculator',
    description: 'A dynamic web application developed to accurately calculate and display traditional mahurat timings of Vidisha.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://vidisha-mahurat.vercel.app/',
    image: choghadiyaImg,
    isClientWork: false
  },
  {
    title: 'Mama Salon',
    description: 'A responsive React business website for a salon, designed to beautifully showcase salon services and engage prospective customers.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://mamasalon.netlify.app/',
    image: mamaSalonImg,
    isClientWork: true
  },
  {
    title: 'Riddhi Siddhi Homes',
    description: 'A responsive React business website for a real estate agency, designed to beautifully showcase properties and engage prospective buyers.',
    techStack: ['React', 'Vite', 'Tailwind', 'Frame Motion', 'Appwrite', 'API', 'Resend'],
    liveDemoUrl: 'https://riddhi-siddhi-homes.netlify.app/',
    image: rshImg,
    isClientWork: true
  },
  {
    title: 'Shivam Computers',
    description: 'A responsive React business website for a computer hardware store, designed to beautifully showcase products and engage prospective customers.',
    techStack: ['React', 'Vite', 'Tailwind', 'Frame Motion', 'Appwrite', 'API', 'Resend'],
    liveDemoUrl: 'https://shivamcomputers.shop/',
    image: scImg,
    isClientWork: true
  }
];

const Projects = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-header', {
      scrollTrigger: {
        trigger: '.projects-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  const clientProjects = projectsData.filter(p => p.isClientWork);
  const demoProjects = projectsData.filter(p => !p.isClientWork);

  return (
    <section ref={container} className="px-6 md:px-12 mb-48 pt-24" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 projects-header">
        <h2 className="font-headline text-5xl md:text-6xl tracking-tighter uppercase mb-4 md:mb-0 text-white">Selected works</h2>
        <div className="w-full md:w-1/3 h-[1px] bg-outline-variant/30 hidden md:block mx-12"></div>
        <p className="font-label text-xs tracking-[0.3em] uppercase text-outline">Vol. 01 — 24</p>
      </div>

      {clientProjects.length > 0 && (
        <div className="mb-32">
          <h3 className="font-headline text-3xl md:text-4xl tracking-tighter uppercase mb-16 text-primary">Client Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16">
            {clientProjects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                title={project.title}
                techStack={project.techStack}
                liveDemoUrl={project.liveDemoUrl}
                image={project.image}
                isClientWork={true}
              />
            ))}
          </div>
        </div>
      )}

      {demoProjects.length > 0 && (
        <div>
          <h3 className="font-headline text-3xl md:text-4xl tracking-tighter uppercase mb-16 text-white">Demo Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16">
            {demoProjects.map((project, index) => (
              <ProjectCard
                key={index}
                index={clientProjects.length + index}
                title={project.title}
                techStack={project.techStack}
                liveDemoUrl={project.liveDemoUrl}
                image={project.image}
                isClientWork={false}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
