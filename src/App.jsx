import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      if (href?.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App