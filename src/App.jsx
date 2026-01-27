import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProfessionalSummary from './components/ProfessionalSummary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import './App.css'

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <ProfessionalSummary />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
