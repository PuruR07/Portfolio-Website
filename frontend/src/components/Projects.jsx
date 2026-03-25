import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Ladli Collection',
    description: 'A React-based e-commerce UI for a local clothing store. It features a modern product catalog, dynamic filtering',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://ladlicollection.netlify.app/',
    githubUrl: 'https://github.com/PuruR07/ladlicollection',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBqjAGU_l2nd7R0N6qjyy4KlEyVnVaHpapb7q0xCzqUmlo6wtnnvpjHeKWLb7JjVwrA72sB_xbQ0rNMA6XRpcRl4dRCmRksqAxXMr1KH4u39BJUuFoFvYLDuVIC-ILBcZcNCEFRFrAKTbYhfrnjtESwGqqEwrIZSp1nmsY5B_1Y1bXOyTGkL8Hgt_hboTI-M38Qf26dfvvRVFv4LuUjvrPDGeeDxAtUdwA5Kt63Dcjl3PFyfnadxdgrHWlezz91cMU_uanwWh-ZM'
  },
  {
    title: 'Meer',
    description: 'A responsive React business website for a crochet brand, designed to beautifully showcase handmade products and engage prospective customers.',
    techStack: ['React', 'Appwrite', 'Tailwind', 'Razor Pay', 'API'],
    liveDemoUrl: 'https://meer.co.in/',
    githubUrl: 'https://github.com/PuruR07/Meer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIkiMw2kxxQGwMZ3RHW2MGtL6-7Ty8YLmb2YGCoaNypWnLfE6Dqv83wiuEgsX4PEYLmWYX9LTimp531YwIh1_Gj4EMvu2a1ey-_ZXfJtFcFRRo8hWbkn9cwKxPIi0ZanJmxew_0Fb23nE9U7BcfeMxKIFaD-ViZEYSfakJiwpGCibDmm8-c6FnNHD7lILnJpshDImCVJ9ESEWhF3jsTmBCPyhnZat9oBXtTEceFfY6h0SnPdu0B0BpEEZxpwMo_Q34xJ3Z-yjQbc0'
  },
  {
    title: 'Choghadiya Calculator',
    description: 'A dynamic web application developed to accurately calculate and display traditional mahurat timings of Vidisha.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://vidisha-mahurat.vercel.app/',
    githubUrl: 'https://github.com/PuruR07/MahuratApp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfkEMHRgftF9tLRoMS5ZOJUbRdrQzqdgl0wX2pRXn8Jt83c85sSiQUjOEnsBJk_U2a7EKkJyZPs4k8Zb3epVak4fgjSon3TAB_mHVaJKg9KhOzareHpWIz-yNO1rwOjgf_uX4hJtv6XxrhS17Cs4nZmS4OYAiLCDfkLNr3s8qfJ99b9aU8lgjjGnxLWZgPWWMiYPsXuM-5rqdQHVxMxp7NaLKrBPNX0dM2OLMW6kBB49X1J2aLAJavZCsZn28UZAD5W8gXUov6ovs'
  },
  {
    title: 'Mama Salon',
    description: 'A responsive React business website for a salon, designed to beautifully showcase salon services and engage prospective customers.',
    techStack: ['React', 'Vite', 'Tailwind'],
    liveDemoUrl: 'https://mamasalon.netlify.app/',
    githubUrl: 'https://github.com/PuruR07/Mama-Salon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIt0b4Bq_gn29LwT1uKRmJ5WlFUSdyx05Oa0I53ToYiSdXy-nZ9_ypmC2jmRrS-JLLf_MDeF7aam7oAXN3Y5Zej16yj7kHgD3O511FCcHX2Y68uNHDocq_6EkbMH50-_5rpgRGdzQZQYdB9gV0HDTf0jwtsMjlMnfjxWai26oBkXxCUYRfv819Nma6b_b_mH9uS2SBaBqZVtsiiLOpgkh3E2ddJn5C-N7nQMaSd_ulXjURSiPQMjR43sfDQcu1Kb0hRVeJ7J3PF3E'
  }
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 mb-48 pt-24" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
        <h2 className="font-headline text-5xl md:text-6xl tracking-tighter uppercase mb-4 md:mb-0 text-white">Selected works</h2>
        <div className="w-full md:w-1/3 h-[1px] bg-outline-variant/30 hidden md:block mx-12"></div>
        <p className="font-label text-xs tracking-[0.3em] uppercase text-outline">Vol. 01 — 24</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            techStack={project.techStack}
            liveDemoUrl={project.liveDemoUrl}
            githubUrl={project.githubUrl}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
