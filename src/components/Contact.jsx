import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-content">
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2em', marginBottom: '30px' }}>
          I'm always interested in discussing new opportunities and innovative projects. Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:preethikonduru38@gmail.com" className="contact-link">📧 Email</a>
          <a href="tel:+13142806616" className="contact-link">📱 Phone</a>
          <a href="https://www.linkedin.com/in/preethi-konduru03" target="_blank" rel="noopener noreferrer" className="contact-link">💼 LinkedIn</a>
          <a href="https://github.com/kondurupreethi03" target="_blank" rel="noopener noreferrer" className="contact-link">🐙 GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
