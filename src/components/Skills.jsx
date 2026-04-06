import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'MERN Stack']
    },
    {
      title: 'Backend Basics',
      skills: ['Node.js', 'Express.js', 'PostgreSQL']
    },
    {
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code']
    },
    {
      title: 'Design & Creative',
      skills: ['Graphic Designing', 'Photo Editing', 'Video Editing']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card px-4 py-2 text-sm md:text-base"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills