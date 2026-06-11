import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { projectsData } from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const container = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on mount and reset loading state when project ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  const project = projectsData.find((p) => p.id === id);

  useGSAP(() => {
    if (project && !isLoading) {
      gsap.from('.details-animate', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1
      });
    }
  }, { dependencies: [isLoading], scope: container });

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter text-outline mb-6">
          Project Not Found
        </h1>
        <p className="font-body text-slate-300 text-lg mb-8 max-w-md">
          The project you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="font-label text-sm tracking-[0.2em] text-[#b1c5ff] hover:text-white uppercase border border-[#b1c5ff] hover:bg-[#b1c5ff]/10 px-8 py-4 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 py-24 px-6 md:px-12 flex flex-col justify-between">
        <div className="max-w-6xl mx-auto w-full">
          {/* Top Header Placeholder */}
          <div className="flex justify-between items-center mb-20 border-b border-white/5 pb-6">
            <div className="h-6 w-32 bg-slate-800/50 rounded animate-pulse"></div>
            <div className="h-6 w-24 bg-slate-800/50 rounded animate-pulse"></div>
          </div>

          {/* Project Header Area Placeholder */}
          <div className="flex flex-col gap-6 mb-8">
            <div>
              <div className="h-12 md:h-16 w-2/3 bg-slate-800/50 rounded-lg animate-pulse mb-4"></div>
              <div className="w-20 h-1 bg-slate-800/50 rounded animate-pulse"></div>
            </div>

            <div>
              <div className="h-4 w-24 bg-slate-800/50 rounded animate-pulse mb-4"></div>
              <div className="flex flex-wrap gap-2.5">
                <div className="h-8 w-24 bg-slate-800/50 rounded-full animate-pulse"></div>
                <div className="h-8 w-24 bg-slate-800/50 rounded-full animate-pulse"></div>
                <div className="h-8 w-24 bg-slate-800/50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Disclaimer Banner Placeholder */}
          {(project.isClientWork || project.clientWork) && (
            <div className="h-20 w-full bg-slate-800/50 rounded-xl animate-pulse mt-4 mb-12"></div>
          )}

          {/* Project Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-start">
            {/* Details Column */}
            <div className="xl:col-span-5 space-y-10">
              {/* Description */}
              <div>
                <div className="h-4 w-28 bg-slate-800/50 rounded animate-pulse mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-slate-800/50 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Actions */}
              {project.liveDemoUrl && (
                <div className="pt-6">
                  <div className="h-16 w-full md:w-48 bg-slate-800/50 rounded animate-pulse"></div>
                </div>
              )}
            </div>

            {/* Gallery & Narrative Column */}
            <div className="xl:col-span-7 space-y-16">
              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {/* Main Hero Image placeholder */}
                <div className="col-span-full h-[300px] md:h-[480px] w-full bg-slate-800/50 rounded-2xl animate-pulse"></div>
                {/* Thumbnail gallery placeholders */}
                <div className="aspect-video w-full bg-slate-800/50 rounded-xl animate-pulse"></div>
                <div className="aspect-video w-full bg-slate-800/50 rounded-xl animate-pulse"></div>
                <div className="aspect-video w-full bg-slate-800/50 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer back button */}
        <div className="max-w-6xl mx-auto w-full mt-32 pt-8 border-t border-white/5 flex justify-center">
          <div className="h-6 w-48 bg-slate-800/50 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  const galleryImages = project.gallery ? project.gallery.filter(Boolean) : [];

  return (
    <div ref={container} className="min-h-screen bg-slate-900 py-24 px-6 md:px-12 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-20 border-b border-white/5 pb-6 details-animate">
          <Link
            to="/"
            className="font-label text-sm tracking-[0.2em] text-[#b1c5ff] hover:text-white uppercase transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
          <span className="font-label text-xs tracking-[0.3em] uppercase text-outline">
            {project.isClientWork ? 'Client Work' : 'Personal Project'}
          </span>
        </div>

        {/* Project Header Area */}
        <div className="flex flex-col gap-6 mb-8 details-animate">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
              {project.title}
            </h1>
            <div className="w-20 h-1 bg-primary mt-4"></div>
          </div>

          <div>
            <h3 className="font-label text-xs tracking-[0.3em] uppercase text-outline mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="font-body text-sm tracking-wider bg-white/5 text-slate-300 px-4 py-2 border border-white/5 rounded-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer Banner */}
        {(project.isClientWork || project.clientWork) && (
          <div className="p-4 md:p-5 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3 mt-4 mb-12 details-animate">
            <span className="material-symbols-outlined text-amber-500 text-lg flex-shrink-0 select-none">warning</span>
            <p className="font-body text-xs md:text-sm text-amber-200/80 leading-relaxed">
              ⚠️ <strong className="text-amber-400 font-semibold">Client Project Disclaimer:</strong> This is a live, real-world business application. Any interactions, orders, or bookings made on the live site are processed in an actual production environment. Please explore responsibly.
            </p>
          </div>
        )}

        {/* Project Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-start">
          {/* Details Column */}
          <div className="xl:col-span-5 space-y-10">
            {/* Description */}
            <div className="details-animate">
              <h3 className="font-label text-xs tracking-[0.3em] uppercase text-outline mb-4">
                About the Project
              </h3>
              <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Actions */}
            {project.liveDemoUrl && (
              <div className="pt-6 details-animate">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 bg-primary text-on-primary px-16 py-5 font-bold tracking-[0.2em] uppercase text-xs hover:opacity-90 transition-opacity cursor-pointer w-full md:w-auto"
                >
                  {project.isClientWork ? 'Visit Live Site' : 'View Demo'}
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            )}
          </div>

          {/* Gallery & Narrative Column */}
          <div className="xl:col-span-7 space-y-16 details-animate">
            {/* Gallery Grid */}
            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {galleryImages.map((imgUrl, index) => {
                  const isHero = index === 0;
                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                      className={`bg-[#101418] border border-white/5 overflow-hidden shadow-2xl relative group cursor-zoom-in transition-all duration-300 hover:border-primary hover:outline hover:outline-2 hover:outline-primary/50 text-left ${
                        isHero ? 'col-span-full w-full h-[300px] md:h-[450px] rounded-2xl' : 'aspect-video w-full rounded-xl'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} gallery screenshot ${index + 1}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="aspect-video bg-[#101418] border border-white/5 flex flex-col items-center justify-center text-center p-8 rounded-xl">
                <span className="material-symbols-outlined text-4xl text-outline mb-4">image</span>
                <p className="font-label text-xs tracking-widest text-outline uppercase">Interactive Gallery Coming Soon</p>
              </div>
            )}

            {/* Problem & Solution Section directly under photos */}
            {(project.problem || project.solution) && (
              <div className="border-t border-white/5 pt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* The Challenge Block */}
                  {project.problem && (
                    <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 relative group hover:border-[#b1c5ff]/20 transition-all duration-500 rounded-xl">
                      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-xl"></div>
                      <h3 className="font-headline text-xl md:text-2xl tracking-tight text-white uppercase mb-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-lg">warning</span>
                        The Challenge
                      </h3>
                      <p className="font-body text-slate-300 text-sm md:text-base leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {/* The Solution Block */}
                  {project.solution && (
                    <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 relative group hover:border-[#b1c5ff]/20 transition-all duration-500 rounded-xl">
                      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-xl"></div>
                      <h3 className="font-headline text-xl md:text-2xl tracking-tight text-white uppercase mb-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        The Solution
                      </h3>
                      <p className="font-body text-slate-300 text-sm md:text-base leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Portal */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={galleryImages.map((src) => ({ src }))}
        />
      )}

      {/* Footer back button */}
      <div className="max-w-6xl mx-auto w-full mt-32 pt-8 border-t border-white/5 flex justify-center details-animate">
        <Link
          to="/"
          className="font-label text-sm tracking-[0.2em] text-[#b1c5ff] hover:text-white uppercase transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Return to portfolio mainpage
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
