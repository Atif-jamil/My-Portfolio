// src/components/Footer.jsx
import React from "react";
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#0f0f0f] border-t border-[#2a2a2a] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* Logo / Brand - Hero Style Font */}
          <div className="text-center md:text-left">
            <h3 
              className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white to-[#ff6a00] bg-clip-text text-transparent"
              style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
            >
              Atif Jamil
            </h3>
            <p className="text-[#bfbfbf] text-sm mt-1">Full Stack Developer</p>
          </div>

          {/* Social Links - Orange Background on Hover, White Icon */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Atif-jamil"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-[#ff6a00]"
            >
              {/* Orange background that appears on hover */}
              <span className="absolute inset-0 bg-[#ff6a00] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              {/* Icon - changes to white on hover */}
              <FaGithub className="relative z-10 text-[#bfbfbf] group-hover:text-white transition-colors duration-300 text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/atif-jamil/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-[#ff6a00]"
            >
              <span className="absolute inset-0 bg-[#ff6a00] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              <FaLinkedin className="relative z-10 text-[#bfbfbf] group-hover:text-white transition-colors duration-300 text-lg" />
            </a>
            <a
              href="mailto:atifjamil700@gmail.com"
              className="relative group w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-[#ff6a00]"
            >
              <span className="absolute inset-0 bg-[#ff6a00] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              <FaEnvelope className="relative z-10 text-[#bfbfbf] group-hover:text-white transition-colors duration-300 text-lg" />
            </a>
          </div>

          {/* Back to Top Button - Same hover effect */}
          <button
            onClick={scrollToTop}
            className="relative group flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden transition-all duration-300 hover:border-[#ff6a00]"
          >
            <span className="absolute inset-0 bg-[#ff6a00] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            <FaArrowUp className="relative z-10 text-[#bfbfbf] group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10 text-sm font-medium text-[#bfbfbf] group-hover:text-white transition-colors duration-300">Top</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent mb-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors">Home</a>
            <a href="#about" className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors">About</a>
            <a href="#projects" className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors">Projects</a>
            <a href="#experience" className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors">Experience</a>
            <a href="#contact" className="text-[#bfbfbf] hover:text-[#ff6a00] transition-colors">Contact</a>
          </div>

          {/* Copyright with Heart */}
          <p className="text-[#bfbfbf] text-sm flex items-center gap-1">
            © 2026 Atif Jamil. Made with
            <FaHeart className="text-[#ff6a00] text-xs" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;