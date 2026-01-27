import React, { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
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

  const skills = [
    {
      title: 'Frontend Development',
      color: 'blue',
      tags: ['Angular 16', 'React', 'TypeScript', 'JavaScript', 'NgRx', 'RxJS', 'Angular Material', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'Backend & Microservices',
      color: 'purple',
      tags: ['Java (8/11/17)', 'Spring Boot (2.x/3.x)', 'Spring MVC', 'Spring WebFlux', 'Spring Security', 'Hibernate', 'JPA', 'REST APIs', 'GraphQL', 'Resilience4j']
    },
    {
      title: 'Databases & Storage',
      color: 'green',
      tags: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Cloud & DevOps',
      color: 'orange',
      tags: ['AWS (EKS, ECS, RDS, S3, Lambda)', 'GCP (GKE, Cloud SQL)', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Jenkins', 'GitHub Actions', 'ArgoCD']
    },
    {
      title: 'Messaging',
      color: 'pink',
      tags: ['Kafka', 'Kafka Streams', 'RabbitMQ']
    },
    {
      title: 'Testing & Tools',
      color: 'green',
      tags: ['JUnit 4/5', 'Mockito', 'Jest', 'Cypress', 'TestContainers', 'IntelliJ IDEA', 'VS Code', 'Maven', 'Gradle', 'Git/GitHub']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="skill-card-header">
              <div className={`skill-dot ${skill.color}`}></div>
              <h3>{skill.title}</h3>
            </div>
            <div className="skill-tags">
              {skill.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
