import Img from '../images/profile.jpeg';
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const skills = [
    "Web Developer",
    "React Developer",
    "Frontend Specialist",
    "UI/UX Enthusiast",
    "Graphic Designer",
    "Video Editor"
  ]

  const [skillIndex, setSkillIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setSkillIndex((prev) => (prev + 1) % skills.length)
        setIsVisible(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [skills.length])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 md:pt-36">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
          >
            Hi, I'm{' '}
            <span className="text-[#ff6a00]">
              Atif Jamil
            </span>
          </motion.h1>
          
          {/* Animated Skills Section */}
          <div className="mt-4 h-16 md:h-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={skillIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl text-[#ff6a00] font-semibold"
                style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
              >
                {skills[skillIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Animated Cursor Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#ff6a00] to-transparent rounded-full mt-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg text-[#bfbfbf] mt-6 max-w-lg"
          >
            Recent Computer Science graduate with hands-on experience in MERN stack development, 
            passionate about creating user-friendly applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="relative group cursor-pointer px-8 py-4 rounded-2xl flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#ff6a00] rounded-2xl"></span>
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="absolute inset-0 rounded-2xl bg-[#ff6a00] blur-xl opacity-60"></span>
              </span>
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative group cursor-pointer px-8 py-4 rounded-2xl flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl group-hover:border-[#ff6a00] transition-all duration-300"></span>
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="absolute inset-0 rounded-2xl bg-[#ff6a00] blur-lg opacity-20"></span>
              </span>
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                Contact Me
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex gap-4 mt-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://github.com/Atif-jamil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#bfbfbf] hover:text-[#ff6a00] hover:border-[#ff6a00] transition-all duration-300"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://www.linkedin.com/in/atif-jamil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#bfbfbf] hover:text-[#ff6a00] hover:border-[#ff6a00] transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-8 mt-8"
          >
            <div>
              <p className="text-2xl font-bold text-[#ff6a00]">CGPA 3.21</p>
              <p className="text-sm text-[#bfbfbf]">Bachelor's Degree</p>
            </div>
            <div className="w-px h-12 bg-[#2a2a2a]"></div>
            <div>
              <p className="text-2xl font-bold text-[#ff6a00]">4+</p>
              <p className="text-sm text-[#bfbfbf]">Projects</p>
            </div>
            <div className="w-px h-12 bg-[#2a2a2a]"></div>
            <div>
              <p className="text-2xl font-bold text-[#ff6a00]">1+</p>
              <p className="text-sm text-[#bfbfbf]">Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Orange Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-full bg-[#ff6a00] blur-3xl opacity-30"
            />
            {/* Image Container with Orange Border */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#ff6a00] shadow-[0_0_30px_rgba(255,106,0,0.3)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6a00]/20 to-transparent"></div>
              <img 
                src={Img} 
                alt="Atif Jamil"
                className="w-fit h-fit object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400?text=Atif+Jamil';
                }}
              />
            </div>
            {/* Decorative Orange Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-3 rounded-full border border-dashed border-[#ff6a00]/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero