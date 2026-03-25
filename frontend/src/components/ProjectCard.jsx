import React from 'react';

const ProjectCard = ({ title, techStack, liveDemoUrl, githubUrl, image, index }) => {
  return (
    <div className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
      <div className="aspect-video bg-surface-container overflow-hidden mb-8 relative">
        <img 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
          src={image}
        />
        <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/20 backdrop-blur-sm gap-4">
          <a href={liveDemoUrl} target="_blank" rel="noreferrer" className="font-label text-xs tracking-[0.4em] text-white uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="font-label text-xs tracking-[0.4em] text-white uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
            GitHub
          </a>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
            {techStack.join(' / ')}
          </p>
          <h3 className="font-headline text-3xl tracking-tight text-white">{title}</h3>
          <div className="flex flex-wrap gap-4 mt-6 md:hidden">
            <a href={liveDemoUrl} target="_blank" rel="noreferrer" className="font-label text-xs tracking-[0.2em] text-white uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
              Live Demo
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="font-label text-xs tracking-[0.2em] text-white uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <span className="font-headline italic text-xl text-white">0{index + 1}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
