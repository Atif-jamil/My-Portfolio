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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-0' : 'py-1'
      }`}
    >
      <div className={`mx-4 lg:mx-8 ${isScrolled ? 'py-1' : 'py-2'}`}>
        {/* Animated Orange Fill Strip - Right to Left */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background strip - dark */}
          <div className="glass-card px-4 py-2 relative z-10">
            <div className="flex items-center justify-between">
              {/* Logo - Bold & Styled like Hero */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl font-extrabold tracking-tight"
                style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
              >
                <span className="bg-gradient-to-r from-white via-white to-[#ff6a00] bg-clip-text text-transparent">
                  Atif Jamil
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors cursor-pointer text-sm lg:text-base font-medium"
                    style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-3">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://github.com/Atif-jamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors"
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="https://www.linkedin.com/in/atif-jamil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-[#bfbfbf] hover:text-[#ff6a00] transition-colors"
              >
                {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-3 space-y-3"
              >
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#bfbfbf] hover:text-[#ff6a00] py-2 transition-colors text-sm"
                    style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex space-x-4 pt-2 border-t border-[#2a2a2a]">
                  <a
                    href="https://github.com/Atif-jamil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atif-jamil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* Animated Orange Fill Effect - Right to Left */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ 
              duration: 1.5, 
              delay: 0.3,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-gradient-to-l from-[#ff6a00]/20 via-[#ff6a00]/5 to-transparent rounded-2xl z-0"
          />
          
          {/* Second wave of orange fill for more depth */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ 
              duration: 1.8, 
              delay: 0.6,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-gradient-to-l from-[#ff6a00]/10 via-transparent to-transparent rounded-2xl z-0"
          />
        </div>
      </div>
    </motion.header>
  )
}

export default Header