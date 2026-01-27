import React, { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'GEICO (Client)',
      location: 'Maryland, USA',
      date: 'May 2024 – Present',
      points: [
        'Developed a modern Policy Administration and Claims platform using Java 17 + Spring Boot microservices',
        'Built secure REST + GraphQL APIs with OAuth2/JWT authentication and RBAC using Spring Security',
        'Implemented Kafka-driven workflows for policy/claim lifecycle processing with retry/backoff, idempotency, and DLQ handling',
        'Designed responsive portals using Angular 16 + TypeScript with NgRx/RxJS state management',
        'Deployed services on AWS EKS using Docker + Helm and automated delivery using Jenkins, GitHub Actions, and ArgoCD',
        'Optimized performance using PostgreSQL tuning and Redis caching for high-frequency reads',
        'Implemented lazy loading + route-level modularization in Angular to improve initial load time',
        'Integrated backend-driven business rule validations at form level for consistent workflow enforcement'
      ],
      techStack: ['Java 17', 'Spring Boot 3.x', 'Kafka', 'PostgreSQL', 'Redis', 'Angular 16', 'AWS EKS', 'Docker', 'Kubernetes', 'ArgoCD']
    },
    {
      title: 'Software Developer',
      company: 'DSS Inc (Client)',
      location: 'Florida, USA',
      date: 'Nov 2021 – Dec 2023',
      points: [
        'Built HIPAA-aligned healthcare claims features using React + TypeScript and Spring Boot APIs',
        'Developed secure REST + GraphQL APIs with OpenAPI documentation and standardized error handling',
        'Implemented Kafka Streams workflows for claim lifecycle automation and event-driven transitions',
        'Improved scalability by supporting microservice decomposition and independent service ownership',
        'Enhanced performance using Oracle tuning and Redis caching strategies to reduce database load',
        'Implemented structured logging + trace correlation IDs across microservices for debugging',
        'Improved pipeline stability by adding automated unit/integration test gates'
      ],
      techStack: ['Java 8/11', 'Spring Boot 2.x', 'React', 'Kafka Streams', 'Oracle', 'Redis', 'AWS EKS', 'Docker', 'Jenkins']
    },
    {
      title: 'Software Developer',
      company: 'Atlantic Union Bank (Client)',
      location: 'USA',
      date: 'Feb 2020 – Oct 2021',
      points: [
        'Developed secure digital banking features including fund transfers and account management workflows',
        'Built Angular + TypeScript UI modules using reactive forms, validations, and reusable components',
        'Developed Spring Boot REST APIs with request validation, API documentation, and error handling',
        'Integrated Kafka messaging for fraud alerts and transaction notification workflows',
        'Supported container deployments on GCP GKE with Cloud SQL and Cloud Storage integration'
      ],
      techStack: ['Java 8/11', 'Spring Boot', 'Kafka', 'PostgreSQL', 'MongoDB', 'Angular', 'GCP GKE', 'Docker']
    },
    {
      title: 'Software Developer',
      company: 'MindMade Technologies',
      location: 'Hyderabad, India',
      date: 'Jun 2018 – Jan 2020',
      points: [
        'Developed enterprise inventory and order tracking web applications using Spring Boot + Angular',
        'Built REST APIs for CRUD operations and workflow processing with MySQL persistence',
        'Implemented secure access using Spring Security OAuth2/JWT',
        'Delivered reporting features like pagination, filtering, sorting, and search',
        'Supported deployments with AWS (EC2, S3, RDS, Elastic Beanstalk) and CloudWatch'
      ],
      techStack: ['Java 8', 'Spring Boot', 'MySQL', 'Angular', 'AWS', 'Maven', 'Jenkins']
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">My journey in software development</p>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="experience-header">
              <div>
                <div className="experience-title">{exp.title}</div>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-location">{exp.location}</div>
              </div>
              <div className="experience-date">{exp.date}</div>
            </div>
            <ul className="experience-list">
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {exp.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
