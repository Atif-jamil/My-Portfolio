import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className={`glass-card mx-4 lg:mx-8 px-6 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Atif Jamil
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/Atif-jamil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://www.linkedin.com/in/atif-jamil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white py-2 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-4 pt-2 border-t border-white/10">
              <a
                href="https://github.com/Atif-jamil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/atif-jamil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header