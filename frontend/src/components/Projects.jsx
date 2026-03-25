import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Ladli Collection',
    description: 'A React-based e-commerce UI for a local clothing store. It features a modern product catalog, dynamic filtering',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://ladlicollection.netlify.app/',
    githubUrl: 'https://github.com/PuruR07/ladlicollection'
  },
  {
    title: 'Meer',
    description: 'A responsive React business website for a crochet brand, designed to beautifully showcase handmade products and engage prospective customers.',
    techStack: ['React', 'Appwrite', 'Tailwind', 'Razor Pay', 'API'],
    liveDemoUrl: 'https://meer.co.in/',
    githubUrl: 'https://github.com/PuruR07/Meer'
  },
  {
    title: 'Choghadiya Calculator',
    description: 'A dynamic web application developed to accurately calculate and display traditional mahurat timings of Vidisha.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://vidisha-mahurat.vercel.app/',
    githubUrl: 'https://github.com/PuruR07/MahuratApp'
  },
  {
    title: 'Mama Salon',
    description: 'A responsive React business website for a salon, designed to beautifully showcase salon services and engage prospective customers.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://mamasalon.netlify.app/',
    githubUrl: 'https://github.com/PuruR07/Mama-Salon'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900">
      {/* subtle decorative blur behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are a few carefully crafted applications I have built to solve unique challenges, focusing on exceptional user interfaces and scalable tech stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveDemoUrl={project.liveDemoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
