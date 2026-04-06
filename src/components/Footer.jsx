// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Footer Menu / Section Links */}
        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#projects" className="hover:text-yellow-300 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-yellow-300 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
        </div>

        {/* Footer Copyright */}
        <p className="text-sm md:text-base">&copy; 2026 Atif Jamil Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;