import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 text-white">
        <Header />
        <main>
          <Hero />
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <AnimatedSection>
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;