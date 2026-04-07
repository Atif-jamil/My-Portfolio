import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaRegClock } from 'react-icons/fa'

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
      value: '+92 341 0437852',
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
            <span className="text-[#ff6a00]">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6a00] mx-auto rounded-full" />
          <p className="text-[#bfbfbf] mt-4 max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="relative group p-5 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#ff6a00] transition-all duration-300 overflow-hidden"
              >
                {/* Orange glow effect on hover */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="absolute inset-0 rounded-2xl bg-[#ff6a00] blur-xl opacity-10"></span>
                </span>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/10 flex items-center justify-center text-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-white transition-all duration-300">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#bfbfbf] mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-lg text-white hover:text-[#ff6a00] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <FaPaperPlane className="text-[#ff6a00]" />
              Send a Message
            </h3>
            <p className="text-[#bfbfbf] text-sm mb-6">
              I'll get back to you as soon as possible
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#bfbfbf] focus:outline-none focus:border-[#ff6a00] focus:shadow-[0_0_10px_rgba(255,106,0,0.2)] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#bfbfbf] focus:outline-none focus:border-[#ff6a00] focus:shadow-[0_0_10px_rgba(255,106,0,0.2)] transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#bfbfbf] focus:outline-none focus:border-[#ff6a00] focus:shadow-[0_0_10px_rgba(255,106,0,0.2)] transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative group w-full py-3 rounded-xl bg-[#ff6a00] text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="absolute inset-0 rounded-xl bg-[#ff6a00] blur-xl opacity-60"></span>
                </span>
              </motion.button>
            </form>

            {/* Response Time Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#bfbfbf]">
              <FaRegClock className="text-[#ff6a00]" />
              <span>Usually responds within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact