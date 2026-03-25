import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I'm a <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Full-Stack Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          I build scalable MERN stack applications with stunning, intuitive UI integrations. Let's turn your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
