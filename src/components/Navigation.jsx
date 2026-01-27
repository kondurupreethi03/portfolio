import React, { useEffect, useState } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''} id="navbar">
      <div className="nav-container">
        <div className="logo">Preethi Konduru</div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>About</a></li>
          <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}>Experience</a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
          <li><a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')}>Education</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
