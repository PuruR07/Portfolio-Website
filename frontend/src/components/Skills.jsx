import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Skills = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.skills-heading', {
      scrollTrigger: {
        trigger: '.skills-heading',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.skill-item', {
      scrollTrigger: {
        trigger: '.skill-item',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: container });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'Database Design']
    },
    {
      category: 'Design',
      skills: ['UI/UX', 'Figma', 'Animation', 'Web Design', 'Responsive Design']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Vite', 'VS Code', 'DevTools', 'Performance Optimization']
    }
  ];

  return (
    <section ref={container} className="px-6 md:px-12 mb-48 overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 skills-heading">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">Core Competencies</p>
          <h2 className="font-headline text-5xl md:text-7xl tracking-tighter leading-[0.9]">
            Skills & <span className="italic">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-item">
              <div className="bg-surface-container border border-white/5 p-8 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="font-body text-sm text-on-surface-variant hover:text-white transition-colors duration-200">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
