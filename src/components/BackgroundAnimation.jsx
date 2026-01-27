import React, { useEffect } from 'react'
import './BackgroundAnimation.css'

const BackgroundAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const shapes = document.querySelectorAll('.shape')
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1)
        shape.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="bg-animation"></div>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </>
  )
}

export default BackgroundAnimation
