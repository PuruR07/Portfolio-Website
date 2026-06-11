import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-purple-500/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
