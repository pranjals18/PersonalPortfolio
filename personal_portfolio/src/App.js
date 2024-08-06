import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Toaster />
      </main>
    </>
  );
}

export default App;