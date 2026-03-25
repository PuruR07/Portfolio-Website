import React from 'react';

const ProjectCard = ({ title, description, techStack, liveDemoUrl, githubUrl }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] group">
      {/* Decorative top bar */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 border border-slate-700 text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={liveDemoUrl || '#'} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-center text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Live Demo
          </a>
          <a 
            href={githubUrl || '#'} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-center text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
