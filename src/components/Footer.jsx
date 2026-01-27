import React, { useEffect } from 'react'
import './Footer.css'

const Footer = () => {
  useEffect(() => {
    console.log('%c Welcome to Preethi Konduru\'s Portfolio! ', 'background: linear-gradient(135deg, #6366f1, #00d4ff); color: white; font-size: 20px; padding: 10px; border-radius: 5px;')
    console.log('%c Built with ❤️ using modern web technologies', 'color: #00d4ff; font-size: 14px;')
  }, [])

  return (
    <footer>
      <p>© 2025 Preethi Konduru. Built with ❤️ in St. Louis, MO</p>
    </footer>
  )
}

export default Footer
