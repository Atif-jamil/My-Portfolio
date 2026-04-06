import Img from '../images/profile.jpeg';
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
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
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Atif Jamil
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-300 mt-2"
          >
            Computer Science Graduate & Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl text-gray-400 mt-6 max-w-lg"
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
              className="glass-card px-8 py-4 flex items-center gap-2 group"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/5 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 mt-8"
          >
            <div>
              <p className="text-2xl font-bold text-blue-400">CGPA 3.21</p>
              <p className="text-sm text-gray-400">Bachelor's Degree</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-400">4+</p>
              <p className="text-sm text-gray-400">Projects</p>
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
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30"
            />
            <div className="absolute inset-0 rounded-full glass-card overflow-hidden">
              <img 
                src={Img} 
                alt="Atif Jamil"
                className="w-fit object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400?text=Atif+Jamil';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero