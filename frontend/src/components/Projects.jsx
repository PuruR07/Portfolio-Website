import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ProjectCard';
import ladliImg from '../assets/ladlicollection-img.png';
import meerImg from '../assets/meer-img.png';
import choghadiyaImg from '../assets/choghadiya-img.png';
import mamaSalonImg from '../assets/mamasalon-img.png';

const projectsData = [
  {
    title: 'Ladli Collection',
    description: 'A React-based e-commerce UI for a local clothing store. It features a modern product catalog, dynamic filtering',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://ladlicollection.netlify.app/',
    githubUrl: 'https://github.com/PuruR07/ladlicollection',
    image: ladliImg
  },
  {
    title: 'Meer',
    description: 'A responsive React business website for a crochet brand, designed to beautifully showcase handmade products and engage prospective customers.',
    techStack: ['React', 'Appwrite', 'Tailwind', 'Razor Pay', 'API'],
    liveDemoUrl: 'https://meer.co.in/',
    githubUrl: 'https://github.com/PuruR07/Meer',
    image: meerImg
  },
  {
    title: 'Choghadiya Calculator',
    description: 'A dynamic web application developed to accurately calculate and display traditional mahurat timings of Vidisha.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://vidisha-mahurat.vercel.app/',
    githubUrl: 'https://github.com/PuruR07/MahuratApp',
    image: choghadiyaImg
  },
  {
    title: 'Mama Salon',
    description: 'A responsive React business website for a salon, designed to beautifully showcase salon services and engage prospective customers.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://mamasalon.netlify.app/',
    githubUrl: 'https://github.com/PuruR07/Mama-Salon',
    image: mamaSalonImg
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

  return (
    <section ref={container} className="px-6 md:px-12 mb-48 pt-24" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 projects-header">
        <h2 className="font-headline text-5xl md:text-6xl tracking-tighter uppercase mb-4 md:mb-0 text-white">Selected works</h2>
        <div className="w-full md:w-1/3 h-[1px] bg-outline-variant/30 hidden md:block mx-12"></div>
        <p className="font-label text-xs tracking-[0.3em] uppercase text-outline">Vol. 01 — 24</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            techStack={project.techStack}
            liveDemoUrl={project.liveDemoUrl}
            githubUrl={project.githubUrl}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
