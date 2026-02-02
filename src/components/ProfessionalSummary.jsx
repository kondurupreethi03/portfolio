import React, { useEffect, useRef } from 'react'
import './ProfessionalSummary.css'

const ProfessionalSummary = () => {
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

  const summaries = [
    {
      title: 'Frontend Development',
      description: 'Frontend-focused Software Developer with 7+ years of experience building responsive, enterprise-grade web applications using Angular 16, React, TypeScript, NgRx, and RxJS. Skilled in developing reusable UI components, multi-step workflow screens, form validations, and role-based routing aligned with regulated domains like Insurance, Healthcare (HIPAA), and Banking.'
    },
    {
      title: 'Backend Development & Cloud Architecture',
      description: 'Backend-focused Senior Software Developer with 7+ years of experience designing and delivering scalable Java (8/11/17) applications using Spring Boot microservices, Spring Security, and event-driven architectures with Kafka/Kafka Streams. Proven expertise in building secure REST + GraphQL APIs, implementing OAuth2/JWT + RBAC authorization.'
    },
    {
      title: 'Database & System Integration',
      description: 'Strong experience integrating UI with secure REST/GraphQL APIs and improving performance for large datasets with optimized rendering and state management. Production-ready reliability patterns such as idempotency, retries/backoff, DLQ handling, caching (Redis), and database tuning across PostgreSQL/Oracle/MySQL.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud & DevOps-focused Senior Software Developer with hands-on experience deploying and operating containerized microservices on AWS EKS and GCP GKE using Docker, Kubernetes, Helm, Terraform, and ArgoCD. Strong CI/CD expertise with Jenkins and GitHub Actions, infrastructure automation using IaC, and production monitoring.'
    }
  ]

  return (
    <section className="summary">
      <h2 className="section-title">Professional Summary</h2>
      <div className="summary-grid">
        {summaries.map((summary, index) => (
          <div
            key={index}
            className="summary-card"
            ref={el => cardsRef.current[index] = el}
          >
            <h3>{summary.title}</h3>
            <p>{summary.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfessionalSummary
