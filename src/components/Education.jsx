import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaStar } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Government College University Faisalabad - GCUF",
      period: "09/2019 - 06/2023",
      cgpa: "3.21",
      achievements: [
        "Successfully developed final year project 'Career Path Ahead'",
        "Strong foundation in computer science principles"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <FaGraduationCap className="text-4xl text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">{education[0].degree}</h3>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-400">
                <span className="flex items-center gap-2">
                  <FaUniversity /> {education[0].institution}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {education[0].period}
                </span>
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> CGPA: {education[0].cgpa}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pl-14">
            <h4 className="font-semibold text-purple-400 mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {education[0].achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <span className="text-blue-400 mt-1">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education