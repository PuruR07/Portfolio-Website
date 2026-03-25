import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.contact-header', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.contact-form-item', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please provide a valid email address');
      return;
    }

    if (formData.message.length < 10) {
      toast.error('Message must be at least 10 characters long');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Sending message...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Message sent successfully!', { id: toastId });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || 'Something went wrong', { id: toastId });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Failed to send message. Is the server running?', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={container} className="bg-surface-container-low py-32 px-6 md:px-12" id="contact">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1e293b',
          color: '#f8fafc',
          border: '1px solid #334155'
        }
      }} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="contact-header">
          <h2 className="font-headline text-5xl md:text-7xl leading-tight tracking-tighter mb-12 text-white">
            Let's build <br />your <span className="italic">website.</span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-12 max-w-sm">
            Currently accepting new projects for Q2 2026. If you have a vision that requires precision and soul, let's connect.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="font-label text-sm tracking-widest text-on-surface">PURURAGHUWANSHI07@GMAIL.COM</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-label text-sm tracking-widest text-on-surface">REMOTE / GLOBAL</span>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-12 contact-form">
            <div className="group relative contact-form-item">
              <label htmlFor="name" className="block font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-2 group-focus-within:text-primary transition-colors">NAME</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-4 font-body text-lg placeholder:text-surface-container-highest transition-all text-on-surface"
                placeholder="YOUR NAME"
                type="text"
              />
            </div>
            <div className="group relative contact-form-item">
              <label htmlFor="email" className="block font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-2 group-focus-within:text-primary transition-colors">EMAIL</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-4 font-body text-lg placeholder:text-surface-container-highest transition-all text-on-surface"
                placeholder="EMAIL@DOMAIN.COM"
                type="email"
              />
            </div>
            <div className="group relative contact-form-item">
              <label htmlFor="message" className="block font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-2 group-focus-within:text-primary transition-colors">OBJECTIVE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-4 font-body text-lg placeholder:text-surface-container-highest transition-all resize-none text-on-surface"
                placeholder="TELL ME ABOUT YOUR VISION"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-primary text-on-primary px-16 py-5 font-bold tracking-[0.2em] uppercase text-xs hover:opacity-90 transition-all flex items-center justify-center gap-4 cursor-pointer disabled:opacity-50 contact-form-item"
            >
              {loading ? 'SENDING...' : 'SEND BRIEF'}
              <span className="material-symbols-outlined text-sm">north_east</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
