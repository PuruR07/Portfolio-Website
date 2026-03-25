import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.about-img', {
      scrollTrigger: {
        trigger: '.about-img',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="px-6 md:px-12 mb-48 overflow-hidden" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <div className="md:col-span-5 about-img">
                        <div className="relative group">
                            <div className="aspect-[3/4] bg-surface-container border border-white/5 overflow-hidden">
                                <img
                                    alt="Portrait of the designer"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIt0b4Bq_gn29LwT1uKRmJ5WlFUSdyx05Oa0I53ToYiSdXy-nZ9_ypmC2jmRrS-JLLf_MDeF7aam7oAXN3Y5Zej16yj7kHgD3O511FCcHX2Y68uNHDocq_6EkbMH50-_5rpgRGdzQZQYdB9gV0HDTf0jwtsMjlMnfjxWai26oBkXxCUYRfv819Nma6b_b_mH9uS2SBaBqZVtsiiLOpgkh3E2ddJn5C-N7nQMaSd_ulXjURSiPQMjR43sfDQcu1Kb0hRVeJ7J3PF3E"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center p-4">
                                <span className="font-headline italic text-on-primary text-sm text-center leading-tight">ESTD. 2026</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6 about-text">Manifesto &amp; Identity</p>
                        <h2 className="font-headline text-5xl md:text-7xl tracking-tighter mb-10 leading-[0.9] about-text">Designing for the <span className="italic">unseen</span> details.</h2>
                        <div className="space-y-8 font-body text-lg text-on-surface-variant leading-relaxed font-light max-w-xl about-text">
                            <p>
                                I believe a website is more than just code; it's a digital architecture that should evoke the same visceral response as a well-designed physical space. My philosophy, the <span className="text-white italic">Atelier Approach</span>, focuses on merging editorial aesthetics with uncompromising technical performance.
                            </p>
                            <p>
                                With over six years of experience collaborating with global brands and niche studios, I've developed a methodology that prioritizes intentionality. Every pixel and every line of code serves a purpose: to elevate the user's journey into an experience.
                            </p>
                        </div>
                        <div className="mt-12 flex flex-wrap gap-8 about-text">
                            <div>
                                <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-2">Focus</p>
                                <p className="font-body text-sm text-white">Creative Development</p>
                            </div>
                            <div>
                                <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-2">Current</p>
                                <p className="font-body text-sm text-white">Student @ OCT</p>
                            </div>
                            <div>
                                <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-2">Availability</p>
                                <p className="font-body text-sm text-primary">Q2 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
