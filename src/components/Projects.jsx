import React, { useEffect, useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const cardRef = useRef(null)

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

    if (cardRef.current) {
      cardRef.current.style.opacity = '0'
      cardRef.current.style.transform = 'translateY(30px)'
      cardRef.current.style.transition = 'all 0.6s ease'
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])

  return (
    <section className="projects">
      <h2 className="section-title">Featured Academic Project</h2>
      <div className="project-card" ref={cardRef}>
        <div className="project-header">
          <div className="project-icon">🏥</div>
          <div>
            <div className="project-title">Remote Patient Monitoring (RPM) Data Integration & Care Dashboard</div>
            <span className="project-badge">Healthcare / IoT Project</span>
          </div>
        </div>
        <div className="project-body">
          <p className="project-description">
            A digital health project designed to support chronic disease management through continuous monitoring and analytics. It integrates synthetic IoT-based patient vitals data such as blood pressure, glucose, heart rate, and activity levels into a centralized system for analysis. A provider-facing Power BI dashboard was developed to track KPIs, trends, and alerts for faster clinical decision-making, while a patient-facing web prototype (HTML/CSS/JavaScript) enables users to view health metrics, trends, and alerts through an interactive portal. The solution follows HIPAA-aligned privacy practices and applies the NIST Cybersecurity Framework (CSF) to ensure secure and compliant data handling, demonstrating how proactive monitoring can reduce readmissions and improve patient engagement.
          </p>
          <div className="project-tags">
            <span className="tech-tag">Power BI</span>
            <span className="tech-tag">HTML/CSS/JavaScript</span>
            <span className="tech-tag">IoT Data Integration</span>
            <span className="tech-tag">HIPAA Compliance</span>
            <span className="tech-tag">NIST CSF</span>
            <span className="tech-tag">Healthcare Analytics</span>
            <span className="tech-tag">Data Visualization</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
