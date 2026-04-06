import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaStar } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      title: "Career Path Ahead",
      description: "Successfully developed a final year project that helps users navigate different career paths",
      icon: <FaTrophy />
    },
    {
      title: "Academic Excellence",
      description: "Maintained CGPA of 3.21 throughout Bachelor's degree",
      icon: <FaStar />
    },
    {
      title: "Knowledge Stream Training",
      description: "Completed intensive web development training with hands-on project experience",
      icon: <FaAward />
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card glass-card-hover p-6 text-center"
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{achievement.title}</h3>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements