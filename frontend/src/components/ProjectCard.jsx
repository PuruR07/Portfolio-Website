import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ProjectCard = ({ id, title, techStack, liveDemoUrl, image, index, isClientWork, altText }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(`/project/${id}`)}
      className={`group cursor-pointer ${index % 2 !== 0 ? 'xl:mt-24' : ''} min-w-0 w-full`}
    >
      <div className="aspect-video bg-surface-container overflow-hidden mb-8 relative w-full">
        <img
          alt={altText || title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          src={image}
        />
        <div className="hidden xl:flex absolute inset-0 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-container/20 backdrop-blur-sm gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/project/${id}`);
            }}
            className="font-label text-xs tracking-[0.4em] text-white bg-transparent uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            VIEW DETAILS
          </button>
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-label text-xs tracking-[0.4em] text-white bg-transparent uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              {isClientWork ? 'Live Site' : 'Live Demo'}
            </a>
          )}
        </div>
      </div>
      <div className="flex justify-between items-start w-full min-w-0 gap-4">
        <div className="flex-1 min-w-0 pr-4">
          <div className="min-w-0">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2 break-words">
              {techStack.join(' / ')}
            </p>
            <h3 className="font-headline text-3xl tracking-tight text-white hover:text-primary transition-colors break-words">{title}</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 xl:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/project/${id}`);
              }}
              className="font-label text-xs tracking-[0.2em] text-black bg-white uppercase border border-white px-4 py-2 hover:bg-transparent hover:text-white transition-colors cursor-pointer text-center w-full sm:w-auto"
            >
              VIEW DETAILS
            </button>
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-label text-xs tracking-[0.2em] text-white bg-transparent uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer text-center w-full sm:w-auto"
              >
                {isClientWork ? 'Live Site' : 'Live Demo'}
              </a>
            )}
          </div>
        </div>
        <span className="font-headline italic text-xl text-white select-none">0{index + 1}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
