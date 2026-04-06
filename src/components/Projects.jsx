import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      period: '01/2024 - 04/2024',
      location: 'Lahore',
      context: 'Training Project at Knowledge Stream',
      description: 'Built a weather app to enhance understanding of React and its ecosystem.',
      details: [
        'Developed components and managed state to create dynamic web pages displaying weather information',
        'Applied best practices in code structuring and component reusability',
        'Integrated weather API for real-time data'
      ],
      link: 'https://weatherwv.netlify.app',
      hasLink: true,
      github: '',
      tags: ['React', 'API', 'State Management']
    },
    {
      title: 'Career Path Ahead',
      period: '01/2023 - 04/2023',
      context: 'Final Year Project',
      description: 'Successfully developed a final year project that helps users navigate different career paths.',
      details: [
        'Developed a simple website to help users navigate different career paths',
        'Implemented user-friendly interfaces using HTML, CSS, and JavaScript',
        'Integrated basic backend functionalities to support user interactions'
      ],
      hasLink: false,
      github: '',
      tags: ['HTML', 'CSS', 'JavaScript', 'Full Stack']
    },
    {
      title: 'SoleStyle Footwear',
      description: 'Fully responsive footwear e-commerce website with modern UI/UX design.',
      details: [
        'Built with React for dynamic user experience',
        'Implemented responsive design for all devices',
        'Features product catalog and shopping cart functionality'
      ],
      link: 'https://solestyle-footwear.netlify.app/',
      hasLink: true,
      github: '',
      tags: ['E-commerce', 'React', 'Responsive Design']
    },
    {
      title: 'Mohalland Holdings Real Estate',
      description: 'A modern real estate website built with React and Vite to showcase properties dynamically.',
      details: [
        'Developed a responsive website for property listings and client engagement',
        'Implemented dynamic property cards and search filters using React',
        'Styled with Tailwind CSS for modern UI/UX'
      ],
      link: 'https://mohallandholdings.netlify.app/',
      github: 'https://github.com/atifjamil/mohalland-holdings',
      hasLink: true,
      tags: ['React', 'Vite', 'Tailwind CSS', 'Real Estate']
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card glass-card-hover p-6 flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                {project.period && (
                  <span className="text-sm text-gray-500">{project.period}</span>
                )}
              </div>

              {project.context && (
                <p className="text-sm text-blue-400 mb-2">{project.context}</p>
              )}

              <p className="text-gray-300 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4 flex-grow">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.hasLink && project.link && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects