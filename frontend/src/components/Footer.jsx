import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f13] flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full mt-24 pt-12 border-t border-white/5">
      <div className="font-body text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-8 md:mb-0">
        &copy; {new Date().getFullYear()} PURU RAGHUWANSHI. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-12">
        <a 
          className="font-body text-[10px] tracking-[0.3em] uppercase text-slate-500 hover:text-primary transition-colors duration-300 ease-in-out" 
          href="https://github.com/PuruR07" 
          target="_blank" 
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a 
          className="font-body text-[10px] tracking-[0.3em] uppercase text-slate-500 hover:text-primary transition-colors duration-300 ease-in-out" 
          href="https://www.linkedin.com/in/puru-raghuwanshi" 
          target="_blank" 
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </div>
    </footer>
  );
};

export default Footer;
