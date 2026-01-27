import React, { useEffect, useRef } from 'react'
import './Education.css'

const Education = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'all 0.6s ease'
        observer.observe(card)
      }
    })

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const educations = [
    {
      type: 'Masters',
      degree: 'Master of Science in Computer and Information Science',
      school: 'Saint Louis University',
      location: 'St. Louis, MO',
      date: 'Expected Dec 2025'
    },
    {
      type: 'Bachelors',
      degree: 'Bachelor of Technology in Computer Science',
      school: 'India',
      location: 'Hyderabad, India',
      date: 'Graduated 2018'
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Academic background</p>
      <div className="education-grid">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="education-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="education-icon">🎓</div>
            <div className="education-type">{edu.type}</div>
            <div className="education-degree">{edu.degree}</div>
            <div className="education-school">{edu.school}</div>
            <div className="education-location">{edu.location}</div>
            <div className="education-date">{edu.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
