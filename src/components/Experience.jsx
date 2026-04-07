import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaUsers, FaComments } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: "Trainee",
      company: "Knowledge Stream",
      location: "Lahore",
      period: "01/2024 - 04/2024",
      description: "A company specializing in web development training",
      responsibilities: [
        "Assisted in the development of web applications using React.js",
        "Collaborated with senior developers to understand project requirements and deliverables",
        "Participated in code reviews and team meetings to improve development processes",
        "Supported development of React web applications, enhancing user interface and functionality"
      ]
    },
    {
      title: "Video & Photo Editor",
      company: "Freelance / Personal Projects",
      location: "Remote",
      period: "2024 - 2025",
      description: "Worked professionally on video editing, photo editing, and design projects",
      responsibilities: [
        "Edited videos using CapCut, Filmora, and Premiere Pro",
        "Performed photo editing and enhancements using Lightroom",
        "Designed resumes, posters, and social media content on Canva",
        "Managed multimedia content for client and personal projects"
      ]
    },
    {
      title: "Bootcamp Participant",
      company: "Corvit Bootcamp",
      location: "Gulberg 3, Lahore",
      period: "Feb 13, 2025 - May 20, 2025",
      description: "Intensive front-end development bootcamp focusing on modern web technologies",
      responsibilities: [
        "Learned and implemented React, HTML, CSS, and JavaScript projects",
        "Built responsive and interactive web applications",
        "Participated in group projects and coding challenges to enhance practical skills"
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "OZ Developer, Bahria Sky",
      location: "Lahore",
      period: "06/2025 - 08/2025",
      description: "Completed a 3-month internship as a front-end developer",
      responsibilities: [
        "Developed user interfaces for web applications using React",
        "Collaborated with backend developers to integrate APIs",
        "Optimized web pages for performance and responsiveness",
        "Participated in code reviews and agile team workflows"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work{' '}
            <span className="text-[#ff6a00]">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6a00] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[#ff6a00]">{exp.title}</h3>
                  <p className="text-xl text-white">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#bfbfbf]">{exp.location}</p>
                  <p className="text-sm text-[#bfbfbf]">{exp.period}</p>
                </div>
              </div>
              
              <p className="text-[#bfbfbf] mb-4">{exp.description}</p>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCode className="text-[#ff6a00] mt-1 flex-shrink-0" />
                    <span className="text-[#bfbfbf]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience