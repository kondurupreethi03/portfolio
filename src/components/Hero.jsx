import React, { useEffect, useRef } from 'react'
import profilePhoto from '../../assets/profile-photo.png'
import './Hero.css'

const Hero = () => {
  const profileCardRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (profileCardRef.current && window.innerWidth > 768) {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        const xPos = (clientX / innerWidth - 0.5) * 10
        const yPos = (clientY / innerHeight - 0.5) * 10
        
        profileCardRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
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
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Preethi Konduru</h1>
          <h2>Senior Software Developer | Full Stack Java Developer</h2>
          <p>I build secure, scalable, cloud-native enterprise applications using Java (8–17), Spring Boot microservices, Angular/React, and event-driven systems with Kafka. Hands-on experience with AWS/GCP, Kubernetes, CI/CD, and production-grade deployments.</p>
          <div className="hero-buttons">
            <a href="#experience" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#experience')}>View My Work</a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => handleSmoothScroll(e, '#contact')}>Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card" ref={profileCardRef}>
            <div className="profile-photo-container">
              <img src={profilePhoto} alt="Preethi Konduru" className="profile-photo" />
            </div>
            <h3>Let's Connect</h3>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span>St. Louis, MO</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <span>+1 5572281195</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <a href="mailto:preethikonduru38@gmail.com">preethikonduru38@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <a href="https://www.linkedin.com/in/preethi-konduru" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <a href="https://github.com/kondurupreethi03" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  )
}

export default Hero
