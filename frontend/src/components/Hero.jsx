import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-title-line', {
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.2
    });
    
    gsap.from('.hero-fade-in', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.8
    });
    
    gsap.from('.hero-img', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.4
    });
  }, { scope: container });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={container} className="min-h-[819px] flex flex-col justify-center px-6 md:px-12 mb-24 pt-32">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
          <h1 className="font-headline text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tighter mb-8 flex flex-col">
            <span className="block hero-title-line">I build</span>
            <span className="italic text-primary block hero-title-line">exceptional</span>
            <span className="block hero-title-line">websites.</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-light mb-10 hero-fade-in">
            I build scalable MERN stack applications with stunning, intuitive UI integrations. Let's turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6 hero-fade-in">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-on-primary px-10 py-4 font-bold tracking-[0.1em] uppercase text-sm hover:opacity-90 transition-all flex items-center justify-center gap-4 cursor-pointer"
            >
              View My Work
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <div className="w-full aspect-[3/4] bg-surface-container-low relative overflow-hidden group">
            <img 
              alt="Developer Workspace" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700 hero-img" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8oh0fh8y36mxl2SmA0sRam82i95LLm_Tj0v9qyl52xkh8zJ2McgEU-IUIJzg4OKuRqo0zfOMpqBbQGKHiHur9ybdIuEHOEG5MaxQTFls9-Elg57XVmPOCKhFi4b857Sp2_Eja1IdPqKcQdnO8nPEKSe-e6k9wpAsMcfa9zD3-4NOfNzfX0-fV5oin9E9HavWItgzhLFFezo09AB60llVMw1Tm5UcJ1f-HeLwYoW1EQjZ41F89cNBSDe7YYGBTDzS3D6a5uHfWMLU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
