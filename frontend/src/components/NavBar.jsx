import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const projects = document.getElementById('projects');
      const about = document.getElementById('about');
      const contact = document.getElementById('contact');

      if (contact && window.scrollY >= contact.offsetTop - window.innerHeight / 2) {
        setActiveSection('contact');
      } else if (about && window.scrollY >= about.offsetTop - window.innerHeight / 2) {
        setActiveSection('about');
      } else if (projects && window.scrollY >= projects.offsetTop - window.innerHeight / 2) {
        setActiveSection('projects');
      } else {
        setActiveSection('home');
      }
    };

    // Check initial state on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 ${isMobileMenuOpen
          ? 'bg-transparent py-6 border-transparent'
          : scrolled
            ? 'bg-[#101418]/90 backdrop-blur-2xl border-b border-white/5 py-6'
            : 'bg-transparent py-8 border-transparent'
        }`}>
        <div
          className="font-headline font-bold text-2xl tracking-tighter text-white uppercase cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Puru Raghuwanshi
        </div>

        <div className="hidden md:flex items-center gap-12">
          <button
            onClick={() => scrollToSection('projects')}
            className={`font-body text-xs tracking-[0.2em] border-b pb-1 cursor-pointer transition-all duration-500 uppercase ${activeSection === 'projects'
                ? 'text-[#b1c5ff] border-[#b1c5ff]'
                : 'text-slate-400 border-transparent hover:text-[#b1c5ff] hover:opacity-100 opacity-80'
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`font-body text-xs tracking-[0.2em] border-b pb-1 cursor-pointer transition-all duration-500 uppercase ${activeSection === 'about'
                ? 'text-[#b1c5ff] border-[#b1c5ff]'
                : 'text-slate-400 border-transparent hover:text-[#b1c5ff] hover:opacity-100 opacity-80'
              }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer ${activeSection === 'contact'
                ? 'bg-transparent text-[#b1c5ff] border border-[#b1c5ff]'
                : 'bg-primary text-on-primary hover:opacity-90 border border-transparent'
              }`}
          >
            Hire Me
          </button>
        </div>

        <div className="md:hidden relative z-[60]">
          <span
            className="material-symbols-outlined text-primary cursor-pointer text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[#0a0f13]/98 backdrop-blur-md z-[40] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-10">
          <button
            onClick={() => scrollToSection('home')}
            className={`font-headline text-3xl tracking-widest uppercase transition-all duration-300 ${activeSection === 'home' ? 'text-[#b1c5ff]' : 'text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`font-headline text-3xl tracking-widest uppercase transition-all duration-300 ${activeSection === 'projects' ? 'text-[#b1c5ff]' : 'text-white'}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`font-headline text-3xl tracking-widest uppercase transition-all duration-300 ${activeSection === 'about' ? 'text-[#b1c5ff]' : 'text-white'}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`font-headline text-3xl tracking-widest uppercase transition-all duration-300 ${activeSection === 'contact' ? 'text-[#b1c5ff]' : 'text-white'}`}
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
