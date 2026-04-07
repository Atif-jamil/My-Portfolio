import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaCode, FaPaintBrush, FaVideo, FaUsers, FaClock, FaLightbulb, FaComments } from 'react-icons/fa'

const About = () => {
  const summary = "I am a recent Computer Science graduate with hands-on experience in developing web applications using the MERN stack. My background includes web development with React, collaborative work with senior developers, and a solid foundation in problem-solving. I am detail-oriented and a strong team player with a passion for creating user-friendly applications."

  const softSkills = [
    { icon: <FaLightbulb />, name: "Problem-Solving", description: "Analyzing issues and finding effective solutions in projects" },
    { icon: <FaUsers />, name: "Teamwork & Collaboration", description: "Working well with peers during bootcamps and projects" },
    { icon: <FaClock />, name: "Time Management", description: "Completing tasks and projects within deadlines" },
    { icon: <FaComments />, name: "One-to-One Communication", description: "Sharing ideas clearly in small groups or individual discussions" },
    { icon: <FaCode />, name: "Adaptability", description: "Learning and applying new tools and technologies quickly" },
    { icon: <FaPaintBrush />, name: "Creativity", description: "Designing user-friendly and visually appealing interfaces" }
  ]

  const interests = [
    { name: "Graphic Designing", description: "Engaged in various forms of visual content creation" },
    { name: "Photo Editing", description: "Enjoy creating and enhancing images through editing" },
    { name: "Video Editing", description: "Enthusiastic about editing videos and producing engaging content" }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="text-[#ff6a00]">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6a00] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <FaUser className="text-4xl text-[#ff6a00] mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h3>
            <p className="text-[#bfbfbf] leading-relaxed text-lg">{summary}</p>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Soft Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#2a2a2a] transition-all"
                >
                  <div className="text-2xl text-[#ff6a00] mt-1">{skill.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#ff6a00]">{skill.name}</h4>
                    <p className="text-sm text-[#bfbfbf]">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Interests & Hobbies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 text-center rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#ff6a00] transition-all"
                >
                  <h4 className="font-semibold text-[#ff6a00] mb-2">{interest.name}</h4>
                  <p className="text-sm text-[#bfbfbf]">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About