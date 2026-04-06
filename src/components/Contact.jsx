import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Lahore, Punjab, Pakistan',
      link: null
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'atifjamil700@gmail.com',
      link: 'mailto:atifjamil700@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '03410437852',
      link: 'tel:03410437852'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Atif-jamil',
      link: 'https://github.com/Atif-jamil'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'atif-jamil',
      link: 'https://www.linkedin.com/in/atif-jamil/'
    },
    {
      icon: <FaGlobe />,
      label: 'Portfolio',
      value: 'SoleStyle Footwear',
      link: 'https://solestyle-footwear.netlify.app/'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="text-2xl text-blue-400 mt-1">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-lg text-white hover:text-blue-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Language Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-400">Languages</h3>
            <div className="flex justify-center gap-4">
              <div className="glass-card px-6 py-3">
                <p className="font-semibold">English</p>
                <p className="text-sm text-gray-400">Advanced</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact