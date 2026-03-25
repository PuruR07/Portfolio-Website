import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[819px] flex flex-col justify-center px-6 md:px-12 mb-24 pt-32">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
          <h1 className="font-headline text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tighter mb-8">
            I build <br/>
            <span className="italic text-primary">exceptional</span> <br/>
            websites.
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-light mb-10">
            I build scalable MERN stack applications with stunning, intuitive UI integrations. Let's turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
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
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" 
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
