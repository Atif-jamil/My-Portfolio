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
            <span className="text-[#ff6a00]">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6a00] mx-auto rounded-full" />
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
              <h3 className="text-xl font-semibold mb-4 text-[#ff6a00]">{category.title}</h3>
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
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="relative group cursor-pointer px-4 py-2 text-sm md:text-base rounded-full overflow-hidden"
                  >
                    {/* Glass background */}
                    <span className="absolute inset-0 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full group-hover:border-[#ff6a00] transition-all duration-300"></span>
                    {/* Orange spread light effect on hover */}
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="absolute inset-0 rounded-full bg-[#ff6a00] blur-lg opacity-20"></span>
                    </span>
                    {/* Skill text */}
                    <span className="relative z-10 text-[#bfbfbf] group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
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